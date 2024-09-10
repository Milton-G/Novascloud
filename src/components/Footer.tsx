import Link from "next/link";
import Image from "next/image";
import background from '../assets/background.png'


const Footer = () => {
  return (
    <div className="h-screen grid grid-cols-2 gap-4 p-4 relative" >
     <div className=" absolute h-full w-full object-cover"> <Image src={background} alt="background image" layout="fill"objectFit="cover" /></div>
    <div className=" p-4 z-10 text-white">
      <h1 className="text-3xl pb-4">Our services</h1>
      <ul>
      <li><Link href="/about">Managed IT</Link></li>
      <li><Link href="/about">Domain and hosting</Link></li>
      <li><Link href="/about">web development</Link></li>
      <li><Link href="/about">mobile app development</Link></li>
      <li><Link href="/about">IT support</Link></li>
      <li><Link href="/about">Data storage infrastructure</Link></li>
      <li><Link href="/about">IT consultancy</Link></li>
      </ul>
      
    </div>

    <div className="text-right text-white p-4 z-10">
      <p>mobile: 0783471977</p>
      <p>Email: info@novascloud.co.ke</p>
      <button>Contact us</button>
    </div>
    <div className="z-10 text-center col-span-2 text-white pt-32 ">
    <hr className="mb-4"/>
    <p>Copyright @ 2024- All Rights reserved. Theme by Novascloud Limited</p>
    </div>
    </div>
    
  )
}

export default Footer;