import React from "react";
import SearchBar from "./SearchBar";
import ListButtons from "./ListButtons";

const TableHeading = ({ headerText }: { headerText: string }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="hidden md:block text-lg font-semibold">{headerText}</h1>
      <div className="max-md:flex-1 md:flex gap-4">
        <SearchBar flexClass="flex" />
        <ListButtons />
      </div>
    </div>
  );
};

export default TableHeading;
