import React from "react";
import BigCalendar from "@/app/components/dashboard/BigCalendar";
import EventCalendar from "@/app/components/dashboard/Calendar";
import Announcements from "@/app/components/dashboard/Announcements";

const TeacherPage = () => {
  return (
    <section className="p-4 flex flex-col xl:flex-row gap-4">
      <div className="h-full w-full xl:w-2/3 p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule (4A)</h1>
        <BigCalendar />
      </div>
      <div className="w-full xl:w-1/3 flex flex-col">
        <EventCalendar />
        <Announcements />
      </div>
    </section>
  );
};

export default TeacherPage;
