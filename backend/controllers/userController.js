const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!email || !password || !name) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token:generateJWT(user.id)
        })
    }
    else {
        res.status(400)
        throw new Error('Internal server error')
    }
})

const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            message: `Successfully logged in`,
            token:generateJWT(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getMe = asyncHandler(async (req, res) => {
    const {_id,email,name} = await User.findById(req.user.id);
    res.status(200).json({
        id:_id,
        name,
        email
    })
})

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn:'1d'
    });
}

module.exports = {
    registerUser,
    LoginUser,
    getMe
}