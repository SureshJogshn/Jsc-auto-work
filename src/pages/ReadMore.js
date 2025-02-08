import React, { useContext } from 'react';
import { DataContext } from '../Data/ContextData';

export default function ReadMore() {
    const userObj = useContext(DataContext) || [];  // ✅ Default empty array

    return (
        <div className='w-full h-screen mt-[70px] md:mt-[68px] bg-[#2C2F3A] py-[30px]'>
            <h1 className='text-2xl font-semibold text-white text-center py-5'>Our Services</h1>
            <div className='max-w-[1000px] mx-auto p-4 py-[50px] flex flex-col gap-7 bg-gray-300 border-2 rounded border-white overflow-y-scroll h-[700px]'>
                {userObj.length > 0 ? (
                    userObj.map((items, index) => (
                        <div key={index} className='border-b bg-green-500 rounded-lg bg-white shadow-xl shadow-black '>
                            <h2 className='text-xl font-bold text-white text-center p-4'>{items.title}</h2>
                            <div className='bg-gray-200 p-4'>
                                <p className='text-gray-600 py-2'>{items.about}</p>
                                <ul className='list-disc pl-5 text-sm'>
                                    {Object.values(items.description).map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
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
