import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex gap-3 absolute bottom-18 left-[10%] items-center">
            <Link href={'/'}>
                <Image src={'/message.svg'} width={24} height={24} alt="instagram" />
            </Link>
            <Link href={'/'}>
                <Image src={'/call.svg'} width={21} height={21} alt="instagram" />
            </Link>

            <Link href={'/'}>
                <Image src={'/instagram.svg'} width={25} height={25} alt="instagram" />
            </Link>
        </div>
    )
}
