/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { admin_login } from '../../store/Reducers/authReducer';
import {  useDispatch,useSelector } from 'react-redux';
const Adminlogin = () => {
  const dispatch= useDispatch();
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const submit = (e) => {
    e.preventDefault();
    // console.log(state);
    dispatch(admin_login(state));
  }

  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
      <div className='w-[350px] text-[#d0d2d6] p-2'>
        <div className='bg-[#283046] p-2 rounded-md'>
          <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
              <img className='h-full w-full' src="http://localhost:3000/images/logo.png" alt="" />
            </div>
          </div>
          <form onSubmit={submit}>
            {/* emeil */}
            <div className="flex flex-col  w-full gap-1 mb-3">
              <label htmlFor='Email'>
                Email
              </label>
              <input onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='email' placeholder='Email' id='email' required />
            </div>
            {/* password */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor='Password'>
                Password
              </label>
              <input onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='password' placeholder='Password' id='password' required />
            </div>
            {/* buttom */}
            <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Adminlogin;
