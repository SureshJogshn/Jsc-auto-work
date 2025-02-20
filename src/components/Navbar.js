import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // For routing between pages
import { Link as ScrollLink } from 'react-scroll';  // For scrolling to sections
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from '../assets/logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";

export default function Navbar({ user }) {
    const [toggle, setToggle] = useState(true);
    const [myuser, setMyUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setMyUser(currentUser);
        });
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            alert("Logout Successfully");
            window.location.reload();
            navigate("/login");
        } catch (error) {
            alert("try again");
        }
    }

    return (
        <div className='fixed top-0 left-0 w-full z-50 duration-300 bg-[#181818]'>
            <div className='max-w-[1240px] mx-auto flex items-center p-7 md:p-5 gap-[100px] justify-between md:justify-around'>
                <div className='flex items-center'>
                    {toggle ?
                        <AiOutlineMenu
                            onClick={() => setToggle(!toggle)}
                            className='text-2xl md:text-3xl hover:text-gray-500 text-white duration-100 cursor-pointer md:hidden block'
                        /> :
                        <AiOutlineClose
                            onClick={() => setToggle(!toggle)}
                            className='text-2xl md:text-3xl text-white duration-100 cursor-pointer md:hidden block'
                        />
                    }
                    <img src={logo} alt='logo' className='hidden w-[90px] md:w-[130px]' />
                    <div className='text-[18px] md:text-lg lg:text-xl ml-2 uppercase text-white font-bold'>
                        <span className='text-orange-400'>J</span> <span className='text-white'>S</span> <span className='text-green-400'>c</span>
                    </div>
                </div>

                <ul className='hidden md:flex gap-9 text-xs sm:text-sm md:text-lg lg:text-xl text-white'>
                    <li>
                        <RouterLink className='hover:border-b-2 border-[#FBFBFB]' to="/home">Home</RouterLink>
                    </li>
                    <li>
                        <ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="services">Services</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="about">About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="contact">Contact</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="footer">Business Hub</ScrollLink>
                    </li>
                </ul>

                {
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <img src={myuser.photoURL} alt='user' className='w-[30px] rounded-full' />
                        <p className='text-white text-[12px]'>{myuser?.displayName}</p>
                        <button onClick={logout} className='text-red-500' title='Press Logout'><IoMdLogOut className='text-white hover:text-red-500 text-[22px]' /></button>
                    </div>
                }

                {/* Responsive menu */}
                <ul className={`md:hidden bg-[#181818] fixed top-[80px] h-screen w-full left-0 duration-500 ${!toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <li className='border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold hover:shadow-2xl'>
                        <RouterLink to="/home">Home</RouterLink>
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold hover:shadow-2xl'>
                        <ScrollLink smooth={true} duration={600} to="services">Services</ScrollLink>
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold hover:shadow-2xl'>
                        <ScrollLink smooth={true} duration={600} to="about">About</ScrollLink>
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold hover:shadow-2xl'>
                        <ScrollLink smooth={true} duration={600} to="contact">Contact</ScrollLink>
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold hover:shadow-2xl'>
                        <ScrollLink smooth={true} duration={600} to="footer">Business Hub</ScrollLink>
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold hover:shadow-2xl'>
                        <RouterLink to="/login">Login</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
