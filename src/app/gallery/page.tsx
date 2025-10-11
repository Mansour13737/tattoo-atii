"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Text from "../components/Text";
import Cart from "../components/Cart";
import { Tattos } from "../data/tattos";
import Image from "next/image";

export default function Gallery() {
  const allData = Tattos;
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);

  // توابع مدیریت انتخاب‌ها
  const toggleSelect = (code: string) => {
    setSelectedCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const types = allData.map((item) => item.category);
  const uniqueTypes = [...new Set(types)];

  return (
    <div className="w-full relative bg-cover overflow-auto flex flex-col text-[#FCF9EA] justify-start items-center min-h-screen bg-gradient-to-bl from-[#47473c] via-[#646650] to-[#646650] bg-no-repeat bg-center ">
      <div className="absolute top-2 w-[100%] opacity-70 right-0 h-8 bg-black"></div>
      <Navbar left="text-[#231004]" right="text-[#231004]" />

      {/* 🔹 نمایش انتخاب‌ها */}
      {selectedCodes.length > 0 && (
        <div className="fixed top-0 left-0 w-full bg-black/70 text-white text-center py-2 z-50 text-sm font-display tracking-wide">
          Selected Tattoos: {selectedCodes.join(", ")}
        </div>
      )}

      <p className="text-center tracking-wider mt-[5%] text-[17px] font-semibold font-display">
        A Curated Collection of Timeless & <br /> Modern Tattoos For Women <br />
        Who Seek Meaning, Beauty, and Elegance
      </p>

      <p className="text-center tracking-widest mt-[11%] text-[15px] font-light font-display">
        SELECT A CATEGORY
      </p>

      {/* دسته‌ها */}
      <ul className="grid grid-cols-4 px-5 gap-1 w-full text-[12px] mt-5 tracking-wide font-display">
        {uniqueTypes.map((type, key) => {
          const tattoo = allData.find((item) => item.category === type);
          return (
            <li
              key={key}
              className="flex cursor-pointer flex-col items-center text-center gap-2 gap-y-2 backdrop:blur-[7px] text-[8px] border-[0.2px] py-[7px] px-[3px]"
            >
              <div>
                <span className="font-semibold">{type.toUpperCase()}</span>
                <br />
                <span className="text-[8px] text-[#E4E4E4]">{tattoo?.code}</span>
              </div>
              {tattoo && (
                <Image
                  src={tattoo.address}
                  width={100}
                  height={70}
                  alt={type}
                  className="rounded object-cover w-full h-30"
                />
              )}
            </li>
          );
        })}
      </ul>

      {/* گالری تَتوها */}
      <div className="grid grid-cols-3 gap-1 gap-x-2 mt-[10%]">
        {Tattos.map((item) => (
          <Cart
            key={item.code}
            address={item.address}
            code={item.code}
            category={item.category}
            w={100}
            h={100}
            selected={selectedCodes.includes(item.code)}
            onToggle={() => toggleSelect(item.code)}
          />
        ))}
      </div>

      <Link
        href="/"
        className="self-start ml-5 mt-2 mb-2 text-[10px] h-fit text-white md:text-[10px] lg:text-[16px] lg:left-0 lg:-top-[90%] lg:font-extralight font-extralight md:mt-[70%] lg:mt-[80%] md:ml-8 lg:ml-12 border-[#231004]/70 border-[0.8px] px-4 md:px-4 lg:px-[20px] py-2 md:py-3 lg:py-[8px] w-fit left-12 top-[81%] lg:hover:bg-[rgba(0,0,0,0.1)] font-display"
      >
        BACK
      </Link>

      <Footer />
      <Text />
    </div>
  );
}
