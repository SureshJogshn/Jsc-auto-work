import React, { } from 'react'
import { carlogo } from '../CarsLogoDetails';
export default function CarsLogo() {

    return (
        <div className='w-full mt-[70px] md:mt-[68px] py-[10px]'>
            <div className='max-w-[1200px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-5 bg-[#F8F5E9] border-2 rounded border-white overflow-x-scroll h-sreen'>
                {carlogo.length > 0 ? (
                    carlogo.map((items, index) => (
                        <div key={index} className='hover:scale-125 duration-500 
                        cursor-pointer flex flex-col items-center justify-center
                         p-3'>
                            <img src={items.imgCar} alt='img' className='w-[40px] mx-auto mt-3' />
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading data...</p>  // ✅ Prevent error
                )}
            </div>
        </div>
    );
}
