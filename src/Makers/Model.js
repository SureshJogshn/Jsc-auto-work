import React from 'react'
import CarNavbar from '../pages/CarNavbar'

export default function Model() {
    return (
        <div className='w-full mt-[70px] md:mt-[68px] py-[10px]'>
            <CarNavbar />
            <div className='max-w-[1200px] border border-black mx-auto p-4 py-[50px] flex flex-row 
            items-center flex-wrap gap-8 bg-white border-2 rounded border-white overflow-x-scroll h-sreen'>
                Model
            </div>
        </div>
    )
}
