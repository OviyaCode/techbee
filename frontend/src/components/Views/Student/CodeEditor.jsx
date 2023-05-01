import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';

function CodeEditor(props) {

  const location = useLocation();
  const { selectedQuestion, quizCat } = location.state || {};
  const [language, setLanguage] = useState('java');
  const [code, setCode] = useState('');

  const {resetShowFooter} = props;

  useEffect(()=>{
    resetShowFooter();
  },[resetShowFooter]);


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }

  const navigate = useNavigate();

  const handleRun = () => {
    navigate('/student-dashboard/results', { state: { selectedQuestion, quizCat } })
  }

  useEffect(() => {
    const root = document.getElementById('root');
    const rightPane = document.querySelector('.right-pane');
    if (root) {
      root.style.backgroundColor = '#1d1d1d';
    }
    if (rightPane) {
      rightPane.style.backgroundColor = '#1d1d1d';
      console.log('setted');
    }
    document.body.style.backgroundColor = '#1d1d1d';
    console.log('setted');
    return () => {
      root.style.backgroundColor = '#ffffff';
      if (rightPane) {
        rightPane.style.backgroundColor = '#ffffff';
        console.log('removed');
      }
      document.body.style.backgroundColor = '#ffffff';
    };
  }, []);
  
  
  
 
  return (
    <div className='float-container'>
      <div className='float-child-left'>
        <div className='left-content'>
          <h6>Quiz category: {quizCat}</h6> 
         <br/>
          <h6>Selected question: {selectedQuestion}</h6>
        </div>
      </div>
      <div className='float-child-right'>
        <div className='right-child'>
          <div className='content'>
            <label>Select the language:</label>
            <span className='space'>
              <select value={language} onChange={handleLanguageChange}>
                <option value='java'>Java</option>
                <option value='cpp'>C++</option>
              </select>
            </span>
          </div>
        </div>
        <div className='right-child'>
          <AceEditor
            mode={language}
            theme="monokai"
            onChange={setCode}
            name="code-editor"
            value={code}
            style={{marginLeft:"5em"}}
            height="380px"
            width="90%"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div >
          <button className='run-btn' onClick={handleRun}>Run</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CodeEditor);