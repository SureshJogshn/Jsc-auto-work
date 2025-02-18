import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, provider, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { IoCarSport } from "react-icons/io5";


export default function Register() {
    const [registerUser, setRegisterUser] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [msg, setMessage] = useState("");
    const [errorMessage, seterrorMessage] = useState("");
    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault();
        if (registerPassword !== registerConfirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const userCreate = await createUserWithEmailAndPassword(
                // Register user with email and password
                auth,
                registerEmail,
                registerPassword,
                //save data
            );
            // updte name
            const user = userCreate.user;
            await setDoc(doc(db, "users", user.uid), {
                registerUser: registerUser,
                registerEmail: registerEmail,
                registerPhone: registerPhone,
                registerPassword: registerPassword,
                uid: user.uid,
            })

            await updateProfile(user, {
                displayName: registerUser
            });
            setMessage("Register Successfully");
            console.log(userCreate);
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterConfirmPassword("");
            navigate("/login");
        } catch (error) {
            console.log(error.message);
            seterrorMessage("Register failed");
        }
    }

    const googleSignup = async (event) => {
        event.preventDefault();
        try {
            const result = await signInWithPopup(
                auth,
                provider,
            );
            console.log(result);
            setMessage("google signing");
            navigate("/login");
        } catch (error) {
            alert("google signing failed");
        }
    }

    return (
        <div className='w-full h-screen pt-[20px] bg-cover bg-center bg-[#0f0f0f]'>
            <form className='flex flex-col gap-3 p-6 py-[5px] bg-[#181818] mt-2 w-[300px] h-[630px] mx-auto'>
                <div className='text-center mx-auto text-white text-[16px]
            uppercase text-[16px] font-semibold p-2'>
                    <IoCarSport className='text-center text-green-600 text-5xl mx-auto' />
                    <h1>Welcome</h1>
                    <h1>JSC Auto Electric Work's</h1>
                </div>
                <div className='flex flex-row items-center gap-1 text-[12px] mx-auto'>
                    <h3 className='text-gray-500'>Dont have an account yet?</h3>
                    <button onClick={() => navigate("/login")} className='text-[#3674B5] 
                        font-semibold text-[14px] hover:text-green-400 py-[5px] rounded '>Login</button>
                </div>
                <div className='flex flex-row bg-[#0f0f0f] justify-center items-center w-[250px]
                gap-2 px-2 py-[5px] rounded'>
                    <input onChange={(event) => setRegisterUser(event.target.value)} value={registerUser}
                        className='outline-none py-1 text-[14px] text-white bg-[#0f0f0f]' placeholder='Username' required />
                </div>

                <div className='flex flex-row justify-center bg-[#0f0f0f] items-center w-[250px]
                gap-2 px-2 py-[4px] rounded'>
                    <input onChange={(event) => setRegisterEmail(event.target.value)} value={registerEmail}
                        className='outline-none py-1 text-[14px] text-white bg-[#0f0f0f]' placeholder='Email id' required />
                </div>

                <div className='flex flex-row justify-center bg-[#0f0f0f] items-center w-[250px]
                gap-2 px-2 py-[4px] rounded'>
                    <input onChange={(event) => setRegisterPhone(event.target.value)} value={registerPhone}
                        className='outline-none py-1 text-[14px] text-white bg-[#0f0f0f]' placeholder='Phone number' required />
                </div>

                <div className='flex flex-row justify-center bg-[#0f0f0f] items-center w-[250px]
                gap-2 px-2 py-[4px] rounded'>
                    <input onChange={(event) => setRegisterPassword(event.target.value)} value={registerPassword}
                        className='outline-none py-1 text-[14px] text-white bg-[#0f0f0f]' placeholder='Password' required />
                </div>

                <div className='flex flex-row justify-center bg-[#0f0f0f] items-center w-[250px]
                gap-2 px-2 py-[4px] rounded'>
                    <input onChange={(event) => setRegisterConfirmPassword(event.target.value)} value={registerConfirmPassword}
                        className='outline-none py-1 text-[14px] text-white bg-[#0f0f0f]' placeholder='Confirm password' required />
                </div>
                {
                    register ?
                        <h1 className='text-center font-semibold text-green-500'>{msg}</h1>
                        :
                        <h1 className='text-center font-semibold text-red-500'>{errorMessage}</h1>
                }
                <div className='flex flex-col gap-2'>
                    <button onClick={register} className='bg-[#0174da] duration-100 text-white hover:bg-[#578FCA]
                font-semibold text-[14px] text-black py-2 rounded-lg '>Sign Up</button>
                </div>
                <p className='text-gray-400 text-[16px] text-center'>----------------- OR -----------------</p>
                <button onClick={googleSignup}
                    className='border-2 border-[#3674B5] text-[14px] font-semibold text-white py-2 px-10
                    rounded-full flex flex-row items-center
                     hover:text-[#3674B5] justify-evenly '><FcGoogle className='text-[18px]' />Sign up with Google</button>
            </form>
        </div>
    )
}
