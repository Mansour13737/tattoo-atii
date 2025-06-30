import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full font-display flex justify-between px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-4 border-[0.5px] border-white/10 text-[#d1b2a0] tracking-[0.3px] md:tracking-[0.4px] lg:tracking-[0.5px]">
            <div>
                <span className="tracking-[3px] md:tracking-[4px] lg:tracking-[5px] text-[16px] md:text-base lg:text-lg"><span className="text-[#976e4f] font-bold">E</span>LARA</span>
            </div>
            <ul className="flex justify-around gap-4 md:gap-3 lg:gap-5 text-[11px] font-extralight md:text-[11px] lg:text-[12px] items-center leading-6">
                <Link href={'/gallery'} className="hover:text-[#976e4f] transition-colors">GALLERY</Link>
                <Link href={'/'} className="hover:text-[#976e4f] transition-colors">ABOUT</Link>
                <Link href={'/'} className="hover:text-[#976e4f] transition-colors">BLOG</Link>
            </ul>
        </nav>
    )
}
