import Kelas from './class'
import Navbar from "../components/navbar"
export default function details () {
    return (
        <>
        <Navbar/>
        <div className="px-[80px] py-[45px]">
            <h1 className="text-black font-bold text-[40px]" >Welcome To Cyber House</h1>
            <p className="text-[30px]" >Discover our comprehensive <br/> cybersecurity courses and start your <br/> journey today.</p>
        </div>
        <Kelas/>
        </>
    )
}