import React from 'react';

import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';


import CreateAdmin from "../Views/Admin/CreateAdmin";
import AdminList from '../Views/Admin/AdminList';
import Dashboard from '../Views/home/Dashboard';
import EditorList from '../Views/Editor/EditorList';
import QuesCreate from '../Views/Quiz/CreateQuiz';
import QuesList from '../Views/Quiz/QuizList';
import CreateQuizCat from '../Views/QuizCat/CreateQuizCat';
import QuizCatList from '../Views/QuizCat/QuizCat';
import ResultRecord from '../Views/Result/ResultRecord';
import UpdateUser from '../Views/Admin/UpdateUser';
import UpdateQuizCat from '../Views/QuizCat/UpdateQuizCat';
import UpdateQuiz from '../Views/Quiz/UpdateQuiz';
import Settings from '../Views/Student/Settings';

import { Suspense } from 'react';



function BaseLayout() {


  return (
    <>
    <Aside />
    <div id="right-panel" className="right-panel top">
      <Header />
      
      <div className="content">
        <div className="animated fadeIn">
          <Suspense>
            <Routes>
            <Route path='/' element={<Dashboard />} />
              <Route path='/admin/create' element={<CreateAdmin />} />
              <Route path='/admin/list' element={<AdminList />} />
              <Route path='/admin/update/:id' element={<UpdateUser />} />
              <Route path='/editor/list' element={<EditorList />} />
              <Route path='/quiz-cat/create' element={<CreateQuizCat />} />
              <Route path='/quiz-cat/list' element={<QuizCatList />} />
              <Route path='/quiz-cat/update/:id' element={<UpdateQuizCat />} />
              <Route path='/questions/create' element={<QuesCreate />} />
              <Route path='/questions/list' element={<QuesList />} />
              <Route path='/questions/update/:id' element={<UpdateQuiz />} />
              <Route path='/results/record' element={<ResultRecord />} />
              <Route path='/settings/password-update' element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  </>
  );
}

export default BaseLayout;
