import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Menu from "../components/Menu";

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Created by Miguel Fortuna",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex">
      <div className="w-[15%] md:w-[10%] lg:w-[15%] p-5">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block mt-1 font-bold">School of Rock</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[85%] md:w-[90%] lg:w-[85%]">Fortuna</div>
    </section>
  );
}
