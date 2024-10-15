import React from "react";
import Image from "next/image";
import Link from "next/link";
import { role } from "../lib/data";

type TableHeaders = {
  header: string;
  accessor: string;
  className?: string;
}[];

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

const Table = ({
  columns,
  data,
}: {
  columns: TableHeaders;
  data: Teacher[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((teacher) => (
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
            <td className="hidden md:table-cell">
              {teacher.subjects.join(", ")}
            </td>
            <td className="hidden md:table-cell">
              {teacher.classes.join(", ")}
            </td>
            <td className="hidden lg:table-cell">{teacher.phone}</td>
            <td className="hidden lg:table-cell">{teacher.address}</td>
            <td>
              <div className="flex items-center">
                <Link
                  href={`/list/teachers/${teacher.id}`}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
                >
                  <Image src="/view.png" alt="" width={16} height={16} />
                </Link>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                  <Image src="/delete.png" alt="" width={16} height={16} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
