
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Text from "./components/Text";

export default function Home() {
  return (
      <div className="w-full relative h-screen bg-[url('/bg-home.jpeg')] bg-center bg-no-repeat bg-cover flex flex-col">
        <Navbar/>
        <Link href={'/'} className="text-[8px] absolute font-extralight  mt-[80%] ml-12 border-[#d1b2a0]/70 border-[0.8px] px-[20px] py-[8px] w-fit">VIEW GALLERY</Link>
        <Footer/>
        <Text />
      </div>
  );
}
