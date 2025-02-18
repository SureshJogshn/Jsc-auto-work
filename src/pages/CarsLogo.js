import React, { } from 'react'
import { carlogo } from '../CarsLogoDetails';
export default function CarsLogo() {

    return (
        <div className='w-full mt-[70px] md:mt-[68px] py-[10px]'>
            <div className='max-w-[1200px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-8 bg-white border-2 rounded border-white overflow-x-scroll h-sreen'>
                {carlogo.length > 0 ? (
                    carlogo.map((items, index) => (
                        <div key={index} className='bg-[#F7F7F7] w-20 h-20 hover:scale-125 duration-500 
                        hover:shadow-green-500 rounded-lg cursor-pointer flex flex-col items-center justify-center
                         p-2'>
                            <img src={items.imgCar} alt='img' className='mt-3' />
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading data...</p>  // ✅ Prevent error
                )}
            </div>
        </div>
    );
}
