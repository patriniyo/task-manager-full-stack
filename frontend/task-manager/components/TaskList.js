import React from "react";
import TaskCard from "@/components/TaskCard";

async function getTasks (){
    const tasksData = await fetch('http://localhost:5000/api/tasks');

    return tasksData.json();
}

 export default async function TaskList () {
    const tasksData = await getTasks();
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {tasksData.tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} description={task.description} completed={task.completed} />
      ))}
    </div>
  );
};

