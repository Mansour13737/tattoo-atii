
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Text from "../components/Text"
import Cart from "../components/Cart"
import { Tattos } from "../data/tattos"

export default function Gallery() {

    return (
        <div className="w-full relative bg-cover flex flex-col text-[#FCF9EA] justify-start items-center min-h-screen bg-gradient-to-bl from-[#47473c] via-[#646650] to-[#646650] bg-no-repeat bg-center ">
            <Navbar left="text-[#231004]" right="text-[#231004]" />
            <p className="text-center tracking-wider mt-[5%]  text-[17px] font-semibold  font-display">A Curated Collection of Timeless & <br /> Modern Tattoos For Women <br />
                Who Seek Meaning, Beauty, and Elegance</p>
            <ul className="flex gap-4 text-[12px] mt-5 tracking-wide font-display">
                <li>CLASSIC</li>
                <li>MINIMAL</li>
                <li>MODERN</li>
                <li>FANTASY</li>
            </ul>
            <div className="grid grid-cols-3 gap-1  mt-2 gap-x-2">
                {Tattos.map((item,key) => (
                    <div key={key}>
                        <Cart address={item.address} w={100} h={100}/>      
                    </div>
                ))}
            </div>
            
            <Link href={'/'} className=" self-start ml-5 mt-2 mb-2 text-[10px] h-fit text-white md:text-[10px] lg:text-[16px] lg:left-0 lg:-top-[90%] lg:font-extralight font-extralight md:mt-[70%] lg:mt-[80%] md:ml-8 lg:ml-12 border-[#231004]/70 border-[0.8px] px-4 md:px-4 lg:px-[20px] py-2 md:py-3 lg:py-[8px] w-fit left-12 top-[81%] lg:hover:bg-[rgba(0,0,0,0.1)] font-display ">BACK</Link>
            <Footer />
            <Text />
        </div>
    )
}
