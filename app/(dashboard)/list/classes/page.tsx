import React from "react";
import TableHeading from "@/app/components/TableHeading";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import ListActions from "@/app/components/ListActions";
import { classesData } from "@/app/lib/data";

type ClassType = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesList = () => {
  const renderRow = (classType: ClassType) => {
    return (
      <tr
        key={classType.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="font-semibold p-4">{classType.name}</td>
        <td className="hidden md:table-cell">{classType.capacity}</td>
        <td className="hidden md:table-cell">{classType.grade}</td>
        <td className="hidden md:table-cell">{classType.supervisor}</td>
        <ListActions actionImg="edit" />
      </tr>
    );
  };
  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Classes" />
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      <Pagination />
    </section>
  );
};

export default ClassesList;
