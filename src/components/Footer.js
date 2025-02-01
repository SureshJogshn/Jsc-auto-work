import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full bg-black py-[50px]  ' id='footer'>
            <div className='max-w-[1200px] p-3 md:p-4 rounded mx-auto flex flex-col gap-[25px] md:gap-[50px] shadow-sm shadow-black'>
                <div className='flex flex-row justify-between md:gap-3'>
                    <ul className='flex flex-col gap-5 md:gap-2 w-[400px] md:[20px]'>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[16px] md:text-[19px] font-semibold'><span>🔧</span> Our Services</li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[10px] md:text-[18px]'><a href="/home"><span className='text-green-400'>✔ </span>ECM Repair & Diagnostics</a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[10px] md:text-[18px]'><a href="/home"><span className='text-green-400'>✔ </span>Car Wiring & Electrical Solutions</a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[10px] md:text-[18px]'><a href="/home"><span className='text-green-400'>✔ </span>Alternator & Self Motor Repair</a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[10px] md:text-[18px]'><a href="/home"><span className='text-green-400'>✔ </span>Key Programming & Remote Configuration</a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[10px] md:text-[18px]'><a href="/home"><span className='text-green-400'>✔ </span>GPS Device Installation</a></li>
                        <li className='corsor-pointer text-white hover:text-green-500 text-[10px] md:text-[18px]'><a href="/home"><span className='text-green-400'>✔ </span>Meter & Dashboard Diagnostics</a></li>
                    </ul>
                    <ul className='hidden md:block w-[250px] md:[500px]'>
                        <h2 className='text-[9px] md:text-[19px] text-white font-semibold mb-2'><span>📞 </span>Contact:</h2>
                        <p className='text-[5px] md:text-[16px] text-white '><span className='md:text-[20px]'>📲 </span> +91 9001323068</p>
                        <p className='text-[5px] md:text-[16px] text-white '><span className='md:text-[20px]'>📧 </span> jsc.electric@gmail.com</p>
                    </ul>
                    <div className='hidden md:block md:w-[400px]'>
                        <h2 className='text-[15px] md:text-[19px] text-white font-semibold mb-2'>📍 Address: </h2>
                        <p className='text-white text-[6px] md:text-[19px]'> Near Head Post Office, Shivaji Nagar, Jalore - 344002 (Rajasthan)</p>
                    </div>
                    {/* ------ res ---------- */}
                    <ul className='w-[250px] md:[500px]'>
                        <h2 className='text-[16px] md:text-[19px] text-white font-semibold mb-2'><span>📞 </span>Contact:</h2>
                        <p className='text-[10px] md:text-[16px] mt-2 text-white '><span className='md:text-[20px]'>📲 </span> +91 9001323068</p>
                        <p className='text-[10px] md:text-[16px] mt-2 text-white '><span className='md:text-[20px]'>📧 </span> nareshjogsan900@gmail.com</p>
                    </ul>
                </div>
                <div className='flex flex-col gap-5 md:gap-5 jusitfy-center items-center'>
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
                    <p className='text-white text-[9px] md:text-[15px] text-center'> © {new Date().getFullYear()} JSC Shree Chamunda Auto Electric. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
