// LoginPage.js
import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import Navbar from './NavBar';

const LoginPage = () => {
    let location = useLocation();
    console.log(location.pathname);
  return (
    <div className='relative'>
      <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Choose your role:</h2>
      <div className="flex space-x-4">
        <Link to="/login/student" className="bg-blue-500 text-white px-4 py-2 rounded">
          Student
        </Link>
        <Link to="/login/instructor" className="bg-green-500 text-white px-4 py-2 rounded">
          Instructor
        </Link>
        <Link to="/login/advisor" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Advisor
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
