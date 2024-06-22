import React from 'react';

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
      <div className='w-[350px] text-[#d0d2d6] p-2'>
        <div className='bg-[#283046] p-2'>
          <h2 className='text-xl mb-3'>Welcome to E-Commerce</h2>
          <p className='text-sm mb-3'>Please Register to Your Account and start your bussiness</p>
          <form>
            {/* name */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor='name'>
                Name
              </label>
              <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='name' placeholder='Name' id='name' required />
            </div>
            {/* emeil */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor='Email'>
                Email
              </label>
              <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='email' placeholder='Email' id='email' required />
            </div>
            {/* password */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor='Password'>
                Password
              </label>
              <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type='text' name='password' placeholder='Password' id='password' required />
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
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;
