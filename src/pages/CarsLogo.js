import React, { } from 'react'
import { carlogo } from '../CarsLogoDetails';
import { Link } from 'react-router-dom';
export default function CarsLogo() {
    return (
        <div className='w-full h-screen mt-[110px] md:mt-[68px] bg-[#2C2F3A] py-[30px]'>
            <h1 className='text-2xl font-semibold text-white text-center'>Maker</h1>
            <div className='fixed top-[80px] bg-[#2C2F3A] left-0 w-full z-50'>
                <h1 className='text-2xl font-semibold text-white text-center'>Maker</h1>
                <ul className='fixed top-[110px] bg-[#2C2F3A] left-0 w-full flex flex-row text-white gap-5 items-center justify-center py-5'>
                    <li><Link className='border-b-2 border-white'>Company's</Link></li>
                    <li><Link className='hover:border-b-3 border-white'>Model</Link></li>
                    <li><Link className='hover:border-b-3 border-white'>Year</Link></li>
                    <li><Link className='hover:border-b-3 border-white'>Index</Link></li>
                </ul>
            </div>
            <div className='max-w-[1000px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-5 bg-gray-300 border-2 rounded border-white overflow-x-scroll h-sreen'>
                {carlogo.length > 0 ? (
                    carlogo.map((items, index) => (
                        <div key={index} className='cursor-pointer flex flex-col items-center justify-center shadow-sm shadow-black rounded
                         p-3'>
                            <img src={items.imgCar} alt='img' className='w-[50px] mt-3' />
                            <div className='p-4'>
                                <p className='text-gray-600 text-2xl'>{items.carName}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading data...</p>  // ✅ Prevent error
                )}
            </div>
        </div>
    );
}
