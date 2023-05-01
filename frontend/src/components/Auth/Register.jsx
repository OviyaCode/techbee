import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
 
  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.name === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.confirmPassword === '') {
      toast.error('Please enter required fields');
      return;
    }
    else
    {
      if(password !== confirmPassword){
        toast.error("Password don't match");
        return;
      }
      else{
        toast.success('Welcome Back!');
        navigate('/');
      }
      
    }
  }

  return (
    <div className='Login-form-container'>
      <form className='Login-form' onSubmit={handleRegister}>
        <div className='Login-form-content'>
          <h3 className='Login-form-title'>Sign Up</h3>
          <div className='form-group mt-3'>
            <label>Username</label>
            <input type='text' className='form-control mt-1' name='name' value={name}  onChange={handleInputChange} placeholder='Enter usename' />
          </div>
          <div className='form-group mt-3'>
            <label>Email</label>
            <input type='email' className='form-control mt-1' name='email' value={email}  onChange={handleInputChange} placeholder='Enter email' />
          </div>
          <div className='form-group mt-3'>
            <label>Password</label>
            <input type='password' className='form-control mt-1' name='password' value={password}  onChange={handleInputChange} placeholder='Enter password' />
          </div>
          <div className='form-group mt-3'>
            <label>Confirm Password</label>
            <input type='password' className='form-control mt-1' name='confirmPassword' value={confirmPassword} onChange={handleInputChange}  placeholder='Retype password' />
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button type='submit' className='btn btn-primary btn-rounded w-50' >Register</button>
          </div>
          <p className='register text-center mt-2'>Already have <Link to="/">an account</Link>  </p>
        </div>
      </form>
    </div>
  );
}


export default Register;
