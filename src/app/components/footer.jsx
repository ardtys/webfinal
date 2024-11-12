import Image from "next/image"
import Logo from "../../assets/logo.png"
import { FaInstagram, FaLinkedin,FaTwitter } from "react-icons/fa";

const footer = () => {
    return (
        <section id="Footer" className="bg-[#000000] w-full p-[80px] " >
            <div className="flex justify-between max-lg:flex-col" >
                
                    <div className="flex flex-col w-[441px]">
                        <div className="flex gap-[8px]">
                        <Image width={42} height={42} src={Logo} />
                        <h1 className="text-white text-[27px] font-bold" >Cyber House</h1>
                        </div>
                        <p className="mt-[24px] text-left text-white text-[20px] max-lg:hidden">Cyber House is Indonesia is Indonesia’s most
                        comprehensive ed-tech company
                        specializing in Cyber Security, Web
                        3, and Blockchain. We offering
                        enjoyable, flexible, and affordable
                        learning experiences for all,
                        adhering to our motto of equal
                        learning opportunities for everyone</p>
                    </div>
                    <div className="flex flex-col w-[141px] max-md:hidden">
                        <h1 className="text-white text-[27px] font-bold" >Quick links</h1>
                        <div className="max-lg:flex">
                        <a href="/#About"><p className="mt-[24px] text-left text-white text-[20px]">About Us</p></a>
                        <a href="/#Product"><p className="mt-[24px] text-left text-white text-[20px]">Our Class</p></a>
                       <a href="/#Footer"> <p className="mt-[24px] text-left text-white text-[20px]">Contact</p></a>
                        </div>
                    </div>
                    <div className="flex flex-col w-[200px] max-md:mt-[50px]">
                        <h1 className="text-white text-[27px] font-bold" >Social Media</h1>
                       <div className="flex gap-8 mt-[16px]">
                        <a href="https://x.com/cyberhouseid" target="_blank"><FaTwitter className="text-white" size={30}/></a>
                        <a href="https://www.instagram.com/cyberhouse.id/" target="_blank"><FaInstagram  className="text-white" size={30}/></a>
                        <a href="https://www.linkedin.com/company/cyber-house/mycompany/" target="_blank"><FaLinkedin  className="text-white" size={30}/></a>
                       </div>
                    </div>
            </div>
        </section>
    )
}

export default footer