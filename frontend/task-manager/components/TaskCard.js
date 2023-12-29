import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({ title, description }) => {
  return (
    <div className="max-w-md bg-gray-200 p-4 rounded-md shadow-md">
      <h3 className="text-gray-800 font-bold text-lg mb-2">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
      <div className="flex items-center mt-4">
        <div className="mr-auto">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Completed
          </button>
        </div>
        <div className="flex items-center">
          <button className="text-gray-700 mr-2">
            <FaEdit />
          </button>
          <button className="text-gray-700">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
