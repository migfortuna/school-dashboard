import React from "react";
import Link from "next/link";
import Image from "next/image";
import BigCalendar from "@/app/components/dashboard/BigCalendar";
import Announcements from "@/app/components/dashboard/Announcements";
import PerformanceChart from "@/app/components/dashboard/PerformanceChart";
import { teachersData } from "@/app/lib/data";

const teacherShortcuts = [
  "Classes",
  "Students",
  "Lessons",
  "Exams",
  "Assignments",
];

const TeacherPage = ({ params }: { params: { id: string } }) => {
  const teacher = teachersData.find(
    (teacher) => teacher.id == Number(params.id)
  );
  return (
    <section className="flex flex-col flex-1 xl:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* TEACHER INFO CARD */}
          <div className="shadow-inner flex flex-1 gap-4 bg-lamaSky py-6 px-4 rounded-md">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">{teacher?.name}</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <p>A+</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <p>January 2025</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <p>{teacher?.email}</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <p>{teacher?.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex flex-1 flex-wrap justify-between gap-4">
            <div className="shadow-inner bg-lamaSkyLight w-full md:w-[48%] lg:w-[47%] flex items-center gap-4 rounded-md p-4">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <p className="text-sm text-gray-400">Attendance</p>
              </div>
            </div>
            <div className="shadow-inner bg-lamaSkyLight w-full md:w-[48%] lg:w-[47%] flex items-center gap-4 rounded-md p-4">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <p className="text-sm text-gray-400">Branches</p>
              </div>
            </div>
            <div className="shadow-inner bg-lamaSkyLight w-full md:w-[48%] lg:w-[47%] flex items-center gap-4 rounded-md p-4">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <p className="text-sm text-gray-400">Lessons</p>
              </div>
            </div>
            <div className="shadow-inner bg-lamaSkyLight w-full md:w-[48%] lg:w-[47%] flex items-center gap-4 rounded-md p-4">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">
                  {!teacher ? 0 : teacher.classes.length}
                </h1>
                <p className="text-sm text-gray-400">Classes</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 rounded-md p-4">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3">
        {/* SHORTCUTS */}
        <div className="px-4 pb-4">
          <h1 className="mb-4 text-xl font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            {teacherShortcuts.map((x, index) => (
              <Link
                key={index}
                href={`/list/${x.toLowerCase()}`}
                className="odd:bg-lamaPurpleLight even:bg-lamaYellowLight p-3 rounded-md"
              >
                Teacher's {x}
              </Link>
            ))}
          </div>
        </div>

        {/* PERFORMANCE */}
        <PerformanceChart />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </section>
  );
};

export default TeacherPage;
