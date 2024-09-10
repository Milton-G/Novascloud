
import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <main className='flex justify-between items-center py-1 bg-white'>
    <div className='flex items-center '>
    <Image src={logo}alt='Novascloud logo' className='h-24 w-24 mr-24  
      '/>
      
      <nav className=''>
        <ul className='flex justify-between gap-24 '>
          <li><Link href= "/">Home</Link></li>
          <li><Link href="/it-services" >IT services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact-us">Contact us</Link></li>
        </ul>
        </nav>
     
    </div>
  </main>
  )
}

export default Navbar