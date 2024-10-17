import React from "react";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import { examsData } from "@/app/lib/data";
import TableHeading from "@/app/components/TableHeading";

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
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
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  //   {
  //     header: "Actions",
  //     accessor: "action",
  //   },
];

const ExamsList = () => {
  const renderRow = (exam: Exam) => (
    <tr
      key={exam.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{exam.subject}</td>
      <td>{exam.class}</td>
      <td className="hidden md:table-cell">{exam.teacher}</td>
      <td className="hidden md:table-cell">{exam.date}</td>
      {/* <td>
           <div className="flex items-center gap-2">
             {role === "admin" ||
               (role === "teacher" && (
                 <>
                   <FormModal table="exam" type="update" data={item} />
                   <FormModal table="exam" type="delete" id={item.id} />
                 </>
               ))}
           </div>
         </td> */}
    </tr>
  );
  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Exams" />
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      <Pagination />
    </section>
  );
};

export default ExamsList;
