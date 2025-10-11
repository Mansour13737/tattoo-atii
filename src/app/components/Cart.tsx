import Image from "next/image";

interface Inp {
    address: string;
    code: string;
    category?: string;
    w?: number;
    h?: number;
    selected: boolean;
    onToggle: () => void;
}

export default function Cart({ address, code, category, w = 150, h = 150, selected, onToggle }: Inp) {
    return (
        <div className="cart w-[100px] sm:w-[140px] md:w-[160px] bg-[#FCF9EA] text-[#252f24] font-display rounded-md shadow-sm flex flex-col items-center overflow-hidden">
            {/* تصویر تَتو */}
            <div className="relative w-full h-[130px]">
                <Image
                    src={address}
                    alt="tattoo"
                    width={w}
                    height={h}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg"
                    quality={70}
                    className="object-cover object-center w-full h-full rounded-[2px]"
                />
            </div>

            {/* دکمه تغییر وضعیت */}
            <div className="flex justify-between w-full px-2 py-1 text-[11px]">
                <span>{code}</span>
                <button
                    onClick={onToggle}
                    className={`px-[10px] py-[1px] rounded-full transition ${selected ? "bg-green-600 text-white" : "bg-gray-800 text-white hover:bg-gray-700"
                        }`}
                >
                    {selected ? "✓" : "+"}
                </button>
            </div>

            {/* تگ‌ها */}
            <div className="bg-black text-white w-full text-[8px] text-left pl-2 truncate hover:whitespace-normal hover:overflow-visible transition-all">
                {category}
            </div>
        </div>
    );
}
