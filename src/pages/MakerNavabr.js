import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MakerNavabr() {
    const navigate = useNavigate();
    return (
        <div className='fixed top-[80px] bg-[#2C2F3A] left-0 w-full z-50'>
            <h1 className='text-2xl font-semibold text-white text-center'>Maker</h1>
            <ul className='fixed top-[112px] bg-[#2C2F3A] left-0 w-full flex flex-row 
    text-white gap-5 items-center justify-center py-3'>
                <li><Link to={navigate("/maker")} className='border-b-2 border-white py-2'>Company's</Link></li>
                <li><Link to={navigate("/model")} className='hover:border-b-2 border-white py-2'>Model</Link></li>
                {/* <li><Link to={navigate("/year")} className='hover:border-b-2 border-white py-2'>Year</Link></li>
                <li><Link to={navigate("/indexs")} className='hover:border-b-2 border-white py-2'>Index</Link></li> */}
            </ul>
        </div>
    )
}
