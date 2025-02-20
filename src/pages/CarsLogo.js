import React, { } from 'react'
import { carlogo } from '../CarsLogoDetails';
import CarNavbar from './CarNavbar';
export default function CarsLogo() {

    return (
        <div className='w-full mt-[70px] md:mt-[68px] py-[10px]'>
            <CarNavbar />
            <div className='max-w-[1200px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-8 border-2 rounded border-white overflow-x-scroll h-sreen'>
                {carlogo.length > 0 ? (
                    carlogo.map((items, index) => (
                        <div key={index} className='bg-[#F7F7F7] w-20 h-20 mx-auto hover:scale-125 duration-500 
                        hover:shadow-green-500 rounded-lg cursor-pointer flex flex-col items-center justify-center
                         p-5'>
                            <img src={items.imgCar} alt='img' />
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading data...</p>  // ✅ Prevent error
                )}
            </div>
        </div>
    );
}
