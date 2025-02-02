import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full bg-black py-[50px]' id='footer'>
            <h1 className='corsor-pointer text-white hover:text-green-500 text-[16px] ml-5 md:text-[19px] font-semibold'><span>🔧</span> Our Services</h1>
            <div className='max-w-[1200px] p-3 md:p-4 rounded mx-auto flex flex-col gap-9 md:gap-[50px] shadow-sm shadow-black'>
                <div className='flex flex-row justify-around md:gap-3'>
                    <ul className='flex flex-row md:flex-col gap-2 md:gap-2 md:w-[20px]'>
                        <ul>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Diagnostics</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Electrical Solutions</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>ECM Repair</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Car Wiring</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Self Motor Repair</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Remote Configuration</li>
                        </ul>
                        <ul>

                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Meter</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Dashboard Diagnostics</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>GPS Device Installation</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Key Programming</li>
                            <li className='corsor-pointer text-white hover:text-green-500 text-[12px] md:text-[18px]'> <span className='text-green-400'>✔ </span>Alternator Repair</li>
                        </ul>
                        <ul>

                        </ul>
                    </ul>
                    <div className='hidden md:block md:w-[400px]'>
                        <h2 className='text-[15px] md:text-[19px] text-white font-semibold mb-2'>📍 Address: </h2>
                        <p className='text-white text-[6px] md:text-[19px]'> Near Head Post Office, Shivaji Nagar, Jalore - 344002 (Rajasthan)</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 md:gap-5 justify-center jusitfy-center items-center'>
                    <h2 className='text-[16px] md:text-[19px] text-white font-semibold'><span>📞 </span>Contact:</h2>
                    <ul className='flex flex-row gap-2 items-center md:[500px] '>
                        <p className='text-[13px] md:text-[16px] text-white '><span className='md:text-[20px]'>📲 </span> +91 9001323068</p>
                        <p className='text-[13px] md:text-[16px] text-white '><span className='md:text-[20px]'>📧 </span> nareshjogsan900@gmail.com</p>
                    </ul>

                    {/* // Responsive */}
                    <div className='text-center md:w-[400px]'>
                        <h2 className='text-[15px] md:text-[19px] text-white font-semibold mb-2'>📍 Address: </h2>
                        <p className='text-white text-[12px] md:text-[19px]'> J.D. Complex III, Fes, Bhinmal Road, Jalore (Rajasthan) - 343001</p>
                    </div>
                    <ul className='flex gap-5 justify-center items-center'>
                        <li className='corsor-pointer text-white text-[14px] md:text-[19px] font-semibold'>📱 Follow Us:</li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[16px] md:text-2xl'><a href="/home"><FaWhatsapp /></a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[16px] md:text-2xl'><a href="https://www.instagram.com/jscjaishreechamundaauto?utm_source=qr&igsh=MWVkM2NuMTV6N2s4bA=="><FaInstagram /></a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[16px] md:text-2xl'><a href="/home"><FaFacebook /></a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[16px] md:text-2xl'><a href="https://www.youtube.com/@jscjaishreechamundaautoele5268"><FaYoutube /></a></li>

                    </ul>
                    <div className='flex text-[11px] md:text-[16px] text-white'>
                        <h2 className='text-center text-semibold'>🕒 Working Hours:</h2>
                        <p className='ml-2'> Monday – Saturday: 9:00 AM – 9:00 PM</p>
                    </div>
                    <p className='text-white text-[9px] md:text-[15px] mt-7 text-center'> © {new Date().getFullYear()} JSC Shree Chamunda Auto Electric. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
