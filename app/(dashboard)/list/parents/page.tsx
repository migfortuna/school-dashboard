import React from "react";
import SearchBar from "@/app/components/SearchBar";
import ListButtons from "@/app/components/ListButtons";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import ListActions from "@/app/components/ListActions";
import { parentsData } from "@/app/lib/data";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
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

const ParentsList = () => {
  const renderRow = (parent: Parent) => {
    return (
      <tr
        key={parent.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex flex-col p-4">
          <h3 className="font-semibold">{parent.name}</h3>
          <p className="text-xs text-gray-500">{parent.email}</p>
        </td>
        <td className="hidden md:table-cell">{parent.students.join(", ")}</td>
        <td className="hidden lg:table-cell">{parent.phone}</td>
        <td className="hidden lg:table-cell">{parent.address}</td>
        <ListActions linkTo={`/list/parents/${parent.id}`} />
      </tr>
    );
  };
  return (
    <section className="p-4 flex-1">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="max-md:flex-1 md:flex gap-4">
          <SearchBar flexClass="flex" />
          <ListButtons />
        </div>
      </div>

      {/* TABLE */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />

      {/* PAGINATION */}
      <Pagination />
    </section>
  );
};

export default ParentsList;
