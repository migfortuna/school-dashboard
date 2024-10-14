import React from "react";
import UserCard from "@/app/components/dashboard/UserCard";
import CountChart from "@/app/components/dashboard/CountChart";
import AttendanceChart from "@/app/components/dashboard/AttendanceChart";
import FinanceChart from "@/app/components/dashboard/FinanceChart";

const users = ["students", "parents", "teachers", "staff"];

const AdminPage = () => {
  return (
    <section className="p-4 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          {users.map((user, index) => (
            <UserCard key={index} userType={user} />
          ))}
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex flex-col md:flex-row gap-4">
          <CountChart />
          <AttendanceChart />
        </div>

        {/* BOTTOM CHART */}
        <FinanceChart />
      </div>
      <div className="w-full lg:w-1/3">right</div>
    </section>
  );
};

export default AdminPage;
