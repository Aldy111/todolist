const db = require('../data/db');

function createTag({ name }) {
  const newTag = {
    id: Date.now(),
    name,
  };
  db.tags.push(newTag);
  return newTag;
}

function getTags() {
  return db.tags;
}

function deleteTag(id) {
  db.tags = db.tags.filter(tag => tag.id !== id);
}

module.exports = { createTag, getTags, deleteTag };
