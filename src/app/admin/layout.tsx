import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-10  h-full">
      <div className="col-span-2 h-full">
        <Navbar />
      </div>
      <div className="col-span-8 h-full py-10 px-5 overflow-auto">
        {children}
      </div>
    </main>
  );
}
