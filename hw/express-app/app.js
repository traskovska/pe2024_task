const express = require("express");
const { validate } = require('./middleware')

const {
  getTasks,
  createTask,
  getTaskById,
} = require("./controllers/tasksController");

const app = express();
app.use(express.json());

app.get("/tasks", getTasks);

app.post("/tasks", validate.validateTask, createTask);

app.get("/tasks/:id", getTaskById);

module.exports = app;
