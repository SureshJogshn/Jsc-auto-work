import React, { useEffect, useRef } from 'react';
import car from '../assets/car.png';
import carMeter from '../assets/carmeter.png';
import Typed from 'typed.js';
import Services from './Services';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Rating from './Rating';
import CarAnimation from './CarAnimation';
import Ecm from './Ecm';
import CarConversation from './CarConversation';

const HeroSection = () => {
  const typedElement = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "ECM Diagnostics", "Key Programming", "Remote Services", "Self-Starter Repair",
        "Alternator Repair", "Car Wiring Solutions", "GPS Device Installation",
        "Dashboard Meter Repair", "ECM (Engine Control Module)",
        "Cluster Meter Repair", "EPS (Electronic Power Steering) Repair",
        "BCM (Body Control Module) Repair", "JSC CAN Box"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
    return () => typed.destroy();
  }, []);

  // Hide Hero if route is login or root
  if (location.pathname === "/login" || location.pathname === "/") return null;

  return (
    <>
      {/* Hero Section */}
      <div className='relative w-full bg-[#0f0f0f] p-4 md:p-6' id='home'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center mt-24 md:mt-36 gap-10'>

          {/* Left Side: Text + Logo (mobile) */}
          <div className='flex flex-col text-center md:text-left items-center md:items-start gap-4 md:gap-6 md:w-[60%]'>
            <img
              src={logo}
              alt='logo'
              className='animate-carMove md:hidden w-[250px] sm:w-[300px] mx-auto'
            />
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide'>
              Jai Shree Chamunda Auto Electric Work
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-white font-semibold'>
              Your Trusted Garage Solution!
            </p>
            <p className='text-white text-sm sm:text-base'>
              <span ref={typedElement}></span>
            </p>
            <div className='flex gap-4 mt-4 flex-wrap justify-center md:justify-start'>
              <button
                onClick={() => navigate("/read")}
                className='px-5 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-300 transition-all duration-200'
              >
                Read More
              </button>
              <button
                onClick={() => navigate("/maker")}
                className='px-5 py-2 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200'
              >
                Maker
              </button>
            </div>
          </div>

          {/* Right Side: Image (Only on desktop) */}
          <div className='hidden md:block relative md:w-[40%]'>
            <img
              src={car}
              alt='car'
              className='absolute inset-0 w-[250px] md:w-[400px] lg:w-[500px] animate-fadeInOut'
              style={{ animationDelay: '8s' }}
            />
            <img
              src={carMeter}
              alt='car meter'
              className='absolute inset-0 w-[200px] md:w-[300px] lg:w-[400px] animate-fadeInOut'
              style={{ animationDelay: '20s' }}
            />
          </div>
        </div>

        <CarAnimation />
        <CarConversation />
      </div>

      {/* Rest of the Website Sections */}
      <Navbar />
      <Services />
      <Ecm />
      <About />
      <ContactUs />
      <Rating />
      <Footer />
    </>
  );
};

export default HeroSection;
