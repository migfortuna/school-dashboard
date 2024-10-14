import React from "react";
import Link from "next/link";

const announcements = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis",
    date: "2025-01-01",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis",
    date: "2025-01-01",
  },
];

const Announcements = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <Link href="/" className="text-xs text-gray-400">
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="rounded-md p-4 odd:bg-lamaPurpleLight even:bg-lamaSkyLight"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-medium">{a.title}</h1>
              <p className="text-xs text-gray-400 bg-white rounded-md p-1">
                {a.date}
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-1">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
