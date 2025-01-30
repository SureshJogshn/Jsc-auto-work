import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full h-[678px] py-[70px] bg-gradient-to-r from-blue-600 to-blue-300'>
            <form className='flex flex-col rounded pb-[30px] shadow-lg shadow-blue-400 justify-center items-center w-[450px] h-[500px] 
              mx-auto bg-white shadow-lg shadow-white gap-5 '>
                <h1 className='font-semibold text-[23px] text-blue-400 mb-[20px]'>Login</h1>
                <input className='w-[320px] border-2 border-blue-500 outline-none rounded-md
                 p-2' type='email' placeholder='Enter your email' />
                <input className='w-[320px] border-2 border-blue-500 outline-none rounded-md
                 p-2' type='text' placeholder='Enter your password' />
                <input className='w-[320px] border-2 border-blue-500 text-blue-400 hover:border-green-400 rounded-lg text-center text-[18px] p-2
                mt-[10px] hover:text-green-400 font-semibold outline-none cursor-pointer' type='sumbit' value="Login" />
                <Link className='text-blue-500'>Forgot Password</Link>
            </form>
        </div>
    )
}

export default Login;
