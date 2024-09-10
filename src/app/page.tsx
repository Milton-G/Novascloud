import Image from "next/image";
import homepage from '../assets/homepage.png'
import consultancy from '../assets/consultancy.png'
import cybersecurity from '../assets/cyber security.jpeg'
import server from '../assets/server.jpg'
import software from '../assets/software.jpeg'
import mobiledev from '../assets/mobile dev.jpg'
import ITsupport from '../assets/it support.jpg'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import Whychooseus from "@/components/whychooseus";
export default function Home() {
return(
  <div>
    <Navbar/>
    <div>
      <Image src={homepage} alt="hero image" className="w-full h-screen object-cover"/>
    </div>
    <div className="flex justify-between py-6" >
    <div className="flex-1 flex flex-col justify-center gap-20 pl-180">
      <h1 className=" font-bold text-4xl ">WE RESOLVE KEY PROBLEMS FOR BUINESSES</h1>
      <p className="py-0">We have always known that businesses large and small, IT can be a real<br/> 
        challenge to manage. Staying on top of your technology includes controlling<br/>
        the costs associated with keeping inhouse staff up to date with training,<br/>
        certifications and current trends
      </p>
      <div>
        <button className="hover:bg-slate-600 h-20 w-48 items-center px-2 py-2 bg-red-500 text-white rounded-2xl">Discover our services</button>
      </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <ol>
      <li><h2 className="font-semibold text-2xl">1.Poor IT Performance and service delivery</h2><p>Poorly performing IT partners and IT services reduce productivity and risk the integrity of the business</p> </li>
      <li><h2 className="font-semibold text-2xl">2.Distraction from Business Priorities</h2><p>Our typical customer doesnt want to be distracted by IT services that don't add value to the customers</p> </li>
      <li><h2 className="font-semibold text-2xl">3.Contrtolling IT Costs</h2><p>It is important to have managed IT costs since it is one of the largest ongoing cost in any business</p> </li>
        </ol>
      </div>
      </div>
      <div className=" text-center text-2xl bg-slate-400"><hr/><p>Custom IT services tailored towards your Business</p></div>

    <div className="flex flex-wrap justify-center ">
      <div className="w-1/3 p-4">
      <h1>IT Consultancy</h1>
      <Image src={consultancy}alt="IT consultancy"/>
      <p>Novascloud Ltd services span the complete life cycle but its true value is seen from the very early stages with high level consulting directing the project as it matures into detailed project designs and implementation.</p>
      <button>Read More</button>
      </div>

      <div className="w-1/3 p-4">
      <h1>Cyber security</h1>
      <Image src={cybersecurity}alt="cybersecurity"/>
      <p>Novascloud Ltd services span the complete life cycle but its true value is seen from the very early stages with high level consulting directing the project as it matures into detailed project designs and implementation.</p>
      <button>Read More</button>
      </div>

      <div className="w-1/3 p-4">
      <h1>Server and storage</h1>
      <Image src={server}alt="server and storage"/>
      <p>Novascloud Ltd services span the complete life cycle but its true value is seen from the very early stages with high level consulting directing the project as it matures into detailed project designs and implementation.</p>
      <button>Read More</button>
      </div>

      <div className="w-1/3 p-4">
      <h1>software development</h1>
      <Image src={software}alt="software dev"/>
      <p>Novascloud Ltd services span the complete life cycle but its true value is seen from the very early stages with high level consulting directing the project as it matures into detailed project designs and implementation.</p>
      <button>Read More</button>
      </div>

      <div className="w-1/3 p-4">
      <h1>Mobile App Development</h1>
      <Image src={mobiledev}alt="mobile dev"/>
      <p>Novascloud Ltd services span the complete life cycle but its true value is seen from the very early stages with high level consulting directing the project as it matures into detailed project designs and implementation.</p>
      <button>Read More</button>
      </div>

      <div className="w-1/3 p-4">
      <h1>IT Support</h1>
      <Image src={ITsupport}alt="IT support"/>
      <p>Novascloud Ltd services span the complete life cycle but its true value is seen from the very early stages with high level consulting directing the project as it matures into detailed project designs and implementation.</p>
      <button>Read More</button>
      </div> 
    </div>
    <Whychooseus/>    
    <Footer/>
  </div>
  
);
}