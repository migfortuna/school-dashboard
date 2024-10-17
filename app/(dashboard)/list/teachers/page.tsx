import React from "react";
import Image from "next/image";
import TableHeading from "@/app/components/TableHeading";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import ListActions from "@/app/components/ListActions";
import { teachersData } from "@/app/lib/data";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

const TeachersList = () => {
  const renderRow = (teacher: Teacher) => {
    return (
      <tr
        key={teacher.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex gap-4 p-4">
          <Image
            src={teacher.photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{teacher.name}</h3>
            <p className="text-xs text-gray-500">{teacher.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{teacher.teacherId}</td>
        <td className="hidden md:table-cell">{teacher.subjects.join(", ")}</td>
        <td className="hidden md:table-cell">{teacher.classes.join(", ")}</td>
        <td className="hidden lg:table-cell">{teacher.phone}</td>
        <td className="hidden lg:table-cell">{teacher.address}</td>
        <ListActions linkTo={`/list/teachers/${teacher.id}`} />
      </tr>
    );
  };

  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Teachers" />
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </section>
  );
};

export default TeachersList;
