import React, { useState, useEffect } from 'react';
import img1 from '../images/ecm/1ecm.png';
import img4 from '../images/ecm/4ecm.png';
import img5 from '../images/ecm/5ecm.png';
import img6 from '../images/ecm/7ecm.png';
import img7 from '../images/ecm/9ecm.png';

const Ecm = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1, img4, img5, img6, img7
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <div className='relative bg-[#181818] pt-[50px] pb-[50px] md:pt-[130px] md:pb-[120px]' id='about'>
            <h2 className='text-[14px] w-[300px] md:w-[770px] mx-auto md:text-3xl font-semibold uppercase text-center mb-4 text-white'>About Us - Dedicated Experts in Automotive Solutions</h2>
            <div className='flex flex-col md:flex-row items-center justify-center shadow-lg mt-[30px] shadow-md rounded p-2 gap-3'>
                <div className='border-4 border-white relative text-semibold text-[20px] shadow-sm w-[300px] shadow-white rounded overflow-hidden flex flex-col'>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
            </div>
        </div>
    )
}

export default Ecm;