"use client";

import React from "react";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import ChartHeader from "./ChartHeader";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 55,
    fill: "#C3EBFA",
  },
  {
    name: "Boys",
    count: 45,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white border w-full lg:w-1/3 h-[450px] rounded-xl p-4 flex flex-col justify-between">
      <ChartHeader title="Students" />

      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center items-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1234</h1>
          <h2 className="text-xs text-gray-400">Girls (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1234</h1>
          <h2 className="text-xs text-gray-400">Boys (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
