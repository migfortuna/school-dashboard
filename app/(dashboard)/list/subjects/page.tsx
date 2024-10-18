import React from "react";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import ListActions from "@/app/components/ListActions";
import { subjectsData } from "@/app/lib/data";
import TableHeading from "@/app/components/TableHeading";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectsList = () => {
  const renderRow = (subject: Subject) => {
    return (
      <tr
        key={subject.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="font-semibold p-4">{subject.name}</td>
        <td className="hidden md:table-cell">{subject.teachers.join(", ")}</td>
        <ListActions actionImg="edit" />
      </tr>
    );
  };
  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Subjects" />
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      <Pagination />
    </section>
  );
};

export default SubjectsList;
