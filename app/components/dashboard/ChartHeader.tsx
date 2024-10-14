import React from "react";
import Image from "next/image";

const ChartHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">{title}</h1>
      <Image
        src="/moreDark.png"
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
      />
    </div>
  );
};

export default ChartHeader;
