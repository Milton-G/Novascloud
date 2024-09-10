import Navbar from "@/components/Navbar";
import Image from "next/image";
import consultancy from '../../assets/consultancy.png'
import ITsupport from '../../assets/it support.jpg'
import Whychooseus from "@/components/whychooseus";
import Footer from "@/components/Footer";

export default function about(){
    return(
        <div>
            <Navbar/>
            <div className="bg-slate-200 min-h-60" >
            <h1 className=" text-4xl text-center underline mb-4">ABOUT US</h1>
            <p className="text-center text-2xl italic text-red-400">We are Novascloud Limited</p>
        </div>
        <div className="text-center">
            <h1 className="text-2xl pb-4 mt-4">Our Vision</h1>
            <p className="mb-4 border-b-2">To achieve the best outcomes by providing viable solutions to our customers.</p>

        </div>
        <div className="flex flex-wrap justify-center">
            <Image src={consultancy}alt="consultancy " className="w-1/3 p-4"/>
            <Image src={ITsupport}alt="support" className="w-1/3 p-4"/>
            <ul className="w-1/3 p-6 underline" ><li className="mb-4">High Quality </li>
            <li className="mb-4">Quick Turnaround </li>
            <li className="mb-4">Fair price </li>
            <li className="mb-4">Customer Oriented </li>
            
            </ul>
        </div>
        <Whychooseus/>
        <Footer/>
        </div>
    )
}