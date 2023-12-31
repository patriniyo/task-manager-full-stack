import React from "react";
import Tasktitle from "@/components/Tasktitle";
// import Tasks from "@/components/Tasks"; // Make sure to import the Tasks component
import TaskList from "@/components/TaskList";

const AllTasksPage = () => {
  return (
    <>
      <Tasktitle title="All Tasks" />
      <TaskList />
    </>
  );
};

export default AllTasksPage;
