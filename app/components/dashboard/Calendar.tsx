"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ChartHeader from "./ChartHeader";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar value={value} onChange={onChange} />
      <ChartHeader title="Events" />
      <div className="mt-3 flex flex-col gap-2">
        {events.map((e) => (
          <div
            key={e.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaYellow"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{e.title}</h1>
              <p className="text-gray-300 text-xs">{e.time}</p>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
