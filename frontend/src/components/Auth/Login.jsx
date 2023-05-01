import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        if (formData.email === '' || formData.password === '') {
            toast.error('Please enter required fields');
            return;
        }
        if (formData.email === 'vicky@gmail.com') {
            navigate('/dashboard');
            setLoggedIn(true)
        } else if (formData.email === 'user@gmail.com') {
            navigate('/student-dashboard');
            setLoggedIn(true)
        } else {
            toast.error('Invalid email or password');
        }
    }

    if (loggedIn) {
        navigate('/dashboard');
    }
    return (
        <div className='Login-form-container'>
            {loggedIn ? (
                <div>
                    <p>You already logged in!</p>
                </div>
            ) : (
                <form className='Login-form' onSubmit={handleLogin}>
                    <div className='Login-form-content'>
                        <h3 className='Login-form-title'>Sign In</h3>
                        <div className='form-group mt-3'>
                            <label>Email</label>
                            <input type='email' className='form-control mt-1' onChange={handleInputChange} value={email} name='email' placeholder='Enter email' />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Password</label>
                            <input type='password' className='form-control mt-1' onChange={handleInputChange} value={password} name='password' placeholder='Enter password' />
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button type='submit' className='btn btn-primary btn-rounded w-50' >Login</button>
                        </div>
                        <p className='register text-center mt-2'>New to <Link to="/register">TechBee</Link>  </p>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Login;
