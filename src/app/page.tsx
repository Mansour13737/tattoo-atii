import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Text from "./components/Text";

export default function Home() {

  return (
    <div className="w-full relative min-h-screen bg-[url('/bg-home-empty-save.jpg')] bg-center bg-no-repeat bg-cover flex flex-col">
      <Navbar right="text-[#d1b2a0]" left="text-[#d1b2a0]" />
      <p className="text-wrap lg:text-[60px] text-[40px] leading-17 text-[#d1b2a0] mt-[10%] tracking-wider w-fit mx-auto lg:mr-[60%] font-extralight font-display">Elegant Tattoos <br /> For Women</p>
      <Link href={'/gallery'} className="text-[10px] lg:hover:bg-[rgba(0,0,0,0.1)] text-white md:text-[10px] lg:text-[16px] absolute lg:left-25 lg:-top-[90%] lg:font-extralight font-extralight mt-[60%] md:mt-[70%] lg:mt-[80%] ml-4 md:ml-8 lg:ml-12 border-[#d1b2a0]/70 border-[0.8px] px-4 md:px-4 lg:px-[20px] py-2 md:py-3 lg:py-[8px] w-fit left-8 top-[10%] font-display">VIEW GALLERY</Link>
      <p className="leading-17 absolute text-[#d1b2a0] bottom-20 left-5 tracking-wider w-fit font-serif lg:text-2xl   font-normal">Get In Touch</p>
      <div className="absolute bottom-5">
        <Footer />
        <Text />
      </div>
    </div>
  );
}
