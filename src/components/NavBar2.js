// Navbar.js
import React from 'react';
// import { Link } from 'react-router-dom';
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white absolute w-screen mx-auto">
      <div className="container flex justify-between items-center gap-4">
        <div className="flex space-x-4">
        <img src={logo} alt="University Logo" className="w-10 h-10" />
        <Link to="/" className="text-4xl text-slate-200 pb-2 border-dashed border-b-2 border-slate-200 font-bold">
          JC University
        </Link>
        </div>
        <div className="flex space-x-4">
        <Link to="/" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Home
        </Link>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar2;
