const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Task Routes
// POST - Create a new task
router.post("/", createTask);

// GET - Retrieve all tasks
router.get("/", getAllTasks);

// GET - Retrieve a single task by ID
router.get("/:id", getTaskById);

// PUT - Update a task
router.put("/:id", updateTask);

// DELETE - Delete a task
router.delete("/:id", deleteTask);

module.exports = router;
