"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Text from "../components/Text";
import { Tattos } from "../data/tattos";

type FormValues = {
  name: string;
  phone: string;
};

// تبدیل اعداد فارسی به انگلیسی
const persianToEnglish = (str: string) =>
  str.replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 1776));

// 🔹 محتوای صفحه رزرو
function ReserveContent() {
  const searchParams = useSearchParams();
  const selectedQuery = searchParams.get("selected");
  const selectedCodes = selectedQuery ? selectedQuery.split(",") : [];

  const selectedTattos = Tattos.filter((item) =>
    selectedCodes.includes(item.code)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const phone = persianToEnglish(data.phone);

    const finalData = {
      ...data,
      phone,
      selectedTattos: selectedTattos.map((t) => t.code),
    };

    const existing = JSON.parse(localStorage.getItem("reservations") || "[]");
    localStorage.setItem("reservations", JSON.stringify([...existing, finalData]));

    alert("Your reservation has been successfully submitted ✅");
    reset();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-bl from-[#47473c] via-[#646650] to-[#646650] text-[#FCF9EA] font-display">
      <Navbar left="text-[#231004]" right="text-[#231004]" />

      <h1 className="mt-10 text-2xl md:text-3xl font-semibold text-center tracking-wide">
        Tattoo Reservation
      </h1>

      {/* 🔹 Selected tattoos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6 px-4 w-full max-w-5xl">
        {selectedTattos.map((tattoo) => (
          <div
            key={tattoo.code}
            className="bg-[#FCF9EA] text-[#252f24] rounded-md shadow-md flex flex-col items-center overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <div className="relative w-full h-36">
              <Image
                src={tattoo.address}
                alt={tattoo.code}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full text-center py-1 border-t border-gray-300 text-sm font-semibold">
              {tattoo.code}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Reservation form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FCF9EA] text-[#252f24] rounded-xl shadow-lg p-6 mt-10 w-[90%] max-w-md flex flex-col gap-4 backdrop-blur-sm border border-black/10"
      >
        <h2 className="text-lg font-semibold text-center mb-2">
          Your Information
        </h2>

        <input
          {...register("name", { required: "Full name is required" })}
          type="text"
          placeholder="Full Name"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#252f24] bg-white/90"
        />
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name.message}</span>
        )}

        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9۰-۹]{10,15}$/,
              message: "Enter a valid phone number",
            },
          })}
          type="tel"
          placeholder="Phone Number"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#252f24] bg-white/90"
        />
        {errors.phone && (
          <span className="text-red-600 text-sm">{errors.phone.message}</span>
        )}

        <button
          type="submit"
          className="bg-black text-[#FCF9EA] py-2 rounded-md hover:bg-[#252f24]/90 transition-all mt-2"
        >
          Confirm Reservation
        </button>
      </form>

      <Link
        href="/gallery"
        className="mt-8 mb-10 text-[12px] border border-[#FCF9EA]/50 px-4 py-2 rounded hover:bg-[#FCF9EA]/10 transition-all"
      >
        ← Back to Gallery
      </Link>

      <Footer />
      <Text />
    </div>
  );
}

// 🔹 خروجی نهایی با Suspense
export default function ReservePage() {
  return (
    <Suspense fallback={<div className="text-center text-[#FCF9EA] mt-10">Loading...</div>}>
      <ReserveContent />
    </Suspense>
  );
}
