import React, { useState } from "react";
import ServicesDetails from "../ServicesDetails";
import { useNavigate } from 'react-router-dom';
const ServiceSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === ServicesDetails.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? ServicesDetails.length - 1 : prevIndex - 1
        );
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative bg-[#3B3F4A] pt-[50px] pb-[50px] md:pt-[130px] md:pb-[120px]" id="services">
            <h2 className="text-[18px] font-semibold text-center mb-4 text-white">Our Services</h2>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {ServicesDetails.map((service, index) => (
                        <div
                            key={index}
                            className="min-w-full flex-shrink-0 p-4"
                            style={{ width: "100%" }}
                        >
                            <div className="flex flex-col md:flex-row md:justify-around md:items-center 
                            bg-[#2C2F3A] rounded-lg shadow-lg md:gap-9 p-8 md:p-9 text-center">
                                <div className="flex flex-col gap-3 md:gap-8 items-center">
                                    <img className="w-[50px] md:w-[70px] animate-carMove" src={service.img} alt="car" />
                                    <h1 className="text-[18px] md:text-3xl text-white font-semibold uppercase">{service.title}</h1>
                                </div>
                                <div className="flex flex-col mt-3 md:gap-8 md:w-[600px] md:p-4 rounded">
                                    <div className="flex flex-col justify-center items-center p-2 text-start rounded">
                                        <h2 className="text-[17px] md:text-2xl text-white font-semibold mb-2"><span></span> Overview</h2>
                                        <p className="text-white text-center text-[14px]  md:text-[20px] text-white">{service.overview}</p>
                                        <h2 className="text-[18px] md:text-2xl text-white font-semibold mt-3"><span></span> Features</h2>
                                        <p className="text-white  text-[13px]  md:text-[20px]"><span>✔</span> {service.features.first}</p>
                                        <p className="text-white  text-[13px]  md:text-[20px]"><span>✔</span> {service.features.second}</p>
                                        <button onClick={() => navigate("/readserivce")} className="border border-white py-2 px-[50px] md:px-[100px] text-[12.9px] mt-6 md:text-[15px] bg-white 
                                        rounded text-black font-semibold hover:text-black hover:bg-gray-300
                                     ">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black hover:bg-blue-700 border-2 border-white text-white p-2 md:p-4 rounded-full shadow-lg"
            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black hover:bg-blue-700 border-2 border-white text-white p-2 md:p-4 rounded-full shadow-lg"
            >
                ▶
            </button>


            {/* Pagination Dots */}
            <div className="flex justify-center items-center md:mt-4 space-x-2">
                {ServicesDetails.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ServiceSlider;
