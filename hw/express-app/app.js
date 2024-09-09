const express = require("express");

const {
  getTasks,
  createTask,
  getTaskById,
} = require("./controllers/tasksController");

const app = express();
app.use(express.json());

app.get("/tasks", getTasks);
app.post("/tasks", createTask);
app.get("/tasks/:id", getTaskById);

module.exports = app;
