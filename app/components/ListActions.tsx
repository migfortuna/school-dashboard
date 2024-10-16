import React from "react";
import Link from "next/link";
import Image from "next/image";
import { role } from "@/app/lib/data";

const ListActions = ({ linkTo }: { linkTo: string }) => {
  return (
    <td>
      <div className="flex items-center gap-2">
        <Link
          href={linkTo}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
        >
          <Image src="/view.png" alt="" width={16} height={16} />
        </Link>
        {role == "admin" && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            <Image src="/delete.png" alt="" width={16} height={16} />
          </button>
        )}
      </div>
    </td>
  );
};

export default ListActions;
