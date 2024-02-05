// HomePage.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar.js'


const HomePage = () => {
    let location = useLocation();
    console.log(location.pathname);
  return (
    <div className='relative'>
      <NavBar/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to <span className='text-5xl text-red-500'>JC University</span> Management System</h1>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">
          Signup
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
