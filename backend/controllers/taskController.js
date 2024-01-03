// taskController.js
const {
  PrismaClient,
} = require("@prisma/client");

const prisma = new PrismaClient();

const createTask = async (req, res) => {
    console.log(req.body);
   
  try {
    const { userId, description, title, completed } =
      req.body;

    const task = await prisma.task.create({
      data: {
        userId: parseInt(userId),
        description,
        title,
        completed
      },
    });

    console.log("Created task:", task);
    res
      .status(201)
      .json({
        success: true,
        message: "Task created successfully",
        task,
      });
  } catch (error) {
    console.error("Error creating task:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to create task",
      });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    console.log("All tasks:", tasks);
    res
      .status(200)
      .json({ success: true, tasks });
  } catch (error) {
    console.error("Error getting tasks:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve tasks",
      });
  }
};

const getTaskById = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);

    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    console.log("Task by ID:", task);
    if (!task) {
      res
        .status(404)
        .json({
          success: false,
          message: "Task not found",
        });
      return;
    }

    res.status(200).json({ success: true, task });
  } catch (error) {
    console.error(
      "Error getting task by ID:",
      error
    );
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve task",
      });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const updatedData = req.body;

    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: updatedData,
    });

    console.log("Updated task:", updatedTask);
    if (!updatedTask) {
      res
        .status(404)
        .json({
          success: false,
          message: "Task not found",
        });
      return;
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Task updated successfully",
        updatedTask,
      });
  } catch (error) {
    console.error("Error updating task:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update task",
      });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    // console.log("Task ID :");
    // console.log(taskId);

    const deletedTask = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    console.log("Deleted task:", deletedTask);
    if (!deletedTask) {
      res
        .status(404)
        .json({
          success: false,
          message: "Task not found",
        });
      return;
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Task deleted successfully",
        deletedTask,
      });
  } catch (error) {
    console.error("Error deleting task:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete task",
      });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
