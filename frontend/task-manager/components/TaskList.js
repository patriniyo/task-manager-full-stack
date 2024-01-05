"use client";

// Use regular React component instead of server component
import React, { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";

const getTasks = async () => {
  const tasksData = await fetch("http://localhost:5000/api/tasks");
  return tasksData.json();
};

const TaskList = ({triggerAlert}) => {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTasksData(data.tasks);
    };

    fetchData();
  }, [tasksData]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {tasksData.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          triggerAlert={triggerAlert}
        />
      ))}
    </div>
  );
};

export default TaskList;


