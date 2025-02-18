import React, { } from 'react'
import { carlogo } from '../CarsLogoDetails';
import MakerNavabr from './MakerNavabr';
export default function CarsLogo() {

    return (
        <div className='w-full h-screen mt-[110px] md:mt-[68px] bg-[#2C2F3A] py-[30px]'>
            <MakerNavabr />
            <div className='max-w-[1000px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-5 bg-gray-300 border-2 rounded border-white overflow-x-scroll h-sreen'>
                {carlogo.length > 0 ? (
                    carlogo.map((items, index) => (
                        <div key={index} className='border border-black shadow-sm hover:scale-125 duration-500 
                        hover:shadow-green-500 shadow-black rounded-lg cursor-pointer flex flex-col items-center justify-center
                         p-3'>
                            <img src={items.imgCar} alt='img' className='w-[70px] h-[70px] mx-auto mt-3' />
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
