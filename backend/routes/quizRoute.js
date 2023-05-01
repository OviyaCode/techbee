const express = require('express');
const router = express.Router();
const {
    getQuizCategories, 
    setQuizCategories, 
    putQuizCategories, 
    deleteQuizCategories} = 
    require('../controllers/questionCategoryController')


router.route('/')
            .get(getQuizCategories)
            .post(setQuizCategories)

router.route('/:id')
            .put(putQuizCategories)
            .delete(deleteQuizCategories)

module.exports = router;