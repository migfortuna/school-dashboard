import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <section className="flex justify-end md:justify-between items-center p-5">
      {/* search bar */}
      <SearchBar flexClass="hidden md:flex" />

      {/* icons */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div
            className="absolute -top-3 -right-3 w-5 h-5
            flex items-center justify-center rounded-full 
            text-xs font-semibold text-white bg-purple-500"
          >
            1
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs leading-3 font-medium">Miguel Fortuna</p>
          <p className="text-[10px] text-gray-500">Admin</p>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default Navbar;
