"use client"
import Image from "next/image"
import Sarah from '../../assets/Testimonial/sarah.png'
import Andini from '../../assets/Testimonial/Andini.png'
import Rizky from '../../assets/Testimonial/rizky.png'
import { FaStar } from "react-icons/fa";
import AOS from 'aos'
import "aos/dist/aos.css"
import {useEffect} from "react"

const testimoni = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    const testimonials = [
        {
            img: Sarah,
            name: "Sarah",
            title: "Information System Student",
            rate: "4.9",
            comment: "Cyber ​​House has changed my view on cyber security. The material is very clear, and the instructors are always ready to help. After this bootcamp, I feel more confident in my abilities."
        },
        {
            img: Rizky,
            name: "Rizky",
            title: "Junior Penetration Tester",
            rate: "4.8",
            comment: "Cyber ​​House Bootcamp provides a strong foundation for a career in cybersecurity with well-structured programs and applicable knowledge. Highly recommended."
        },
        {
            img: Andini,
            name: "Andini",
            title: "Fresh Graduate of Informatics",
            rate: "5.0",
            comment: "Cyber ​​House effectively combines theory and practice, providing new insights into protecting data and systems from cyber threats through challenges that spur critical thinking."
        }
    ]
    return (
        <section id="testimoni" className="py-[50px] bg-[#F9FCFF]">
            <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-[24px]">
                        <div className="border-2 border-[#f5ba20] w-[64px] rounded-full h-0"></div>
                        <h1 className="ml-2 text-[24px] text-[#1A2434]">Testimonial</h1>
                    </div>
                    <h1 className="text-[32px] text-[#1A2434] font-semibold" >Student Testimonial</h1>
                </div>
            
           
            <div className="flex justify-between mt-[80px] px-[80px] max-xl:flex-col max-xl:justify-between max-xl:items-center" data-aos="fade-up">
                {
                    testimonials.map((testimoni, index) => (
                        <div key={index} className="rounded-[16px] w-[405.33px]  p-[32px] bg-white max-xl:mt-[1rem]" >
                            <div className="flex  gap-[16px]" >
                                <Image  width={92} height={92} src={testimoni.img}/>
                                <div>
                                <p className="text-[20px] text-[#1A2434] font-bold" >{testimoni.name}</p>
                                <p className="text-[16px] text-[#1A2434] font-thin" >{testimoni.title}</p>
                                <p className='text-left text-[20px] text-[#1A2434] flex items-center'>
                                            <FaStar className='text-[#f5ba20] mr-1' />
                                            {testimoni.rate}
                                        </p>
                                </div>
                            </div>
                            <p className="text-[20px] text-[#1A2434] mt-[16px]" >{testimoni.comment}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default testimoni;