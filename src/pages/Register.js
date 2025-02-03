import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import HeroSection from '../components/HeroSection';
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { MdLockPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();
        if (registerPassword !== registerConfirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const user = await createUserWithEmailAndPassword(
                // Register user with email and password
                auth,
                registerEmail,
                registerPassword,
            );
            console.log(user);
            alert("Register Successfully");
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterConfirmPassword("");
            <HeroSection />
        } catch (error) {
            console.log(error.message);
            alert("Register failed");
        }
    }

    const googleSignup = async () => {
        try {
            const result = await signInWithPopup(
                auth,
                provider,
            );
            console.log(result);
            alert("google signing");
        } catch (error) {
            alert("google signing failed");
        }
    }

    return (
        <div className='w-full h-screen pt-[80px]'>
            <div className='text-center  mx-auto text-white mt-[40px] text-[18px]
            shadow-sm shadow-black bg-[#3674B5] uppercase w-[300px] font-semibold p-2'>
                <h1>Welcome</h1>
                <h1>JSC Auto Electric Work's</h1>
            </div>
            <form className='flex flex-col gap-4 p-6 py-[50px] w-[300px] h-[420px] mx-auto rounded bg-white shadow-sm shadow-black mt-[20px]'>

                <div className='border-2 border-gray-300 rounded-lg flex justify-center items-center'>
                    <MdEmail className='text-gray-700 text-[18px]' />
                    <input onChange={(event) => setRegisterEmail(event.target.value)} value={registerEmail}
                        className='outline-none  p-1 pl-3 ' placeholder='Email Id' />
                </div>

                <div className='border-2 border-gray-300 rounded-lg flex justify-center items-center'>
                    <FaUserLock className='text-gray-700 text-[18px]' />
                    <input onChange={(event) => setRegisterPassword(event.target.value)} value={registerPassword}
                        className='outline-none p-1 pl-3' placeholder='Password' required />
                </div>

                <div className='border-2 border-gray-300 rounded-lg flex justify-center items-center'>
                    <MdLockPerson className='text-gray-700 text-[18px]' />
                    <input onChange={(event) => setRegisterConfirmPassword(event.target.value)} value={registerConfirmPassword}
                        className='outline-none p-1 pl-3' placeholder='Confirm Password' required />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <button onClick={register} className='bg-[#3674B5] duration-100
                 border-2 border-white text-white hover:bg-[#578FCA]
                font-semibold text-[14px] text-black py-2 rounded-lg '>Sign Up</button>

                    <button onClick={() => navigate("/login")} className='border-2 hover:bg-[#3674B5] hover:text-white border-[#3674B5] text-[#3674B5] 
                font-semibold text-[14px] text-black py-[5px] rounded-lg'>Sign in</button>

                </div>
                <p className='text-gray-400 text-[16px]'>----------------- OR -----------------</p>
                <button onClick={googleSignup}
                    className='border-2 border-[#3674B5] text-[14px] font-semibold text-red-700 py-2 px-10
                    rounded-lg flex flex-row items-center hover:bg-[#578FCA]
                     hover:text-white justify-evenly'><FcGoogle className='text-[18px]' />Sign up with Google</button>
            </form>
        </div>
    )
}
