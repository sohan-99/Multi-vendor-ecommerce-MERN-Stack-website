import React, { useState } from 'react';
import { AiFillAccountBook, AiFillGithub, AiFillTwitterCircle, AiOutlineGooglePlus } from 'react-icons/ai'
const Register = () => {
  const [state,setState] = useState({
    name: '',
    email: '',
    password: ''
  });
  const inputHandle= (e)=>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const submit= (e)=>{
e.preventDefault();
console.log(state);
  }

  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
      <div className='w-[350px] text-[#d0d2d6] p-2'>
        <div className='bg-[#283046] p-2'>
          <h2 className='text-2xl font-medium mb-3'>Welcome to E-Commerce</h2>
          <p className='text-xl font-normal mb-3'>Please Register to Your Account</p>
          <form onSubmit={submit}>
            {/* name */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor='name'>
                Name
              </label>
              <input onChange={inputHandle} value={state.name} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='name' placeholder='Name' id='name' required />
            </div>
            {/* emeil */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor='Email'>
                Email
              </label>
              <input onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='email' placeholder='Email' id='email' required />
            </div>
            {/* password */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor='Password'>
                Password
              </label>
              <input onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='password' placeholder='Password' id='password' required />
            </div>
            {/* checkbox */}
            <div className="flex items-center w-full gap-3 mb-3">
              <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500' type='checkbox' name='checkbox' id='checkbox' required />
              <label htmlFor='checkbox'>
                I agree to the terms and conditions
              </label>
            </div>
            {/* buttom */}
            <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
              SignUp
            </button>
            {/* signin option */}
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account? <a href="/login">Signin here</a>
              </p>
            </div>
            {/* soicial login */}
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            {/* button */}
            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] flex rounded-md shadow-lg bg-orange-700 hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span >
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md shadow-lg bg-indigo-700 hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiFillAccountBook />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md shadow-lg bg-cyan-700 hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span >
                  <AiFillGithub />
                </span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md shadow-lg  bg-purple-700 bg-orange-700hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span >
                  <AiFillTwitterCircle />
                </span>
              </div>
            </div>


          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;
