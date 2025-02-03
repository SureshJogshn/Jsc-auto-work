import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import HeroSection from './components/HeroSection';
import Login from './pages/Login';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import logo from './assets/logo.png'
import ReadMore from './pages/ReadMore';
import Register from './pages/Register';
import RaadServices from './pages/RaadServices';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 duration-300 bg-[#2C2F3A]'>
        <div className='max-w-[1240px] mx-auto flex items-center p-7 md:p-5 gap-[100px] justify-between md:justify-around'>
          <div className=' flex items-center gap-4'>
            {

              toggle ?
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl md:text-3xl hover:text-gray-500 text-white duration-100 cursor-pointer md:hidden block' />
                : <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl md:text-3xl text-white duration-100 cursor-pointer md:hidden block' />
            }
            <img src={logo} alt='logo' className='hidden w-[90px] md:w-[130px]' />
            <div className='text-xs sm:text-sm md:text-lg lg:text-xl uppercase text-white font-bold'> Jsc Auto Electric </div>
          </div>
          <ul className='hidden md:flex gap-9 text-xs sm:text-sm md:text-lg lg:text-xl text-white'>
            <li ><Link className='hover:border-b-2 border-[#FBFBFB]' to="/">Home</Link></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="services">Services</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="about">About</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="contact">Contact</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="footer">Business Hub</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="/login">Login</ScrollLink></li>
          </ul>
          <Link to="/login" className='hover:text-green-500 text-[15px] border-[#FBFBFB] cursor-pointer text-white'>Login</Link>
          {/* Responsive */}
          <ul className={`md:hidden bg-[#1E201E] fixed top-[85px] h-screen w-full left-0 duration-500
          ${!toggle ? `left-0` : `left-[-100%]`}`}>
            <li className='border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold 
          hover:shadow-2xl'><Link to="/">Home</Link></li>
            <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold
            hover:shadow-2xl'><ScrollLink smooth={true} duration={600} to="services">Services</ScrollLink></li>
            <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold
          hover:shadow-2xl'><ScrollLink smooth={true} duration={600} to="about">About</ScrollLink></li>
            <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold
          hover:shadow-2xl'><ScrollLink smooth={true} duration={600} to="contact">Contact</ScrollLink></li>
            <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold
          hover:shadow-2xl'><ScrollLink smooth={true} duration={600} to="footer">Business Hub</ScrollLink></li>
            <li className='cursor-pointer border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold
          hover:shadow-2xl'><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/read' element={<ReadMore />} />
        <Route path='/readserivce' element={<RaadServices />} />
      </Routes>
    </>
  );
}

export default App;