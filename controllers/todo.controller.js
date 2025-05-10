const model = require('../models/todo.model');

exports.getTodos = (req, res) => {
  res.json(model.getTodos());
};

exports.createTodo = (req, res) => {
  const todo = model.createTodo(req.body);
  res.status(201).json(todo);
};

exports.updateTodo = (req, res) => {
  const updated = model.updateTodo(Number(req.params.id), req.body);
  res.json(updated);
};

exports.deleteTodo = (req, res) => {
  model.deleteTodo(Number(req.params.id));
  res.status(204).end();
};
