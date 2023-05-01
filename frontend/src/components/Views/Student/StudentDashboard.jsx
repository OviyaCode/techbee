import React from 'react';
import {useNavigate} from "react-router-dom";

import { BsCodeSlash, BsCheckCircleFill } from 'react-icons/bs';
import NumberCounter from '../../StudentNumCounter';
import ProgressBar from '../../StudentDashboard/ProgressBar';
import '../../StudentDashboard/Styles/progressbar.css'
import ProgressBar2 from '../../StudentDashboard/ProgressBar2';
function StudentDashboard() {

  const navigate = useNavigate();

  const Goquiz = () =>{
    navigate('/student-dashboard/quiz')
  }
  const GoResult = () =>{
    navigate('/student-dashboard/results')
  }
  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='prep-head'>
            <div className=''>
              <h4>Your Preparation</h4>
            </div>
          </div>
        </div>

      </div>
      <div className='row' style={{ marginTop: "5em" }}>
        <div className='col-lg-4 col-md-8'>
          <div className='card ' style={{ marginLeft: "3em", height: "150px" }}>
            <div className='card-body'>
              <div className='stat-widget-five'>
                <div className='stat-icon dib flat-color-2'>
                  <BsCheckCircleFill />
                </div>
                <div className='stat-content'>
                  <div className='text-left dib'>
                    <div className='stat-text'>
                      <NumberCounter/>
                    </div>
                    <ProgressBar />
                    <div className='stat-heading'>Tasks Completed
                    <button className='go-btn' onClick={Goquiz}>Continue</button></div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-8'>
          <div className='card' style={{ marginLeft: "3em", height: "150px" }}>
            <div className='card-body'>
              <div className='stat-widget-five'>
                <div className='stat-icon dib flat-color-3'>
                  <BsCodeSlash />
                </div>
                <div className='stat-content'>
                  <div className='text-left dib'>
                    <div className='stat-text'>
                      <NumberCounter />
                    </div>
                    <ProgressBar2 />
                    <div className='stat-heading'>Problems Solved
                    <button className='go-btn2' onClick={GoResult}>Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(StudentDashboard);

