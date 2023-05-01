const express = require('express');
const router = express.Router();

const { getQuestions, 
        setQuestions, 
        getQuestionsByCategory, 
        updateQuestion, 
        deleteQuestion } = 

        require('../controllers/questionController')

router.route('/')
        .get(getQuestions)
        .post(setQuestions)

router.route('/category/:categoryId')
        .get(getQuestionsByCategory)

router.route('/:id')
        .put(updateQuestion)
        .delete(deleteQuestion)

module.exports = router

/**
 * need a code to Find the lowest odd number in the array using java
 */