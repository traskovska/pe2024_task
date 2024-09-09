const { v4: uuidv4 } = require("uuid");

const tasks = [
  {
    id: uuidv4(),
    title: "Task1",
    isDone: false,
  },
  {
    id: "e1b7e4b0-bf70-402a-8783-6a55bb830329",
    title: "Task2",
    isDone: false,
  },
];

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  tasks.push({ ...body, id: uuidv4() });
  res.status(201).send(tasks[tasks.length - 1]);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const foundTask = tasks.find((t) => t.id === id);

  if (!foundTask) {
    return res.status(404).send("Task Not Found");
  }
  res.status(200).send(foundTask);
};
