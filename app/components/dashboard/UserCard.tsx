import React from "react";
import Image from "next/image";

const UserCard = ({ userType }: { userType: string }) => {
  const date = new Date();
  const dateToday = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  return (
    <div className="flex-1 min-w-[130px] p-4 rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow">
      <div className="flex justify-between items-center">
        <p className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          {dateToday}
        </p>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">6123</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {userType}
      </h2>
    </div>
  );
};

export default UserCard;
