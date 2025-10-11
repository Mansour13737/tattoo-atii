"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Text from "../components/Text";
import Image from "next/image";
import { Tattos } from "../data/tattos";

export default function Reserve() {
  const searchParams = useSearchParams();
  const selectedQuery = searchParams.get("selected");
  const selectedCodes = selectedQuery ? selectedQuery.split(",") : [];

  // حالت فرم
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // گرفتن جزئیات تَتو از کد
  const selectedTattos = Tattos.filter((item) =>
    selectedCodes.includes(item.code)
  );

  const handleReserve = () => {
    if (!name || !phone || !date || !time) {
      alert("Please fill all fields");
      return;
    }
    // اینجا میتونی API برای ذخیره رزرو بزنی
    alert(`Reserved ${selectedTattos.length} tattoo(s) for ${name} on ${date} at ${time}`);
    // پاک کردن انتخاب‌ها بعد رزرو
    localStorage.removeItem("selectedTattoos");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-bl from-[#47473c] via-[#646650] to-[#646650] text-[#FCF9EA] font-display">
      <Navbar left="text-[#231004]" right="text-[#231004]" />

      <h1 className="mt-8 text-2xl font-semibold text-center">
        Reserve Your Tattoos
      </h1>

      {/* کارت‌های انتخاب شده */}
      <div className="grid grid-cols-3 gap-4 mt-6 px-4 w-full max-w-5xl">
        {selectedTattos.map((tattoo) => (
          <div key={tattoo.code} className="bg-[#FCF9EA] text-[#252f24] rounded-md shadow-md flex flex-col items-center overflow-hidden">
            <div className="relative w-full h-36">
              <Image
                src={tattoo.address}
                alt={tattoo.code}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full text-center py-1 border-t border-gray-300">
              <span className="font-medium">{tattoo.code}</span>
            </div>
          </div>
        ))}
      </div>

      {/* فرم رزرو */}
      <div className="bg-[#FCF9EA] text-[#252f24] rounded-md shadow-md p-6 mt-8 w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={handleReserve}
          className="bg-black text-[#FCF9EA] py-2 rounded hover:bg-gray-800 transition"
        >
          Confirm Reservation
        </button>
      </div>

      <Link
        href="/gallery"
        className="mt-6 text-[12px] border px-4 py-2 rounded hover:bg-black/30"
      >
        Back to Gallery
      </Link>

      <Footer />
      <Text />
    </div>
  );
}
