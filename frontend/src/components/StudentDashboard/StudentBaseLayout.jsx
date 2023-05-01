import React, { Suspense, useEffect, useState } from 'react';


import { Route, Routes } from 'react-router-dom';

import './Styles/student.css'

import Header from './Header';
import Footer from './Footer';
import StudentDashboard from '../Views/Student/StudentDashboard';
import QuizPanel from '../Views/Student/QuizPanel';
import CodeEditor from '../Views/Student/CodeEditor';
import QuizAttempt from '../Views/Student/QuizAttempt';
import Results from '../Views/Student/Results';
import Settings from '../Views/Student/Settings';

function StudentBaseLayout() {
    const [showFooter,setShowFooter] = useState(true);
    
    useEffect(()=>{
        setShowFooter(true);
    },[])
    const resetShowFooter = () =>{
        setShowFooter(false);
    }
    return (
        <>
            <div className='right-pane top'>
                <Header />
                <div className='contain'>
                    <div className='animated fadeIn'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path='/' element={<StudentDashboard />} />
                                <Route path='/quiz' element={<QuizPanel/>} />
                                <Route path='/attempt' element={<QuizAttempt/>} />
                                <Route path='/code' element={<CodeEditor resetShowFooter={resetShowFooter}/>} />
                                <Route path='/results' element={<Results/>} />
                                <Route path='/settings' element={<Settings/>} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
               
            </div>
           {showFooter && <Footer />}
        </>

    )
}

export default StudentBaseLayout;
