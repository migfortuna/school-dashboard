import React from "react";
import UserCard from "@/app/components/dashboard/UserCard";

const users = ["students", "parents", "teachers", "staff"];

const AdminPage = () => {
  return (
    <section className="p-4 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3">
        <div className="flex flex-wrap justify-between gap-4">
          {users.map((user, index) => (
            <UserCard key={index} userType={user} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3">right</div>
    </section>
  );
};

export default AdminPage;
