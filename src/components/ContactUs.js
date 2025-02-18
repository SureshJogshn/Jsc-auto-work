import React from 'react'
import ceo from '../images/CEO.jpg'

export default function ContactUs() {
    return (
        <div className='md:w-full pt-[50px] pb-[53px] md:pt-[130px] md:pb-[120px] bg-[#181818] p-2' id='contact'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center text-white'>Contact Us</h1>
            <div className='flex flex-col md:flex-row md:my-[70px] md:gap-5 p-5'>
                <div className='flex flex-col text-[15px] md:text-[18px] text-semibold text-white md:w-[2000px]
                   rounded text-center'>
                    <img src={ceo} alt='ceo' className='shadow-sm shadow-white w-[100px] h-[100px] border-4 
                    mx-auto border-white rounded-full' />
                    <div className='text-white md:w-[500px] text-semibold mx-auto mt-1 
                    text-black bg-gradient-to-r from-[#26355D] p-3 rounded'>
                        <p>Phone: +91 9001323068</p>
                        <p>Email: nareshjogsan900@gmail.com</p>
                        <p>Address: J.D. Complex III, Fes, Bhinmal Road, Jalore (Rajasthan) Pincode : 343001</p>
                        <p>Working Hours: Monday to Saturday, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
                <div className='w-[440px] md:w-[2000px] text-semibold bg-[#0f0f0f] p-4 h-[250px] md:h-[270px] shadow-md shadow-black overflow-y-scroll md:overflow-auto
                 overflow-hidden text-[15px] md:text-[18px] text-white rounded md:py-[10px] mt-[20px]'>
                    <p className='mt-3'>
                        Hello, main <strong>Naresh Kumar</strong> hoon, aur <strong>JSC Auto Electric</strong> mein hum aapki car-related electrical
                        problems ko solve karne ke liye hamesha ready hain. Agar aapko <strong>car wiring, ECM diagnostics,
                            alternator servicing, GPS device installation, key programming </strong> ,  ya kisi bhi tarah ki
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
