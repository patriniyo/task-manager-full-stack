"use client";

import { FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import TaskModal from "./TaskModal";

const TaskCard = ({
  id,
  title,
  description,
  completed,
}) => {
 
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const buttonBackground = completed
    ? "bg-blue-500"
    : "bg-red-500";
  const buttonText = completed
    ? "Completed"
    : "Uncompleted";
  const taskId = id;

  const handleUpdate =()=> {
   openModal();
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/${taskId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Handle successful deletion (e.g., refresh task list)
        console.log(
          `Task with ID ${taskId} deleted successfully`
        );
      } else {
        console.error(
          `Failed to delete task with ID ${taskId}: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(
        `Error deleting task with ID ${taskId}: ${error.message}`
      );
    }
  };

  return (
    <>
      {isModalOpen && (
        <TaskModal
          closeModal={closeModal}
          taskId={taskId}
        />
      )}
      <div className="max-w-md bg-gray-200 p-4 rounded-md shadow-md">
        <h3 className="text-gray-800 font-bold text-lg mb-2">
          {title}
        </h3>
        <p className="text-gray-700">
          {description}
        </p>
        <div className="flex items-center mt-4">
          <div className="mr-auto">
            <button
              className={`${buttonBackground} text-white px-4 py-2 rounded-md`}
            >
              {buttonText}
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="text-gray-700 mr-2"
              onClick={handleUpdate}
            >
              <FaEdit />
            </button>
            <button
              className="text-gray-700"
              onClick={handleDelete}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
