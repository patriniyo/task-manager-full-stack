import React from "react";

const Tasktitle = ({ title }) => {
  return (
    <div className="flex justify-between items-center rounded-t-md">
      <h2 className="text-gray-700 font-bold relative mb-4 pl-4">
        {title}
        <hr className="border-b-2 border-green-800 w-1/2 ml-0 mt-1" />
      </h2>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 border border-gray-300 shadow-md m-2">
          <button className="text-gray-700 font-bold">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasktitle;
