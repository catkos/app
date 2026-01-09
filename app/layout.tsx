import type { Metadata } from "next";
import { Inter, Cutive_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cutive = Cutive_Mono({
  variable: "--font-cutive-mono",
  weight: "400",
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
      <body className={`${interSans.variable} ${cutive.variable} antialiased`}>
        <header className="h-[50vh] w-full bg-slate-950/10 static">
          <div className="h-full w-full flex flex-col gap-5 justify-center items-center p-10 z-10 relative">
            <h1 className="text-7xl text-left font-cutiveMono text-shadow-lg">
              catkos
            </h1>
            <h2 className="text-xl">
              {"hi! i'm catrina koskinen, and i build web apps"}
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
