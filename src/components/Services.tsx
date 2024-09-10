import Image from "next/image"
import consultancy from '../assets/consultancy.png'
import cybersecurity from '../assets/cyber security.jpeg'
import server from '../assets/server.jpg'
import software from '../assets/software.jpeg'
import mobiledev from '../assets/mobile dev.jpg'
import ITsupport from '../assets/it support.jpg'
export default function Services(){
    return(
        
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

    )
}