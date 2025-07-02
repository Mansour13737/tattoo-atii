import Link from "next/link"
type NavText = {
    left? : string;
    right? : string;
}
export default function Navbar({left,right} : NavText) {

    return (
        <nav className={`w-full font-display flex justify-between px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 border-b-[0.5px] border-white/40 backdrop-blur-[2px]  tracking-[0.3px] md:tracking-[0.4px] lg:tracking-[0.5px]`}>
            <div>
                <span className={`tracking-[3px] lg:text-[25px] ${left} md:tracking-[4px] lg:tracking-[5px] text-[18px] md:text-base`}><span className="text-[#976e4f] font-bold">E</span>LARA</span>
            </div>
            <ul className={`flex ${right} justify-around gap-4 md:gap-3 lg:gap-8 text-[12px] font-extralight md:text-[11px] lg:text-[14px] items-center leading-6  `}>
                <Link href={'/gallery'} className="hover:text-[#FFFF] transition-colors">GALLERY</Link>
                <Link href={'/'} className="hover:text-[#FFFF] transition-colors">ABOUT</Link>
                <Link href={'/'} className="hover:text-[#FFFF] transition-colors">BLOG</Link>
            </ul>
        </nav>
    )
}
