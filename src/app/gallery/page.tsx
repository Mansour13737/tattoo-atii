import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Text from "../components/Text"

export default function Gallery() {
    return (
        <div className="w-full h-screen relative flex flex-col  justify-start items-center min-h-screen bg-[url('/image.png')] bg-no-repeat bg-center bg-cover">
            <Navbar left="text-[#231004]" right="text-[#231004]" />
            <p className="text-center tracking-wide mt-[5%] text-[17px] font-semibold text-black font-display">A Curated Collection of Timeless & <br /> Modern Tattoos For Women <br />
                Who Seek Meaning, Beauty, and Elegance</p>
            <ul className="flex gap-4 text-[12px] mt-5 tracking-wide font-display">
                <li>CLASSIC</li>
                <li>MINIMAL</li>
                <li>MODERN</li>
                <li>FANTASY</li>
            </ul>
            <div className="grid grid-cols-3 gap-1 mt-2 gap-x-1 ">
                <Image src={'/tattoos/1.png'} width={100} height={100} alt="pic"/>
                <Image src={'/tattoos/2.png'} width={100} height={100} alt="pic" className="h-[118px]"/>
                <Image src={'/tattoos/3.png'} width={100} height={100} alt="pic" className="h-[118px]"/>
                <Image src={'/tattoos/4.png'} width={100} height={100} alt="pic"/>
                <Image src={'/tattoos/5.png'} width={100} height={100} alt="pic"/>
                <Image src={'/tattoos/6.png'} width={100} height={100} alt="pic" className="h-[118px]"/>
                <Image src={'/tattoos/7.png'} width={100} height={100} alt="pic"/>
            </div>
            <Link href={'/'} className="text-[10px] h-fit text-white md:text-[10px] lg:text-[16px] absolute lg:left-0 lg:-top-[90%] lg:font-extralight font-extralight md:mt-[70%] lg:mt-[80%] md:ml-8 lg:ml-12 border-[#231004]/70 border-[0.8px] px-4 md:px-4 lg:px-[20px] py-2 md:py-3 lg:py-[8px] w-fit left-12 top-[81%] lg:hover:bg-[rgba(0,0,0,0.1)] font-display ">BACK</Link>
            <Footer />
            <Text />
        </div>
    )
}
