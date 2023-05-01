import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";

function QuizPanel() {

    const [quizCat, setQuizCat] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if(quizCat){
            navigate("/student-dashboard/attempt", { state: { quizCat } })
            console.log({quizCat});
        }
    },[quizCat,navigate])

    const handleClick = (quizCat) => {
        setQuizCat(quizCat)
    }
    const quizData = [
        {
          name: 'Arrays',
          Questions: 20,
          Solved: '2',
          Button: (
            <button className='continue-btn' onClick={() => handleClick('Arrays')}>
              Continue
            </button>
          ),
        },
        {
          name: 'Classes',
          Questions: 20,
          Solved: '2',
          Button: (
            <button className='continue-btn' onClick={() => handleClick('Classes')}>
              Continue
            </button>
          ),
        },
        {
          name: 'Loops',
          Questions: 20,
          Solved: '2',
          Button: (
            <button className='continue-btn' onClick={() => handleClick('Loops')}>
              Continue
            </button>
          ),
        },
        {
          name: 'Conditional Statements',
          Questions: 20,
          Solved: '2',
          Button: (
            <button
              className='continue-btn'
              onClick={() => handleClick('Conditional Statements')}
            >
              Continue
            </button>
          ),
        },
      ];
    
    
    return (
        <>
            <div className='row'>
                <div className='quiz-head'>
                    <h4>Quizzes</h4>
                    <p>Your Categories are...</p>
                </div>
            </div>
            <div className='row' style={{ margin: "5em 3em" }}>
                <div className='col-md-12'>
                    <div className='quiz-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Total Questions</th>
                                    <th>Solved</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizData.map((quiz, index) => (
                                    <tr key={index}>
                                        <td>{quiz.name}</td>
                                        <td>{quiz.Questions}</td>
                                        <td>{quiz.Solved}</td>
                                        <td>{quiz.Button}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizPanel