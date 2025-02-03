import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

    return (
        <div className='w-full bg-[#2C2F3A] h-screen pt-[80px]'>
            <h1 className='text-center text-white uppercase w-[350px] font-semibold p-2 mx-auto bg-gradient-to-r mt-[70px] from-white'>Login</h1>
            <form className='flex flex-col gap-4 p-8 py-[100px] w-[350px] shadow-xl shadow-black h-[400px] mx-auto rounded bg-white mt-[20px]'>
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter the email' />
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter the phone number' />
                <button className='border border-2 bg-green-700 text-white py-2 mt-3 rounded'>Login</button>
                <button className='text-blue-500 rounded'>forgot password</button>
            </form>
        </div>
    )
}
