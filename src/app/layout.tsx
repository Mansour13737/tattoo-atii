import type { Metadata, Viewport } from "next";
import { Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";

const merri = Merriweather({
  subsets: ["latin"],
  variable: "--font-merri",
  weight: "300",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-play",
});

export const metadata: Metadata = {
  title: "ELARA - Tattoo Studio",
  description: "Designed for women. Inspired by art. Created with passion.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${merri.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
