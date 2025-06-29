import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-950 flex justify-between px-4 py-4 border-[0.5px] border-white/10 text-[#d1b2a0] tracking-[0.5px]">
            <div>
                <span className="tracking-[5px]"><span className="text-[#976e4f] font-bold">E</span>LARA</span>
            </div>
            <ul className="flex justify-around gap-5 text-[12px] items-center">
                <Link href={'/'}>GALLERY</Link>
                <Link href={'/'}>ABOUT</Link>
                <Link href={'/'}>BLOG</Link>
            </ul>

        </nav>
    )
}
