import React, { useState, useEffect } from 'react';
import img1 from '../images/02-jsc.jpg';
import img2 from '../images/03-jsc.jpg';
import img3 from '../images/jsc-3.jpg';
import img4 from '../images/05-jsc.jpg';
import img5 from '../images/06-jsc.jpg';
import img6 from '../images/jsc-4.jpg';
import img7 from '../images/8-jsc.jpg';
import img8 from '../images/jsc-2.jpg';

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8,
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <div className='relative pt-[120px] pb-[120px]' id='about'>
            <h2 className='text-[20px] md:text-3xl font-semibold uppercase text-center mb-4 text-blue-800'>About Us - Dedicated Experts in Automotive Solutions</h2>
            <div className='flex flex-col md:flex-row items-center justify-center shadow-lg mt-[30px] shadow-md rounded p-2 gap-2'>
                <div className='relative text-semibold text-gray-600 md:w-[1830px] text-[13px] md:text-[18px] flex flex-col gap-3 p-5'>
                    <h6><strong>JSC Shree Chamunda Auto Electric :</strong> Mein Aapka Swagat Hai – Aapka vishwasniya saathi automotive electrical solutions ke liye</h6>
                    <p>
                        <strong>Jai Shree Chamunda Auto Electric mein hum high-quality automotive electrical services provide karte hain, </strong>
                        jaise car wiring, ECM diagnostics aur repairs, alternator servicing, GPS device installations, key programming, remote configuration, aur meter diagnostics. 22 saal ke anubhav ke saath, humne apne customers ko reliable, efficient,
                        aur professional solutions dene ka ek mazboot naam bana liya hai.
                    </p>
                    <p>
                        <strong> "Naresh Kumar" ne JSC Electric ko shuru kiya tha, jo Jalore,
                            Rajasthan se hain.</strong> Unka dedication aur humare advanced tools ka istemal yeh ensure karta hai ki
                        aapka vehicle best care mile. Hamari team har kaam ko excellence ke saath karti hai, aur humare tools aur
                        technology ka upyog aapki vehicle ki har zarurat ko pura karta hai.
                    </p>
                    <strong> - Humara Mission</strong>
                    <p>
                        Aapko high-quality, cost-effective, aur dependable automotive electrical services dena, jisse aapka vehicle hamesha smoothly chale. Chahe wo complex ECM repair ho ya simple wiring issue, hum har solution ko aapki zarurat ke hisaab se precise aur reliable banate hain.
                    </p>
                </div>
                <div className='relative text-semibold text-[20px] shadow-lg border-8 rounded border-gray-300 flex flex-col'>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
            </div>
        </div>
    )
}

export default About;