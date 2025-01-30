import React, { useState } from "react";
import ServicesDetails from "../ServicesDetails";

const ServiceSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="relative bg-gray-100 pt-[130px] pb-[120px]" id="services">
            <h2 className="text-2xl font-semibold text-center mb-4 text-blue-800">Our Services</h2>
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
                            bg-white rounded-lg shadow-lg gap-2 md:gap-9 p-5 md:p-9 text-center bg-gradient-to-r 
                            from-blue-600">
                                <div className="flex flex-col gap-1 md:gap-8 items-center">
                                    <img className="w-[35px] md:w-[70px] animate-carMove" src={service.img} alt="car" />
                                    <h1 className="text-[15px] md:text-3xl text-white font-semibold uppercase">{service.title}</h1>
                                    <button className="border px-2 py-1 text-[10px] md:text-[15px] md:px-4 md:py-2 rounded border-white text-white hover:text-black
                                     shadow-md shadow-white hover:bg-white ">Read More</button>
                                </div>
                                <div className="flex flex-col gap-4 bg-blue-600 md:w-[600px] p-6 md:p-4 rounded shadow-lg shadow-white">
                                    <div className="border border-white p-2 text-start rounded">
                                        <h2 className="text-[15px] md:text-2xl text-white font-semibold mb-2"><span>🔧</span> Overview</h2>
                                        <p className="text-white text-[9.9px]  md:text-[20px] text-white text-[20px]">{service.overview}</p>
                                    </div>
                                    <div className="border border-white p-2 text-start rounded">
                                        <h2 className="text-[15px] md:text-2xl text-white font-semibold mb-2"><span>🔧</span> Features</h2>
                                        <p className="text-white  text-[9.9px]  md:text-[20px]"><span>✔</span> {service.features.first}</p>
                                        <p className="text-white  text-[9.9px]  md:text-[20px]"><span>✔</span> {service.features.second}</p>
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-700 border-2 border-yellow-400 text-white p-2 md:p-4 rounded-full shadow-lg"
            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-700 border-2 border-yellow-400 text-white p-2 md:p-4 rounded-full shadow-lg"
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
