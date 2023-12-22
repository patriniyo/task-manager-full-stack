// taskRoutes.js
const express = require("express");
const {
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
  getAllTasks
} = require("../controllers/taskController");


const router = express.Router();

// GET all tasks
router.get("/", getAllTasks);

// GET a single task
router.get("/:id", getTaskById);

// POST a new task
router.post("/", createTask);

// DELETE a task
router.delete("/:id", deleteTask);

// UPDATE a task
router.patch("/:id", updateTask);

module.exports = router;
