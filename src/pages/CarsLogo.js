import React, { } from 'react'
import { carlogo } from '../CarsLogoDetails';
export default function CarsLogo() {
    return (
        <div className='w-full h-screen mt-[50px] md:mt-[68px] bg-[#2C2F3A] py-[30px]'>
            <h1 className='text-2xl font-semibold text-white text-center py-5'>Maker</h1>
            <div className='max-w-[1000px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-5 bg-gray-300 border-2 rounded border-white overflow-x-scroll h-sreen'>
                {carlogo.length > 0 ? (
                    carlogo.map((items, index) => (
                        <div key={index} className='cursor-pointer flex flex-col items-center justify-center shadow-sm shadow-black rounded
                         w-[110px] mx-auto p-3'>
                            <img src={items.imgCar} alt='img' className='w-[150px] mt-3' />
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
