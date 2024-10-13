import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <section className="flex justify-end md:justify-between items-center p-5">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

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
