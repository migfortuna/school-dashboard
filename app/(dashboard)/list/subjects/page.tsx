import React from "react";
import SearchBar from "@/app/components/SearchBar";
import ListButtons from "@/app/components/ListButtons";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import ListActions from "@/app/components/ListActions";
import { subjectsData } from "@/app/lib/data";

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
        <ListActions linkTo={`/list/subjects/${subject.id}`} />
      </tr>
    );
  };
  return (
    <section className="p-4 flex-1">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="max-md:flex-1 md:flex gap-4">
          <SearchBar flexClass="flex" />
          <ListButtons />
        </div>
      </div>

      {/* TABLE */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* PAGINATION */}
      <Pagination />
    </section>
  );
};

export default SubjectsList;
