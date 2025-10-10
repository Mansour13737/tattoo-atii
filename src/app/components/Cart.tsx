import Image from "next/image"

interface Inp {
    address: string
    w?: number
    h?: number
}


export default function Cart({ address, w, h }: Inp) {
    return (
        <div className="h-fit w-30 pt-1 text-[13px] text-[#252f24] font-display bg-[#FCF9EA] backdrop-blur-3xl flex flex-col justify-center items-center">
            <Image src={address} loading="lazy" width={w} height={h} className=" h-40 object-cover object-center rounded-[2px]"
                alt="pic" />
            <div className="flex justify-between w-full px-2 gap-3 items-center py-1 ">
                <div>10$</div>
                <div className="px-[12px] rounded-[10px] text-white py-[1px] bg-gray-800 text-center">+</div>
            </div>
            <div className="p-1 pl-2 bg-black text-white flex w-full text-wrap text-[8px] overflow-y-scroll justify-center gap-2">
                <span>#Minimal,#Thin,#Artistic,#Plants,#Forearm,#Minimal,#Thin,#Artistic,#Plants,#Forearm</span>
            </div>
        </div>
    )
}
