// Login.js
import React, { useState } from 'react';
import NavBar2 from './NavBar2'

const Login = () => {
  const [id, setId] = useState('');
  const [user, setUser] = useState(null);
  const [courses,setCourses] = useState(null);
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login/instructor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);

        try {
          const response = await fetch('http://localhost:5000/instructor/teaches', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
    
          if (response.ok) {
            const userData = await response.json();
            setCourses(userData);
            console.log(courses);
            setIsLoggedIn(true);
          } else {
            console.error('Login failed');
            alert("Error Occurred!!!");
          }
        } catch (error) {
          console.error('Error during login', error);
          alert("Error Occurred!!!");
        }
      } else {
        console.error('Login failed');
        alert("Error Occurred!!!");
      }
    } catch (error) {
      console.error('Error during login', error);
      alert("Error Occurred!!!");
    }
  };

  function changeStatus() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="relative">
      <NavBar2/>
    {isLoggedIn === false &&
      <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="Enter your ID"
            value={id}
            onChange={(e) => {setId(e.target.value)}}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      </div>
    }
      {isLoggedIn && user && courses && (
        <div className="py-[100px] px-[50px] space-y-8">
          <div className=' space-y-2'>
          <h2 className='text-xl'>Instructor Name : <span className="text-xl font-bold">{user.name}</span></h2>
          <h2 className='text-xl'>Department : <span className="text-xl font-bold">{user.dept_name}</span></h2>
          </div>
          <div>
            <div className='text-xl'>Courses taught by the instructor:</div>
            {courses.map((u) => (
                    <div className='flex gap-8 mt-2'>
                    <div className='text-xl text-slate-800'>Course ID : <span className='font-bold'>
                      {u.course_id}
                      </span>
                      </div>
                      <div className='text-xl text-slate-800'>Course Name : <span className='font-bold'>
                      {u.course_name}
                      </span>
                      </div>
                    </div>
                ))
            }
          </div>
          <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={changeStatus}
          >
            Log Out
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Login;
