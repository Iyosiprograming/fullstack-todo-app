const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskcontroller');

// Use the controller functions as route handlers
router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
