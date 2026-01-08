import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Threedee from "./Components/Threedee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "catkos portfolio",
  description: "Catrina Koskinen's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="h-96 w-full bg-slate-950/10 static">
          <div className="h-full w-full flex flex-col gap-5 justify-center items-center p-10 z-10 relative">
            <h1 className="text-6xl text-left">catkos</h1>
            <h2 className="text-xl">
              hi! i'm catrina koskinen, and i make web pages
            </h2>
          </div>
          <div className="absolute top-0  w-full h-96 z-0">
            {/* <Threedee /> */}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
