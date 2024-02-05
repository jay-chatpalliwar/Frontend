// src/App.js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import StudentForm from './components/StudentForm';
import InstructorForm from './components/InstructorForm';
import AdvisorForm from './components/AdvisorForm';
// import Navbar from './components/NavBar'
import LoginStudent from './components/LoginStudent'
import LoginInstructor from './components/LoginInstructor'
import LoginAdvisor from './components/LoginAdvisor'

const App = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/student" element={<StudentForm />} />
        <Route path="/signup/instructor" element={<InstructorForm />} />
        <Route path="/signup/advisor" element={<AdvisorForm />} />
        <Route path="/login/student" element={<LoginStudent />} />
        <Route path="/login/instructor" element={<LoginInstructor />} />
        <Route path="/login/advisor" element={<LoginAdvisor />} />
    </Routes>
    </div>
  );
};

export default App;
