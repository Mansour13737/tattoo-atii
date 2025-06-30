import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex gap-2 md:gap-3 absolute bottom-16 md:bottom-16 lg:bottom-18 left-[5%] md:left-[8%] lg:left-[10%] items-center">
            <Link href={'/'} className="hover:opacity-80 transition-opacity">
                <Image src={'/message.svg'} width={20} height={20} className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6" alt="message" />
            </Link>
            <Link href={'/'} className="hover:opacity-80 transition-opacity">
                <Image src={'/call.svg'} width={21} height={21} className="w-5 h-5 md:w-5 md:h-5 lg:w-5 lg:h-5" alt="call" />
            </Link>
            <Link href={'/'} className="hover:opacity-80 transition-opacity">
                <Image src={'/instagram.svg'} width={23} height={23} className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6" alt="instagram" />
            </Link>
        </div>
    )
}
