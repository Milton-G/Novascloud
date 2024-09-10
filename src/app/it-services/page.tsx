import Services from "@/components/Services";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
export default function IT_services () {
    return(
        <div>
    <Navbar/>
    <div className=" bg-slate-200 h-80px">
    <h1 className=" py-4 text-4xl text-center"> OUR SERVICES</h1>
    <p className=" pb-2 text-center">Custom It services tailored to your business</p>
    </div>
    <Services/>
    <Footer/>
    </div>
    );
}