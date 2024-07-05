import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "1~151번까지의 포켓몬 도감",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[60px] bg-[#383838] text-center pt-[1rem] ">
          <h1 className="font-bold"> pokemon list</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
