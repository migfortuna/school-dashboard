import React from "react";
import TableHeading from "@/app/components/TableHeading";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import ListActions from "@/app/components/ListActions";
import { announcementsData } from "@/app/lib/data";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementsList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <ListActions actionImg="edit" />
    </tr>
  );
  return (
    <section className="p-4 flex-1">
      <TableHeading headerText="All Announcements" />
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      <Pagination />
    </section>
  );
};

export default AnnouncementsList;
