const asyncHandler = require('express-async-handler');
const Question = require('../models/questionModel');
const QuestionCategory = require('../models/questionCategoryModel')

const getQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({})
    res.status(200).json({
        count: questions.length,
        questions
    })
    // res.json({ message: 'question showing' })
})

const setQuestions = asyncHandler(async (req, res) => {
    if (!req.body.category || !req.body.title || !req.body.description || !req.body.testCases || !req.body.testCases.input || !req.body.testCases.output) {
        res.status(404)
        throw new Error('Please enter the required fields')
    }
    const question = await Question.create({
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        testCases: req.body.testCases,
        input: req.body.testCases.input,
        output: req.body.testCases.output

    })
    res.json({
        message: 'question created',
        question
    })
})
// /api/questions/category/
const getQuestionsByCategory = asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    //find the category by id
    console.log(categoryId);
    const category = await QuestionCategory.findById(categoryId);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }

    const questions = await Question.find({ category: categoryId }).select(
        '-category'
    );
    res.status(200).json({
        count: questions.length,
        category: category.name,
        questions: questions
    })
})

// /api/questions/:id
const updateQuestion = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.id);
    if (!question) {
        res.status(400)
        throw new Error('Question not found');
    }
    const updateQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
        updateQuestion
    })
});

// /api/questions/:id

const deleteQuestion = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.id);
    if (!question) {
        res.status(400)
        throw new Error('Question not found');
    }
    await question.deleteOne();

    res.status(200).json({
        message: `Question deleted ${req.params.id}`
    })
});

module.exports = {
    getQuestions,
    setQuestions,
    getQuestionsByCategory,
    updateQuestion,
    deleteQuestion
}