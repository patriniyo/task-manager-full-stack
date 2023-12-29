import React from "react";
import Tasktitle from "@/components/Tasktitle";
import Tasks from "@/components/Tasks"; // Make sure to import the Tasks component

const AllTasksPage = () => {
  return (
    <>
      <Tasktitle title="All Tasks" />
      <Tasks />
    </>
  );
};

export default AllTasksPage;
