import React, { Suspense, useState, createContext } from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';



import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import BaseLayout from './components/Dashboard/BaseLayout';
import StudentBaseLayout from './components/StudentDashboard/StudentBaseLayout';

export const AuthContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <HashRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/*" element={<BaseLayout />} />
            <Route path="/student-dashboard/*" element={<StudentBaseLayout />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
