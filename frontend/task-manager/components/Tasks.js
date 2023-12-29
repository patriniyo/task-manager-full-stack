import React from "react";
import TaskCard from "@/components/TaskCard";

const tasksData = [
  { id: 1, title: "Task 1", description: "Description for Task 1" },
  { id: 2, title: "Task 2", description: "Description for Task 2" },
  { id: 3, title: "Task 3", description: "Description for Task 3" },
  { id: 1, title: "Task 1", description: "Description for Task 1" },
  { id: 2, title: "Task 2", description: "Description for Task 2" },
  { id: 3, title: "Task 3", description: "Description for Task 3" }
  // Add more tasks as needed
];

const Tasks = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {tasksData.map((task) => (
        <TaskCard key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
};

export default Tasks;
