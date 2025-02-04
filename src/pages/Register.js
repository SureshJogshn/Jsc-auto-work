import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, provider, db } from '../firebase';
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { MdLockPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoMdPhonePortrait } from "react-icons/io";
import { setDoc, doc } from 'firebase/firestore';


export default function Register() {
    const [registerUser, setRegisterUser] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
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
            alert("Register Successfully");
            console.log(userCreate);
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterConfirmPassword("");
            navigate("/home");
        } catch (error) {
            console.log(error.message);
            alert("Register failed");
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
            alert("google signing");
            navigate("/home");
        } catch (error) {
            alert("google signing failed");
        }
    }

    return (
        <div className='w-full h-screen pt-[20px]'>
            <div className='text-center  mx-auto text-white mt-[50px] text-[14px]
            bg-[#3674B5] uppercase w-[304px] shadow-sm shadow-black font-semibold p-2'>
                <h1>Welcome</h1>
                <h1>JSC Auto Electric Work's</h1>
            </div>
            <form className='flex flex-col gap-4 p-6 py-[16px] mt-2 shadow-sm shadow-black w-[300px] h-[500px] mx-auto bg-white'>
                <div className='flex flex-row justify-center items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <MdEmail className='text-gray-700 text-[25px] ' />
                    <input onChange={(event) => setRegisterUser(event.target.value)} value={registerUser}
                        className='outline-none text-[16px]' placeholder='Username' />
                </div>

                <div className='flex flex-row justify-center items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <MdEmail className='text-gray-700 text-[25px] ' />
                    <input onChange={(event) => setRegisterEmail(event.target.value)} value={registerEmail}
                        className='outline-none text-[16px]' placeholder='Email id' />
                </div>

                <div className='flex flex-row justify-center items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <IoMdPhonePortrait className='text-gray-700 text-[25px] ' />
                    <input onChange={(event) => setRegisterPhone(event.target.value)} value={registerPhone}
                        className='outline-none text-[16px]' placeholder='Phone number' />
                </div>

                <div className='flex flex-row justify-center items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <FaUserLock className='text-gray-700 text-[25px]' />
                    <input onChange={(event) => setRegisterPassword(event.target.value)} value={registerPassword}
                        className='outline-none text-[16px]' placeholder='Password' required />
                </div>

                <div className='flex flex-row justify-center items-center w-[250px] border-2 border-gray-400
                gap-2 px-2 py-[4px] rounded'>
                    <MdLockPerson className='text-gray-700 text-[25px]' />
                    <input onChange={(event) => setRegisterConfirmPassword(event.target.value)} value={registerConfirmPassword}
                        className='outline-none text-[16px]' placeholder='Confirm password' required />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <button onClick={register} className='bg-[#3674B5] duration-100
                 border-2 border-white text-white hover:bg-[#578FCA]
                font-semibold text-[14px] text-black py-2 rounded-lg '>Sign Up</button>

                    <button onClick={() => navigate("/login")} className='border-2 hover:bg-[#3674B5] hover:text-white border-[#3674B5] text-[#3674B5] 
                font-semibold text-[14px] text-black py-[5px] rounded-lg'>Sign in</button>

                </div>
                <p className='text-gray-400 text-[16px] text-center'>----------------- OR -----------------</p>
                <button onClick={googleSignup}
                    className='border-2 border-[#3674B5] text-[14px] font-semibold text-red-700 py-2 px-10
                    rounded-full flex flex-row items-center hover:bg-[#578FCA]
                     hover:text-white justify-evenly '><FcGoogle className='text-[18px]' />Sign up with Google</button>
            </form>
        </div>
    )
}
