const model = require('../models/group.model');

exports.getGroups = (req, res) => {
  res.json(model.getGroups());
};

exports.createGroup = (req, res) => {
  const group = model.createGroup(req.body);
  res.status(201).json(group);
};

exports.deleteGroup = (req, res) => {
  model.deleteGroup(Number(req.params.id));
  res.status(204).end();
};
