"use client";
import { useState, useEffect } from "react";
import Member from "../../assets/students.png";
import Partner from "../../assets/partner.png";
import Image from "next/image";
import Ibnu from "../../assets/mentor/Ellipse 1139.png";
import efraim from "../../assets/mentor/efraim.png";
import Fikri from "../../assets/mentor/fikri.png";
import AOS from "aos";

const main = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  const mentors = [
    {
      name: "Ibnu Faisal",
      position: "Cyber Security Expert",
      image: Ibnu,
      description:
        "Cyber Security Expert Head of infoSec at byOrange, Certified in Cyber Security by ISC2",
    },
    {
      name: "Efraim Julian",
      image: efraim,
      position: "Cyber Security Expert",
      description:
        "Senior IT Governance and Security Management Informedia Nusantara, Certified CISA, Certified CEH, Certified LA27001",
    },
  ];
  const [isHovered, setHovered] = useState(false);
  return (
    <section id="Hero" className="bg-[#F9FCFF]" draggable="false">
      <div className="md:flex grid-cols-1 justify-between py-[20px] md:py-[40px] px-[20px] md:px-[80px]">
        <div>
          <h1 className="md:text-[60px] text-[48px] font-bold">
            Master Digital Skills <br /> with Ease!
          </h1>
          <p className="py-[20px] text-[16px] md:text-[20px] text-[#1A2434]">
            Unlock Digital Mastery Effortlessly! Explore and enhance your <br />{" "}
            skills with our user-friendly platform.
          </p>
          <div className="flex gap-[40px] mt-[20px]">
            <div className="border-2 border-[#f5ba20] h-[96px] rounded-full"></div>
            <div>
              <h1 className="text-[20px] text-[#1A2434] font-bold">
                Total Student
              </h1>
              <Image alt="member" src={Member} className="ml-[-1rem]" />
            </div>
          </div>
          <div className="grid-cols-2 mt-[40px] flex gap-[16px] group">
            <div
              className={`transition-all duration-700 ease-in-out ${
                isHovered
                  ? "border-2 text-black bg-transparent border-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center"
                  : `bg-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center text-white hover:scale-105 hover:shadow-2xl`
              }`}
            >
              <h1 className=" font-bold text-[18px] md:text-[24px]"><a href="/#Product">Start Learning</a></h1>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out ${
                isHovered
                  ? `bg-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center text-white hover:scale-105 hover:shadow-2xl`
                  : `border-2 text-black bg-transparent border-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center`
              }`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h1 className=" font-bold text-[18px] md:text-[24px]"><a href="/#About">Learn More</a></h1>
            </div>
          </div>
          <div className="mt-[40px] mb-[30px] md:mb-0">
            <h1 className="text-[20px] text-[#1A2434] font-bold"></h1>
            <Image alt="partner" src={Partner} className="mt-[8px]" />
          </div>
        </div>

        <div>
          <div data-aos="fade-left" className="flex">
            <div className="absolute bg-white w-[296px] h-[480px] rounded-[16px] mt-[16px]">
              <p className="text-[20px] font-bold text-[#1A2434] pl-[32px] pt-[16px] w-full">
                Our Mentor
              </p>
              {mentors.map((mentor) => (
                <div className="pl-[32px] pt-[16px]">
                  <div className="flex">
                    <Image
                      alt="ibnu"
                      src={mentor.image}
                      widths={42}
                      className="h-auto max-h-[42px] object-cover"
                    />
                    <div className="px-[8px]">
                      <h1 className="font-bold text-[16px]">{mentor.name}</h1>
                      <p className="text-[14px] text-[#575455] font-bold">
                        {mentor.position}
                      </p>
                      <p className="text-[12px] text-[#575455] font-thin">
                        {mentor.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-2 ml-[219px] border-[#f5ba20] w-[405px] h-[540px] md:h-[666px] bg-[#f5ba20] rounded-[24px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default main;