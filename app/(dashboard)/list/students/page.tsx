import React from "react";
import Image from "next/image";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import ListActions from "@/app/components/ListActions";
import { studentsData } from "@/app/lib/data";
import TableHeading from "@/app/components/TableHeading";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentsList = () => {
  const renderRow = (student: Student) => {
    return (
      <tr
        key={student.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex gap-4 p-4">
          <Image
            src={student.photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{student.name}</h3>
            <p className="text-xs text-gray-500">{student.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{student.studentId}</td>
        <td className="hidden md:table-cell">{student.grade}</td>
        <td className="hidden lg:table-cell">{student.phone}</td>
        <td className="hidden lg:table-cell">{student.address}</td>
        <ListActions linkTo={`/list/students/${student.id}`} actionImg="view" />
      </tr>
    );
  };

  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Students" />
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </section>
  );
};

export default StudentsList;
