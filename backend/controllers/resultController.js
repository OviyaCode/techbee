const Submission = require('../models/submissionModel');
const Result = require('../models/resultModel');

const getResult = async (req, res, next) => {
  try {
    const submission = await Submission.findOne({ submissionId: req.params.submissionId });

    if (!submission) {
      return res.status(404).json({
        message: "Submission not found"
      });
    }

    let score = 0;
    let overallResult = '';

    if (submission.score === 'Pass') {
      score = 10;
      overallResult = 'Pass';
    }

    if (submission.score === 'Fail') {
      score = 0;
      overallResult = 'Fail';
    }

    const result = new Result({
      user: submission.user,
      submission: submission._id, // use ObjectId of the submission
      overallResult,
      score
    });

    await result.save();

    res.status(200).json({
      message: "Result found",
      result: score
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error occurred while fetching result"
    });
  }
};

module.exports = {
  getResult,
};
