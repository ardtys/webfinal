"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from "react";
import Count from "./countComponents"; // Make sure this matches the file name

const Aboutus = () => {
    const [isCounting, setIsCounting] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isCounting) {
                    setIsCounting(true);
                }
            });
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, [isCounting]);

    return (
        <section id="About" className="bg-[#F9FCFF]">
            <div className="p-[80px] grid grid-cols-2 max-xl:grid-cols-1 max-md:p-[10px]" ref={aboutRef}>
                <div>
                    <div className="flex items-center gap-[24px] max-xl:mt-[1rem]">
                        <div className="border-2 border-[#f5ba20] w-[64px] rounded-full h-0"></div>
                        <h1 className="ml-2 text-[24px] text-[#1A2434]">About us</h1>
                    </div>
                    <h1 className="text-[36px] text-[#1A2434] font-bold mt-[16px]">
                        E-Learning Platform for Cyber <br /> Security
                    </h1>
                    <p className="mt-[40px] text-[25px] text-[#1A2434]">
                        Cyber House is Indonesia’s leading ed-tech company, focused on providing high-quality education in Cyber Security, Web3, and Blockchain. We offer a wide range of accessible and affordable courses for learners at all levels. Our flexible programs create an engaging learning experience, whether you’re advancing your career, switching fields, or expanding your knowledge.
                    </p>
                   <a href="/detail">
                   <div className="mt-[40px] bg-[#f5ba20] text-white transition-all duration-700 flex items-center justify-center ease-in-out w-[307px] h-[72px] rounded-[16px] hover:shadow-xl hover:scale-105">
                        <h1 className='text-left text-[20px] text-white font-bold flex items-center gap-[16px]'>Learn More <span className='flex items-center'><FaArrowRightLong /></span></h1>
                    </div>
                   </a>
                </div>
            </div>
            {isCounting && <Count />} 
        </section>
    );
}

export default Aboutus;
