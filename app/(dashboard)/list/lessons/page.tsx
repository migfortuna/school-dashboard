import React from "react";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import ListActions from "@/app/components/ListActions";
import { lessonsData } from "@/app/lib/data";
import TableHeading from "@/app/components/TableHeading";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
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
    header: "Actions",
    accessor: "action",
  },
];

const LessonsList = () => {
  const renderRow = (lesson: Lesson) => {
    return (
      <tr
        key={lesson.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="font-semibold p-4">{lesson.subject}</td>
        <td>{lesson.class}</td>
        <td className="hidden md:table-cell">{lesson.teacher}</td>
        <ListActions actionImg="edit" />
      </tr>
    );
  };
  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Lessons" />
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </section>
  );
};

export default LessonsList;
