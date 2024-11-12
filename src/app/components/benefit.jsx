"use client";
import Person from '../../assets/benefitsIcon/Person.png';
import Monitor from '../../assets/benefitsIcon/MonitorPlay.png';
import Certificate from '../../assets/benefitsIcon/Certificate.png';
import Lock from '../../assets/benefitsIcon/LockKeyOpen.png';
import Image from 'next/image';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Benefit = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const benefits = [
        {
            img: Person,
            title: "Expert Instructor",
            description: "Learn from industry leaders who bring real-world experience to the virtual classroom."
        },
        {
            img: Monitor,
            title: "Interactive Learning",
            description: "Engage in hands-on projects and collaborative sessions to reinforce your knowledge."
        },
        {
            img: Lock,
            title: "Lifetime Access",
            description: "Enjoy unrestricted access to course materials, allowing you to revisit them anytime."
        },
        {
            img: Certificate,
            title: "Verified Certificate",
            description: "Receive a recognized certificate to showcase your achievements and boost your career."
        }
    ];

    return (
        <section id="Benefit">
            <div className="py-[80px]">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-[24px]">
                        <div className="border-2 border-[#f5ba20] w-[64px] rounded-full h-0"></div>
                        <h1 className="ml-2 text-[24px] text-[#1A2434]">Why choose us</h1>
                    </div>
                    <h1 className="text-[32px] text-[#1A2434] font-semibold">Best Learning Experience</h1>
                </div>

                <div 
                    data-aos="fade-up" 
                    className="grid grid-cols-4 gap-[32px] px-[80px] mt-[24px]  max-xl:grid-cols-2 max-sm:grid-cols-1"
                >
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-[24px] flex flex-col items-start">
                            <Image src={benefit.img} alt={benefit.title} className='text-left mb-4' />
                            <h1 className='text-[24px] text-[#1A2434] font-bold text-left'>{benefit.title}</h1>
                            <h1 className='mt-[12px] text-left text-[20px] text-[#1A2434]'>
                                {benefit.description}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefit;
