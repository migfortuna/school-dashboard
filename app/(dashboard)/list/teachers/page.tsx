import React from "react";
import SearchBar from "@/app/components/SearchBar";
import ListButtons from "@/app/components/ListButtons";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import { teachersData } from "@/app/lib/data";

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
  return (
    <section className="p-4 flex-1">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="max-md:flex-1 md:flex gap-4">
          <SearchBar flexClass="flex" />
          <ListButtons />
        </div>
      </div>

      {/* TABLE */}
      <Table columns={columns} data={teachersData} />

      {/* PAGINATION */}
      <Pagination />
    </section>
  );
};

export default TeachersList;
