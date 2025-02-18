import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { IoCarSport } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

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

    // useEffect(() => {
    //     getRedirectResult(auth)
    //         .then((result) => {
    //             if (result?.user) {
    //                 console.log("Login Sucessful...", result.user);
    //                 navigate("/home");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("error", error.message);
    //         })
    // }, [navigate]);

    // const googleSignup = () => {
    //     signInWithRedirect(auth, provider);
    // }

    const googleSignup = async (event) => {
        event.preventDefault();
        try {
            const result = await signInWithPopup(
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
        <div className='w-full h-screen pt-[60px] bg-cover bg-center bg-[#0f0f0f]'>
            <form className='flex flex-col gap-4 p-6 py-[10px] w-[300px] h-[560px] mx-auto rounded bg-[#181818]'>
                <div className='text-center text-white text-[16px] mb-5 uppercase font-semibold p-4'>
                    <IoCarSport className='text-center text-green-600 text-5xl mx-auto' />
                    <h1>Welcome Back</h1>
                    <h1>JSC Auto Electric Work's</h1>
                </div>
                <div className='flex flex-row items-center gap-1 text-[12px] mx-auto'>
                    <h3 className='text-gray-500'>Dont have an account yet?</h3>
                    <button onClick={() => navigate("/")} className='text-[#3674B5] 
                        font-semibold text-[14px] hover:text-green-400 py-[5px] rounded '>Sign Up</button>
                </div>
                <div className='flex flex-row justify-center items-center w-[250px] bg-[#0f0f0f]
                gap-2 px-2 py-[4px] rounded'>
                    <MdEmail className='text-white' />
                    <input onChange={(event) => setLoginEmail(event.target.value)} value={loginEmail}
                        className='outline-none text-[14px] py-1 text-white bg-[#0f0f0f]' placeholder='email address' />
                </div>

                <div className='flex flex-row justify-center items-center w-[250px] bg-[#0f0f0f]
                gap-2 px-2 py-[4px] rounded'>
                    <input onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword}
                        className='outline-none bg-[#0f0f0f] py-1 text-[14px] text-white' placeholder='Password' />
                </div>
                <button className='text-gray-400 text-[12px] text-end hover:text-gray-500'>Forgot Your Password?</button>
                <div className='flex flex-col gap-2'>
                    <button onClick={login} className='bg-[#0174da] duration-100
                         text-white hover:bg-[#578FCA]
                        font-semibold text-[14px] text-black py-2 rounded'>Sign In</button>
                </div>
                <p className='text-gray-400 text-center text-[16px]'>----------------- OR -----------------</p>
                <button onClick={googleSignup}
                    className='border-2 border-[#3674B5] text-[14px] font-semibold text-white py-2
                            rounded-full flex flex-row items-center hover:bg-white text-black py-2 px-10
                             hover:text-[#3674B5] justify-evenly'><FcGoogle className='text-[18px]' />Continue with Google</button>
            </form>
        </div>
    )
}
