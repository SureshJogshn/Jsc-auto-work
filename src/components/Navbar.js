import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../assets/logo.png';

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
      navigate("/login");
    } catch (error) {
      alert("Try again");
    }
  };

  return (
    <div className='sticky top-0 left-0 w-full z-50 bg-[#181818] shadow-md'>
      <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6'>

        {/* Left: Logo + Hamburger */}
        <div className='flex items-center w-full md:w-auto justify-between md:justify-start'>
          <img src={logo} alt='logo' className='w-[80px] md:w-[130px] block' />

          <div className='md:hidden'>
            {toggle ? (
              <AiOutlineMenu
                onClick={() => setToggle(false)}
                className='text-3xl text-white cursor-pointer'
              />
            ) : (
              <AiOutlineClose
                onClick={() => setToggle(true)}
                className='text-3xl text-white cursor-pointer'
              />
            )}
          </div>
        </div>

        {/* Center: Menu (Desktop) */}
        <ul className='hidden md:flex gap-6 text-white text-sm sm:text-base md:text-lg'>
          <li><RouterLink className='hover:border-b-2 border-white' to="/home">Home</RouterLink></li>
          <li><ScrollLink smooth={true} duration={600} className='cursor-pointer hover:border-b-2 border-white' to="services">Services</ScrollLink></li>
          <li><ScrollLink smooth={true} duration={600} className='cursor-pointer hover:border-b-2 border-white' to="about">About</ScrollLink></li>
          <li><ScrollLink smooth={true} duration={600} className='cursor-pointer hover:border-b-2 border-white' to="contact">Contact</ScrollLink></li>
          <li><ScrollLink smooth={true} duration={600} className='cursor-pointer hover:border-b-2 border-white' to="footer">Business Hub</ScrollLink></li>
        </ul>

        {/* Right: User Info */}
        <div className='flex items-center gap-2'>
          {myuser?.photoURL && (
            <img src={myuser.photoURL} alt='user' className='w-[30px] h-[30px] rounded-full' />
          )}
          <p className='text-white text-sm hidden sm:block'>{myuser?.displayName}</p>
          <button onClick={logout} title='Logout'>
            <IoMdLogOut className='text-white hover:text-red-500 text-[22px]' />
          </button>
        </div>

        {/* Mobile Menu */}
        {!toggle && (
          <ul className='md:hidden absolute top-[80px] left-0 w-full bg-[#181818] text-white text-xl space-y-4 p-4'>
            <li><RouterLink to="/home" onClick={() => setToggle(true)}>Home</RouterLink></li>
            <li><ScrollLink to="services" smooth={true} duration={600} onClick={() => setToggle(true)}>Services</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={600} onClick={() => setToggle(true)}>About</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={600} onClick={() => setToggle(true)}>Contact</ScrollLink></li>
            <li><ScrollLink to="footer" smooth={true} duration={600} onClick={() => setToggle(true)}>Business Hub</ScrollLink></li>
          </ul>
        )}

      </div>
    </div>
  );
}
