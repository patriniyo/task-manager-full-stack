'use client';
import React from "react";

const CreateTaskModal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-8 shadow-md w-96">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Create Task</h2>
          <button
            className="text-gray-800 hover:text-black"
            onClick={() => {
              // Call closeModal with true to close the modal
              closeModal(true);
            }}
          >
            x
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="text-gray-600 block mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border focus:border-blue-500 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="border focus:border-blue-500 p-2 w-full rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 block mb-1" htmlFor="dueDate">
              Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="border focus:border-blue-500 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label
              className="text-gray-600 inline-block mr-2"
              htmlFor="completed"
            >
              Completed
            </label>
            <input type="checkbox" id="completed" name="completed" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md float-right"
          >
            <span className="mr-2">+</span> Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
