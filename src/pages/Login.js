import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { IoCarSport } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // for handling loading state
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    const login = async (event) => {
        event.preventDefault();

        if (!validateEmail(loginEmail)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (loginPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
            alert("Login successful!");
            navigate("/home");
        } catch (error) {
            console.error(error);
            let errorMessage = "Login failed. Please try again.";
            if (error.code === "auth/user-not-found") {
                errorMessage = "No user found with this email.";
            } else if (error.code === "auth/wrong-password") {
                errorMessage = "Incorrect password.";
            }
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    const googleSignup = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            alert("Signing Successful");
            navigate("/home");
        } catch (error) {
            console.error(error);
            alert("Signing failed. Please try again!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='w-full h-screen pt-[60px] bg-cover bg-center bg-[#0f0f0f]'>
            <form className='flex flex-col gap-4 p-6 py-[10px] w-[300px] h-[560px] mx-auto rounded bg-[#181818]'>
                <div className='text-center text-white text-[16px] mb-5 uppercase font-semibold p-4'>
                    <IoCarSport className='text-center text-green-600 text-5xl mx-auto' />
                    <h1>Welcome Back</h1>
                    <h1>JSC Auto Electric Work's</h1>
                </div>
                <div className='flex flex-row items-center gap-1 text-[12px] mx-auto'>
                    <h3 className='text-gray-500'>Don't have an account yet?</h3>
                    <button onClick={() => navigate("/")} className='text-[#3674B5] 
                        font-semibold text-[14px] hover:text-green-400 py-[5px] rounded'>Sign Up</button>
                </div>
                <div className='flex flex-row justify-center items-center w-[250px] bg-[#0f0f0f]
                gap-2 px-2 py-[4px] rounded'>
                    <MdEmail className='text-white text-[16px]' />
                    <input
                        onChange={(event) => setLoginEmail(event.target.value)}
                        value={loginEmail}
                        className='outline-none text-[14px] py-1 text-white bg-[#0f0f0f]'
                        placeholder='email address'
                    />
                </div>

                <div className='relative flex flex-row justify-center items-center w-[250px] bg-[#0f0f0f]
                gap-2 px-2 py-[4px] rounded'>
                    <RiLockPasswordFill className='text-white text-[16px]' />
                    <input
                        onChange={(event) => setLoginPassword(event.target.value)}
                        value={loginPassword}
                        type={showPassword ? "text" : "password"}
                        className='outline-none bg-[#0f0f0f] py-1 text-[14px] text-white'
                        placeholder='Password'
                    />
                    {/* Eye Icon Inside Input */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-[5%] top-[30%] text-white"
                    >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                </div>
                <button className='text-gray-400 text-[12px] text-end hover:text-gray-500'>Forgot Your Password?</button>
                <div className='flex flex-col gap-2'>
                    <button
                        onClick={login}
                        disabled={loading}
                        className={`bg-[#0174da] duration-100 
                            text-white ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#578FCA]'}
                            font-semibold text-[14px] text-black py-2 rounded`}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </div>
                <p className='text-gray-400 text-center text-[16px]'>----------------- OR -----------------</p>
                <button
                    onClick={googleSignup}
                    disabled={loading}
                    className={`border-2 border-[#3674B5] text-[14px] font-semibold text-white py-2
                        rounded-full flex flex-row items-center text-black py-2 px-10
                        hover:text-[#3674B5] justify-evenly ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <FcGoogle className='text-[18px]' />Continue with Google
                </button>
                <button
                    onClick={googleSignup}
                    disabled={loading}
                    className={`border-2 border-[#3674B5] text-[14px] font-semibold text-white
                        rounded-full flex flex-row items-center text-black py-2 px-8
                        hover:text-[#3674B5] justify-evenly ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <FaFacebook className='text-[18px] text-blue-500' />Continue with facebook
                </button>
            </form>
        </div>
    )
}
