// StudentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar2 from './NavBar2'


const StudentForm = () => {
  const [formData, setFormData] = useState({
    role:"student",
    id: '',
    name: '',
    dept_name: '',
    tot_cred: '',
  });
  // const [user,setUser] = ({});
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      user:formData
    };
    // console.log(user);
    // Example: Post data to API endpoint
    try{
      
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(response => response.json());
      
      alert("User Registered Successfully!!!");
      navigate('/login');
      
    } catch(error){
      console.error('Error during student signup', error)
      alert("User Registration Failed!!!");
    }
  };

  return (
    <div>
      <NavBar2/>
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 pt-[110px]">
        <div className='text-2xl'>

      <label className="block mb-2">Student ID</label>
      <input type="text" name="id" value={formData.id} onChange={handleChange} className="border p-2 mb-4" required />
        </div>

        <div className='text-2xl'>

      <label className="block mb-2">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 mb-4" required />
    </div>

    <div className='text-2xl'>

      <label className="block mb-2">Department Name</label>
      <input type="text" name="dept_name" value={formData.dept_name} onChange={handleChange} className="border p-2 mb-4" required />
    </div>

    <div className='text-2xl'>

      <label className="block mb-2">Total Credits</label>
      <input type="text" name="tot_cred" value={formData.tot_cred} onChange={handleChange} className="border p-2 mb-4" required />
    </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-52">Signup</button>
    </form>
    </div>
  );
};

export default StudentForm;
