const model = require('../models/tag.model');

exports.getTags = (req, res) => {
  res.json(model.getTags());
};

exports.createTag = (req, res) => {
  const tag = model.createTag(req.body);
  res.status(201).json(tag);
};

exports.deleteTag = (req, res) => {
  model.deleteTag(Number(req.params.id));
  res.status(204).end();
};
