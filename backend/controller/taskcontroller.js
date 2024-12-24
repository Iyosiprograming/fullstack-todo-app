const express = require('express');
const Task = require('../model/taskmodel');

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create task
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({
            title,
            description,
            date: new Date(),
            user: req.session.user._id,
        });
        await task.save();
        res.status(201).json({ message: 'Task created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete task by ID
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export functions to be used in the router
module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
};
