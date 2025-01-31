import React from 'react'
import ceo from '../images/CEO.jpg'

export default function ContactUs() {
    return (
        <div className='md:w-full pt-[50px] pb-[53px] md:pt-[130px] md:pb-[120px] bg-[#20232A] p-5' id='contact'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center text-white'>Contact Us</h1>
            <div className='flex flex-col md:flex-row md:my-[70px] md:gap-5 p-5'>
                <div className='flex flex-col text-[13px] md:text-[18px] text-semibold text-white md:w-[2000px]
                   rounded text-center'>
                    <img src={ceo} alt='ceo' className='shadow-sm shadow-white w-[100px] h-[100px] border-4 
                    mx-auto border-white rounded-full' />
                    <div className='text-white md:w-[500px] mx-auto bg-gradient-to-r mt-1 text-black from-blue-500 p-2 rounded'>
                        <p>Phone: +91 9001323068</p>
                        <p>Email: jsc@gmail.com</p>
                        <p>Address: Near Head Post Office, Shivaji Nagar, Jalore - 344002 (Rajasthan)</p>
                        <p>Working Hours: Monday to Saturday, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
                <div className='md:w-[2000px] h-[200px] md:h-[270px] overflow-y-scroll md:overflow-auto overflow-hidden text-[15px] md:text-[18px] text-white rounded md:py-[10px]'>
                    <p className='mt-3'>
                        Hello, main Naresh Kumar hoon, aur JSC Electric mein hum aapki car-related electrical
                        problems ko solve karne ke liye hamesha ready hain. Agar aapko car wiring, ECM diagnostics,
                        alternator servicing, GPS device installation, key programming, ya kisi bhi tarah ki
                        car repair ki zarurat ho, toh humari expert team aapke liye reliable aur fast solutions dene ke liye tayaar hai.</p>
                    <p className='mt-3'>
                        Agar aapko humari services ke baare mein jaankari chahiye ya appointment book karni ho,
                        toh bina jhijhak humse sampark karein.
                        Hum aapke vehicle ko best care dene ka pura vishwas rakhte hain, taaki wo smoothly chal sake.
                    </p>
                </div>
            </div>
        </div>
    )
}
