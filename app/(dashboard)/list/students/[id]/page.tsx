import React from "react";

const StudentPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <p>StudentPage</p>
      <p>ID: {params.id}</p>
    </div>
  );
};

export default StudentPage;
