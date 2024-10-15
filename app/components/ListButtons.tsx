"use client";

import React from "react";
import Image from "next/image";

const ListButtons = () => {
  return (
    <div className="max-md:mt-5 flex justify-end items-center gap-4">
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
        <Image src="/filter.png" alt="" width={14} height={14} />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
        <Image src="/sort.png" alt="" width={14} height={14} />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
        <Image src="/plus.png" alt="" width={14} height={14} />
      </button>
    </div>
  );
};

export default ListButtons;
