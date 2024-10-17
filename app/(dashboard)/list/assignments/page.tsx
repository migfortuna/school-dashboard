import React from "react";
import TableHeading from "@/app/components/TableHeading";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import { assignmentsData } from "@/app/lib/data";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  //   {
  //     header: "Actions",
  //     accessor: "action",
  //   },
];

const AssignmentsList = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
    </tr>
  );
  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Assignments" />
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      <Pagination />
    </section>
  );
};

export default AssignmentsList;
