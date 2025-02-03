import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {

    return (
        <div className='w-full bg-[#2C2F3A] h-screen pt-[80px]'>
            <h1 className='text-center text-white uppercase w-[350px] font-semibold p-2 mx-auto bg-gradient-to-r mt-[40px] from-white'>Register</h1>
            <form className='flex flex-col gap-4 p-6 py-[50px] w-[350px] shadow-xl shadow-black h-[450px] mx-auto rounded bg-white mt-[20px]'>
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter the username' />
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter the email' />
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter the phone number' />
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter the password' />
                <input type='text' className='border border-black p-2 rounded' placeholder='Enter confirm password' />
                <button className='border border-2 bg-green-700 text-white py-2 mt-3 rounded'>Register</button>
            </form>
        </div>
    )
}
