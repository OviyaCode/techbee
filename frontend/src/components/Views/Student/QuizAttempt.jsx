import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ArrayQuestions, ClassesQuestions, ConditionalStatementQuestions, LoopQuestions } from '../../../data/questions';

function QuizAttempt() {

    const navigate = useNavigate();

    const location = useLocation();

    const { quizCat } = location.state || {};

    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState('');

    useEffect(() => {
        let q = [];
        if (quizCat === 'Arrays') {
            q = ArrayQuestions;

        }
        else if (quizCat === 'Classes') {
            q = ClassesQuestions;

        }
        else if (quizCat === 'Loops') {
            q = LoopQuestions;

        }
        else if (quizCat === 'ConditionalStatements') {
            q = ConditionalStatementQuestions;

        }
        else if(quizCat === ''){
            q = "Select the quiz category"
        }
        setQuestions(q);
    }, [quizCat])

    useEffect(() => {
        if (selectedQuestion) {
            navigate("/student-dashboard/code", { state: { selectedQuestion, quizCat } });
        }
    }, [selectedQuestion, quizCat, navigate])

    const handleAttempt = (selectedQuestion) => {
        setSelectedQuestion(selectedQuestion)
    }
    return (
        <div className='quiz-container'>
            <h4>Quiz Attempt - {quizCat} </h4>
            <table className="quiz-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.question}</td>
                            <td><button onClick={() => handleAttempt(question.question)}>Attempt the Quiz</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(QuizAttempt);