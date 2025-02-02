import React, { useEffect, useRef } from 'react';
import car from '../assets/car.png';
import carMeter from '../assets/carmeter.png'
import Typed from 'typed.js';
import Services from './Services';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const typedElement = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const typedOptions = {
            strings: ["ECM Diagnostics", "Key Programming", "Remote Services", "Self-Starter Repair", "Alternator Repair",
                "Car Wiring Solutions", "GPS Device Installation", "Dashboard Meter Repair"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        };
        const typed = new Typed(typedElement.current, typedOptions);
        return () => {
            typed.destroy()
        };
    }, []);
    return (
        <>
            {/* bg-gradient-to-r from-blue-600 to-blue-300 */}
            <div className='w-full md:h-[670px] bg-[#2C2F3A] p-3' id='home'>
                <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row justify-center md:justify-between md:gap-6
                 items-center mt-[95px] sm:mt-[85px] md:mt-[230px]'>
                    <div className='flex flex-col text-center items-center md:text-start sm:gap-7 md:gap-4 mb-[100px] md:w-[845px]'>
                        <img src={logo} alt='logo' className='animate-carMove md:hidden w-[300px] sm:w-[330px] md:w-[600px] mx-auto' />
                        <h1 className='text-3xl tracking-wide sm:text-4xl md:text-6xl font-bold text-white'>
                            Jai Shree Chamunda Auto Electric Work</h1>
                        <div>
                            <p className='flex text-[18px] sm:text-[15px] tracking-wide md:text-3xl text-white font-semibold mt-4'>Your Trusted Garage Solution!</p>
                            <p className='text-white'> <span className='text-white' ref={typedElement}></span></p>

                            <ul className='flex flex-col gap-3 mt-8'>
                                <button onClick={() => navigate("/read")} className='border border-white text-[14px] bg-white hover:bg-gray-300
                                 font-semibold tracking-wide rounded-lg text-black text-center w-[250px] py-2'>
                                    Read More</button>
                                <li className='border border-white text-[14px] bg-white hover:bg-gray-300
                                 font-semibold tracking-wide rounded-lg text-black text-center w-[250px] py-2'>
                                    <Link to="/register">Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='relative hidden md:block'>
                        <img src={car} alt='' className='absolute inset-0 animate-fadeInOut'
                            style={{ animationDelay: '8s' }} />
                        <img src={carMeter} alt='' className='absoulte inset-0 w-[200px] md:w-[500px] animate-fadeInOut'
                            style={{ animationDelay: '20s' }} />
                    </div>
                </div>
            </div>
            <Services />
            <About />
            <ContactUs />
            <Footer />
        </>
    )
}

export default HeroSection;