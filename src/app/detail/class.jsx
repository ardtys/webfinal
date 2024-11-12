"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Free from '../../assets/Product/Free.png';
import Paid from '../../assets/Product/paid.png';
import { Star, Clock, MapPin, User, Award, Code } from 'lucide-react';

const Product = () => {
    const [showDetails, setShowDetails] = useState(false);
    const FreeClass = {
        title: "Coming Soon",
    };

    const PaidClass = {
        title: "Mastering Cyber Security: Zero To Hero",
    };

    const MiniClass = {
        title: "Coming Soon",
    };

    const [currentClass, setCurrentClass] = useState(FreeClass);
    const [activeClass, setActiveClass] = useState('PaidClass');

    const handleClick = (classData, className) => {
        setCurrentClass(classData);
        setActiveClass(className);
        setShowDetails(false);
    };

    return (
        <section className="flex justify-center items-center mb-[5rem]">
            <div className="bg-[white] w-[1300px] max-w-[1300px] transition-all duration-300">
                <center>
                    <div className="flex justify-between gap-[10px] items-center w-[754px] max-w-[754px] h-[77px] max-md:w-[350px] max-md:h-[50px] rounded-[40px] bg-[#F4F4F4] px-[8px] transition-all duration-300 mb-8">
                        <div
                            className={`w-[150px] h-[50px] rounded-[40px] max-md:w-[100px] max-md:h-[30px] flex justify-center items-center transition-all duration-500 ${activeClass === 'FreeClass' ? 'bg-white' : ''} cursor-pointer`}
                            onClick={() => handleClick(FreeClass, 'FreeClass')}
                        >
                            <h1 className="text-[24px] max-md:text-[15px] text-[#1A2434]"></h1>
                        </div>
                        <div
                            className={`w-[150px] h-[50px] max-md:w-[100px] max-md:h-[30px] rounded-[40px] flex justify-center items-center transition-all duration-500 ${activeClass === 'PaidClass' ? 'bg-white' : ''} cursor-pointer`}
                            onClick={() => handleClick(PaidClass, 'PaidClass')}
                        >
                            <h1 className="text-[24px] max-md:text-[15px] text-[#1A2434]">Paid Class</h1>
                        </div>
                        <div
                            className={`w-[150px] h-[50px] max-md:w-[100px] max-md:h-[30px] rounded-[40px] flex justify-center items-center transition-all duration-500 ${activeClass === 'MiniClass' ? 'bg-white' : ''} cursor-pointer`}
                            onClick={() => handleClick(MiniClass, 'MiniClass')}
                        >
                            <h1 className="text-[24px] max-md:text-[15px] text-[#1A2434]">Mini Course</h1>
                        </div>
                    </div>

                    {activeClass === "PaidClass" ? (
                        <div className="flex flex-col gap-6 max-w-2xl">
                            {/* Course Card */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold">Mastering Cyber Security: Zero To Hero</h2>
                                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                                        5 Mio
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <span className="font-medium">4.8</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Clock className="w-5 h-5 text-gray-600" />
                                        <span>8 weeks</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-gray-600" />
                                    <span>Every Monday, 7 PM - 9 PM</span>
                                </div>

                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin className="w-5 h-5 text-gray-600" />
                                    <span>Main Campus</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <User className="w-5 h-5 text-gray-600" />
                                        <span className="text-gray-700">Hosted by: Ibnu Faisal</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                            Enroll Now
                                        </button>
                                        <button
                                            onClick={() => setShowDetails(!showDetails)}
                                            className="text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
                                        >
                                            {showDetails ? 'Show Less' : 'Learn More'}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-4 justify-end">
                                    <User className="w-5 h-5" />
                                    <span className="text-sm">5/20 Slots Remaining</span>
                                </div>
                            </div>

                            {/* Course Details - Shows when Learn More is clicked */}
                            {showDetails && (
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Left Column */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-4">Course Curriculum</h3>
                                            <ul className=" text-left">
                                           
                                             <li>Lesson 1: Cyber Security Introduction</li>
                                             <li>Lesson 2: Network Security</li>
                                             <li>Lesson 3: Cyber Security Domain & Team Classification</li>
                                             <li>Lesson 4: Malware and Ransomware</li>
                                             <li>Lesson 5: Cyber Security Types of Attack</li>
                                             <li>Lesson 6: Cyber Security Defenses</li>

                                            </ul>
                                        </div>

                                        {/* Right Column */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-4">Requirements</h3>
                                            <ul className="space-y-3 mb-8">
                                                <li className="flex items-center gap-2">
                                                    <Code className="w-5 h-5" />
                                                    Basic Programming (Python)
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <Award className="w-5 h-5" />
                                                    Logical
                                                </li>
                                            </ul>

                                            <h3 className="text-xl font-bold mb-4">Achievements</h3>
                                            <div className="flex gap-4 flex-wrap">
                                                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                                                    <Award className="w-4 h-4" />
                                                    Practical Project Portfolio
                                                </span>
                                                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                                                    <Award className="w-4 h-4" />
                                                    Industry Certification
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
                                            Register Now!
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <h1 className='text-2xl mt-[3rem]'>Coming Soon</h1>
                    )}
                </center>
            </div>
        </section>
    );
};

export default Product;