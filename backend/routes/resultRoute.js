const express = require('express');
const router = express.Router();

const {getResult} = require('../controllers/resultController');

router.route('/:submissionId').get(getResult)

module.exports = router;