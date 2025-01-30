import React, { useEffect, useRef } from 'react';
import car from '../assets/car.png';
import carMeter from '../assets/carmeter.png'
import Typed from 'typed.js';
import Services from './Services';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
const HeroSection = () => {
    const typedElement = useRef(null);
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
            <div className='w-full h-[620px] md:h-[670px] bg-gradient-to-r from-blue-900 to-white p-5' id='home'>
                <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row justify-center md:justify-between md:gap-6 items-center mt-[140px] md:mt-[230px]'>
                    <div className='flex flex-col text-center md:text-start gap-3 md:gap-4 mb-[100px] md:w-[845px]'>
                        <h1 className='text-3xl md:text-5xl text-orange-400 font-bold animate-carMove'>Welcome 🙂<span className='text-white'>,</span></h1>
                        <h1 className='text-3xl md:text-6xl font-bold text-white'>
                            Jai Shree Chamunda Auto Electric Work</h1>
                        <p className='text-[13px] md:text-3xl text-white font-semibold'>Your Trusted Garage Solution! <span className='text-white' ref={typedElement}></span></p>
                    </div>
                    <div className='relative'>
                        <img src={car} alt='' className='absolute inset-0 animate-fadeInOut'
                            style={{ animationDelay: '8s' }} />
                        <img src={carMeter} alt='' className='absoulte inset-0 w-[160px] md:w-[500px] animate-fadeInOut'
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