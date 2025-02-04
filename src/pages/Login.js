import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth'
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
            navigate("/home");
        } catch (error) {
            alert("login failed");
        }
    }

    const googleSignup = async (event) => {
        event.preventDefault();
        try {
            const result = await signInWithRedirect(
                auth,
                provider
            );
            console.log(result);
            alert("Signing Successfuly");
            navigate("/home");
        } catch (error) {
            console.log(error.meassage);
            alert("Signing failed!");
        }
    }

    return (
        <div className='w-full h-screen pt-[80px]'>
            <div className='text-center  mx-auto text-white mt-[50px] text-[14px]
            bg-[#3674B5] uppercase w-[270px] font-semibold p-2'>
                <h1>Welcome Back</h1>
                <h1>JSC Auto Electric Work's</h1>
            </div>
            <form className='flex flex-col gap-4 p-6 py-[50px] w-[300px] h-[420px] mx-auto rounded bg-white'>

                <div className='flex flex-row items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <MdEmail className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
                    <input onChange={(event) => setLoginEmail(event.target.value)} value={loginEmail}
                        className='outline-none text-[16px]' placeholder='Email Id' />
                </div>

                <div className='flex flex-row items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <FaUserLock className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
                    <input onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword}
                        className='outline-none' placeholder='Password' />
                </div>
                <button className='text-gray-400 text-[12px] text-end hover:text-gray-500'>Forgot Your Password?</button>
                <div className='flex flex-col gap-2'>
                    <button onClick={login} className='bg-[#3674B5] duration-100
                         border-2 border-white text-white hover:bg-[#578FCA]
                        font-semibold text-[14px] text-black py-2 rounded'>Sign In</button>

                    <button onClick={() => navigate("/register")} className='border-2 border-[#3674B5] text-[#3674B5] 
                        font-semibold text-[14px] hover:text-black py-[5px] rounded '>Sign Up</button>
                </div>
                <p className='text-gray-400 text-center text-[16px]'>----------------- OR -----------------</p>
                <button onClick={googleSignup}
                    className='border-2 border-[#3674B5] text-[14px] font-semibold text-black py-2
                            rounded-full flex flex-row items-center hover:bg-white text-red-500 py-2 px-10
                             hover:text-black justify-evenly'><FcGoogle className='text-[18px]' />Continue with Google</button>
            </form>
        </div>
    )
}
