import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CarNavbar() {
    const navigate = useNavigate();
    return (
        <div className='w-full mt-[20px] md:mt-[68px] py-[10px]'>
            <ul className='flex flex-row gap-3 items-center justify-center'>
                <li> <button onClick={() => navigate('/maker')}
                    className='border-b-2 border-black py-2 duration-100 hover:text-gray-600'>Company</button> </li>
                <li> <button onClick={() => navigate('/model')}
                    className='hover:border-b-2 border-black py-2 duration-100 hover:text-gray-600'>Model</button> </li>
                <li> <button onClick={() => navigate('/year')}
                    className='hover:border-b-2 border-black py-2 duration-100 hover:text-gray-600'>Year</button> </li>
                <li> <button onClick={() => navigate('/index')}
                    className='hover:border-b-2 border-black py-2 duration-100 hover:text-gray-600'>Index</button> </li>
            </ul>
        </div>
    )
}
