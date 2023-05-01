const Submission = require('../models/submissionModel');
const Question = require('../models/questionModel');
const axios = require('axios');

const submitCode = async (req, res) => {
  try {
    const { userId, questionId, code, languageId, testCases } = req.body;

    const questionDetails = await Question.findById(questionId);
    if (!questionDetails) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const inputs = testCases.map(testCase => testCase.input);
    const expectedOutputs = testCases.map(testCase => testCase.output);

    const response = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
      source_code: code,
      language_id: languageId,
      stdin: JSON.stringify(inputs),
      expected_output: JSON.stringify(expectedOutputs),
      expected_output_files: [],
      callback_url: '', 
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      }
    });

    const submission = new Submission({
      user: userId,
      question: questionId,
      code,
      language: languageId,
      submissionId: response.data.token,
    });

    let score = 0;
    let submissionOutputs;

    // Wait for submission to finish executing
    while (true) {
      const submissionStatusResponse = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${response.data.token}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        }
      });

      if (submissionStatusResponse.data.status.id <= 2) {
        // Submission is still running, wait for 1 second before checking again
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        // Submission has finished executing, get its output
        submissionOutputs = submissionStatusResponse.data.stdout.split('\n');
        break;
      }
    }

    for (let i = 0; i < submissionOutputs.length; i++) {
      if (submissionOutputs[i] === expectedOutputs[i]) {
        score++;
      }
    }

    submission.score = score > 0 ? 'Pass' : 'Fail';
    submission.submissionOutputs = submissionOutputs;
    await submission.save();

    return res.status(200).json({ message: 'Submission received', result: submission.score, submissionOutput: submission.submissionOutputs, submissionId: response.data.token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  submitCode,
};
