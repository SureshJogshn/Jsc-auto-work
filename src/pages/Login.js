import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            alert("login successfully");
        } catch (error) {
            alert("login failed");
        }
    }

    const googleSignup = async () => {
        try {
            const result = await signInWithPopup(
                auth,
                provider
            );
            console.log(result);
            alert("Signing Successfuly");
        } catch (error) {
            console.log(error.meassage);
            alert("Signing failed!");
        }
    }

    return (
        <div className='w-full h-screen pt-[80px]'>
            <div className='text-center  mx-auto text-white mt-[40px] text-[18px]
            shadow-sm shadow-black bg-[#3674B5] uppercase w-[300px] font-semibold p-2'>
                <h1>Welcome Back</h1>
                <h1>JSC Auto Electric Work's</h1>
            </div>
            <form className='flex flex-col gap-4 p-6 py-[50px] w-[300px] h-[420px] mx-auto rounded bg-white shadow-sm shadow-black mt-[20px]'>

                <div className='border-2 border-gray-300 rounded-lg flex justify-center items-center'>
                    <MdEmail className='text-gray-700 text-[18px]' />
                    <input onChange={(event) => setLoginEmail(event.target.value)} value={loginEmail}
                        className='outline-none  p-1 pl-3 ' placeholder='Email Id' />
                </div>

                <div className='border-2 border-gray-300 rounded-lg flex justify-center items-center'>
                    <FaUserLock className='text-gray-700 text-[18px]' />
                    <input onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword}
                        className='outline-none p-1 pl-3' placeholder='Password' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <button onClick={login} className='bg-[#3674B5] duration-100
                         border-2 border-white text-white hover:bg-[#578FCA]
                        font-semibold text-[14px] text-black py-2 rounded-lg '>Sign In</button>

                    <button onClick={() => navigate("/register")} className='border-2 hover:bg-[#3674B5] hover:text-white border-[#3674B5] text-[#3674B5] 
                        font-semibold text-[14px] text-black py-[5px] rounded-lg '>Sign Up</button>

                </div>
                <p className='text-gray-400 text-[16px]'>----------------- OR -----------------</p>
                <button onClick={googleSignup}
                    className='border-2 border-[#3674B5] text-[14px] font-semibold text-black py-2
                            rounded-lg flex flex-row items-center hover:bg-[#578FCA] text-red-700 py-2 px-10
                             hover:text-white justify-evenly'><FcGoogle className='text-[18px]' />Continue with Google</button>
            </form>
        </div>
    )
}
