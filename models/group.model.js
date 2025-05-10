const db = require('../data/db');

function createGroup({ name, color }) {
  const newGroup = {
    id: Date.now(),
    name,
    color: color || '#cccccc',
  };
  db.groups.push(newGroup);
  return newGroup;
}

function getGroups() {
  return db.groups;
}

function deleteGroup(id) {
  db.groups = db.groups.filter(group => group.id !== id);
}

module.exports = { createGroup, getGroups, deleteGroup };