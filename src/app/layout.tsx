import type { Metadata } from "next";
import { Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";

const merri = Merriweather({
  subsets: ['latin'],
  variable: '--font-merri',
  weight: "300"
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-play',
});
export const metadata: Metadata = {
  title: "ELARA - Tattoo Studio",
  description: "Designed for women. Inspired by art. Created with passion.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${merri.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
