"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Text from "../components/Text";
import Cart from "../components/Cart";
import { Tattos } from "../data/tattos";
import Image from "next/image";

export default function Gallery() {
  const allData = Tattos;

  // انتخاب کارت‌ها و دسته‌بندی
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // بارگذاری از localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedTattoos");
    if (stored) setSelectedCodes(JSON.parse(stored));
  }, []);

  // ذخیره در localStorage وقتی تغییر کرد
  useEffect(() => {
    localStorage.setItem("selectedTattoos", JSON.stringify(selectedCodes));
  }, [selectedCodes]);

  // انتخاب / حذف کارت
  const toggleSelect = (code: string) => {
    setSelectedCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  // دسته‌ها
  const types = [...new Set(allData.map((item) => item.category))];

  // فیلتر کارت‌ها بر اساس دسته
  const filteredTattos = selectedCategory
    ? allData.filter((item) => item.category === selectedCategory)
    : allData;

  return (
    <div className="w-full relative bg-cover overflow-auto flex flex-col text-[#FCF9EA] justify-start items-center min-h-screen bg-gradient-to-bl from-[#47473c] via-[#646650] to-[#646650] bg-no-repeat bg-center ">
      <div className="absolute top-2 w-[100%] opacity-70 right-0 h-8 bg-black"></div>
      <Navbar left="text-[#231004]" right="text-[#231004]" />

      {/* نمایش انتخاب‌ها */}
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
        {types.map((type, key) => {
          const tattoo = allData.find((item) => item.category === type);
          const isActive = selectedCategory === type;
          return (
            <li
              key={key}
              onClick={() => setSelectedCategory(type)}
              className={`flex cursor-pointer flex-col items-center text-center gap-2 border-[0.2px] py-[7px] px-[3px] rounded transition-all duration-300 ${
                isActive ? "bg-black/50 border-white" : "hover:bg-black/20"
              }`}
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
        {filteredTattos.map((item) => (
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

      {/* پیشنهاد رزرو وقتی حداقل یک کارت انتخاب شده */}
      {selectedCodes.length > 0 && (
        <div className="fixed bottom-5 right-5 bg-[#FCF9EA] text-black p-4 rounded-lg shadow-lg flex flex-col items-center z-50 animate-fade-in">
          <span className="text-sm font-medium text-center">
            {selectedCodes.length === 1
              ? "Do you want to reserve a session for this tattoo?"
              : `You have selected ${selectedCodes.length} tattoos. Ready to reserve?`}
          </span>
          <div className="flex gap-2 mt-2">
            {/* رفتن به صفحه رزرو */}
            <Link
              href={{
                pathname: "/reserve",
                query: { selected: selectedCodes.join(",") },
              }}
              className="bg-black text-white px-3 py-1 rounded"
            >
              Reserve Now
            </Link>
            {/* ادامه انتخاب */}
            <button
              className="bg-gray-300 px-3 py-1 rounded"
              onClick={() => {}}
            >
              Continue Selecting
            </button>
          </div>
        </div>
      )}

      {/* دکمه‌های مدیریت */}
      <div className="flex gap-4 mt-4">
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-[12px] border px-3 py-1 rounded hover:bg-black/30"
          >
            Show All
          </button>
        )}
        <Link
          href="/"
          className="text-[12px] border px-3 py-1 rounded hover:bg-black/30"
        >
          BACK
        </Link>
      </div>

      <Footer />
      <Text />
    </div>
  );
}
