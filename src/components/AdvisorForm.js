// advisorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar2 from './NavBar2';


const AdvisorForm = () => {
  const [formData, setFormData] = useState({
    role:"advisor",
    i_id:"",
    s_id:""
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
      console.error('Error during advisor signup', error)
      alert("User Registration Failed!!!");
    }
  };

  return (
    <div className='relative'>
      <NavBar2/>
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 pt-[110px]">
        <div className='text-2xl'>

      <label className="block mb-2">Instructor ID</label>
      <input type="text" name="i_id" value={formData.id} onChange={handleChange} className="border p-2 mb-4" required />
        </div>

        <div className='text-2xl'>

      <label className="block mb-2">Student ID</label>
      <input type="text" name="s_id" value={formData.name} onChange={handleChange} className="border p-2 mb-4" required />
    </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-52">Signup</button>
    </form>
    </div>
  );
};

export default AdvisorForm;
