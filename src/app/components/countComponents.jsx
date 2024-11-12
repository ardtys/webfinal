"use client"
import CountUp from "react-countup";
import AOS from 'aos'
import {useEffect} from "react"

const Count = () => {
    
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
            once: true
        });
    }, []);

    return (
        <div className="counter-wrapper flex justify-between max-lg:grid grid-cols-2 max-md:grid-cols-1 px-[89px]" data-aos="fade-down">
            <div className="counter flex flex-col items-center justify-center">
                <h1 className="text-[64px] text-black font-bold max-md:mt-[1rem]">
                    <CountUp start={0} end={10} delay={1} />
                    <span className="text-[#f5ba20]">+</span>
                </h1>
                <p className="text-[20px] text-[#1A2434]">Mentors Years of Experience</p>
            </div>
            <div className="counter flex flex-col items-center justify-center  max-md:mt-[1rem]">
                <h1 className="text-[64px] text-black font-bold">
                    <CountUp start={0} end={100} delay={1}/>
                    <span className="text-[#f5ba20]">+</span>
                </h1>
                <p className="text-[20px] text-[#1A2434]">Community Members</p>
            </div>
            <div className="counter flex flex-col items-center justify-center  max-md:mt-[1rem]">
                <h1 className="text-[64px] text-black font-bold">
                    <CountUp start={0} end={5} delay={1} />
                    <span className="text-[#f5ba20]">+</span>
                </h1>
                <p className="text-[20px] text-[#1A2434]">Class Subjects</p>
            </div>
            <div className="counter flex flex-col items-center justify-center  max-md:mt-[1rem]">
                <h1 className="text-[64px] text-black font-bold">
                    <CountUp start={0} end={98} delay={1}/>
                    <span className="text-[#f5ba20]">%</span>
                </h1>
                <p className="text-[20px] text-[#1A2434]">Student Satisfaction</p>
            </div>
        </div>
    );
};

export default Count;
