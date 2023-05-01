import React from 'react'
// import { useLocation } from 'react-router-dom'

function Results() {

  const quizData = [
    {
      name: 'Arrays',
      Questions: 20,
      Solved: '2',
    },
    {
      name: 'Classes',
      Questions: 20,
      Solved: '2'
    },
    {
      name: 'Loops',
      Questions: 20,
      Solved: '2',
    },
    {
      name: 'Conditional Statements',
      Questions: 20,
      Solved: '2',
    },
  ];
  return (
    <div className='result-container'>
      <h4>Results</h4>
      <table>
        <thead>
          <tr>
            <th>Quiz Category</th>
            <th>Questions</th>
            <th>Solved</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {quizData.map((quiz,index)=>(
              <tr key={index}>
              <td>{quiz.name}</td>
              <td>{quiz.Questions}</td>
              <td>{quiz.Solved}</td>
              <td>Pass</td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(Results)

// {/* <td>{quizCat}</td>
//             <td>{selectedQuestion}</td>
//             <td>Pass</td> */}
// const location = useLocation();
 // const { quizCat, selectedQuestion } = location.state || {};
  