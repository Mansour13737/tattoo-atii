import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Text from "./components/Text";

export default function Home() {
  return (
      <div className="w-full relative min-h-screen bg-[url('/bg-home.jpeg')] bg-center bg-no-repeat bg-cover flex flex-col">
        <Navbar/>
        <Link href={'/'} className="text-[8px] md:text-[10px] lg:text-[12px] absolute font-extralight mt-[60%] md:mt-[70%] lg:mt-[80%] ml-4 md:ml-8 lg:ml-12 border-[#d1b2a0]/70 border-[0.8px] px-3 md:px-4 lg:px-[20px] py-2 md:py-3 lg:py-[8px] w-fit">VIEW GALLERY</Link>
        <Footer/>
        <Text />
      </div>
  );
}
