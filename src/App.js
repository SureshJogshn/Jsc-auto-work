import './App.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import HeroSection from './components/HeroSection';
import Login from './pages/Login';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from 'react';
import logo from './assets/logo.png'
import ReadMore from './pages/ReadMore';
import Register from './pages/Register';
import RaadServices from './pages/RaadServices';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubcribe();
  }, []);

  const logout = async (event) => {
    event.preventDefault();
    await signOut(auth);
    navigate("/login");
  }
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 duration-300 bg-[#2C2F3A]'>
        <div className='max-w-[1240px] mx-auto flex items-center p-7 md:p-5 gap-[100px] justify-between md:justify-around'>
          <div className=' flex items-center'>
            {

              toggle ?
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl md:text-3xl hover:text-gray-500 text-white duration-100 cursor-pointer md:hidden block' />
                : <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl md:text-3xl text-white duration-100 cursor-pointer md:hidden block' />
            }
            <img src={logo} alt='logo' className='hidden w-[90px] md:w-[130px]' />
            <div className='text-xs sm:text-sm md:text-lg lg:text-xl uppercase text-white font-bold'> Jsc Auto Electric </div>
          </div>
          <ul className='hidden md:flex gap-9 text-xs sm:text-sm md:text-lg lg:text-xl text-white'>
            <li ><Link className='hover:border-b-2 border-[#FBFBFB]' to="/home">Home</Link></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="services">Services</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="about">About</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="contact">Contact</ScrollLink></li>
            <li ><ScrollLink smooth={true} duration={600} className='hover:border-b-2 border-[#FBFBFB] cursor-pointer' to="footer">Business Hub</ScrollLink></li>
          </ul>
          {user && (
            <div
              className="relative"
              onMouseEnter={() => setShowMenu(true)} // Hover karne par menu show hoga
              onMouseLeave={() => setShowMenu(false)} // Hover chhodne par menu hide hoga
            >
              {/* Button: User ka naam aur dropdown arrow */}
              <button
                className="flex items-center gap-2 text-white px-4 py-2 rounded-md"
              >
                {user.displayName} {/* Sirf name show karega */}
                <IoMdArrowDropdown className="text-xl" /> {/* Arrow icon */}
              </button>

              {/* Dropdown: Logout button */}
              {showMenu && (
                <button
                  className="absolute right-0 shadow-sm text-[10px] bg-gray-500 font-semibold shadow-white text-center rounded shadow-lg w-20 px-2 py-2 hover:bg-gray-200"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </div>
          )}

          {/* Responsive */}
          <ul className={`md:hidden bg-[#1E201E] fixed top-[85px] h-screen w-full left-0 duration-500
          ${!toggle ? `left-0` : `left-[-100%]`}`}>
            <li className='border-b border-gray-500 p-3 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-white text-white hover:text-black font-semibold 
          hover:shadow-2xl'><Link to="/home">Home</Link></li>
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
        <Route path="/" element={user ? <Navigate to="/home" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={user ? <HeroSection /> : <Navigate to="/" />} />
        <Route path='/read' element={<ReadMore />} />
        <Route path='/readserivce' element={<RaadServices />} />
      </Routes>
    </>
  );
}

export default App;