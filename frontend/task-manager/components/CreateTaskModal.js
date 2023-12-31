"use client";

import React, { useState } from "react";
import Alert from "./Alert";

const CreateTaskModal = ({ closeModal }) => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [completed, setCompleted] =
    useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setShowAlertMessage] = useState("");
  const [alertSuccess, setShowAlertSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "completed":
        setCompleted(
          type === "checkbox" ? checked : value
        );
        break;
      default:
        break;
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    const taskData = {
      // setting user id default value of one. 
      // we intend to select the logged in user once 
      // the authenticatication feature is complete
      userId: 1,
      title,
      description,
      completed
    };
    console.log("Data to be sent");
    console.log(taskData);

    try {
      const response = await fetch(
        "http://localhost:5000/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(taskData),
        }
      );

      if (response.ok) {
        const responseData =
          await response.json();
        // Display succuess message
        setShowAlert(true);
        setShowAlertMessage(responseData.message);
        setShowAlertSuccess(true);
        console.log(
          "Task created successfully:",
          responseData
        );
      } else {
        console.error(
          "Failed to create task:",
          response.statusText
        );
        const responseData = await response.json();
        setShowAlert(true);
        setShowAlertMessage(responseData.message);
        setShowAlertSuccess(false);
        console.error("Failed to create task:", response.statusText);
      }
    } catch (error) {
      console.error(
        "Error creating task:",
        error.message
      );
    }

    //closeModal(true);
  };

  return (
    <>
    { showAlert && <Alert message={alertMessage} success={alertSuccess}/>}
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-8 shadow-md w-96">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">
            Create Task
          </h2>
          <button
            className="text-gray-800 hover:text-black"
            onClick={() => {
              closeModal(true);
            }}
          >
            x
          </button>
        </div>
        <form onSubmit={handleCreateTask}>
          <div className="mb-4">
            <label
              className="text-gray-600 block mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleInputChange}
              className="border focus:border-blue-500 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="text-gray-600 block mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleInputChange}
              rows="4"
              className="border focus:border-blue-500 p-2 w-full rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label
              className="text-gray-600 inline-block mr-2"
              htmlFor="completed"
            >
              Completed
            </label>
            <input
              type="checkbox"
              id="completed"
              name="completed"
              checked={completed}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md float-right"
          >
            <span className="mr-2">+</span> Create
            Task
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateTaskModal;
