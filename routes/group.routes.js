const express = require('express');
const router = express.Router();
const controller = require('../controllers/group.controller');

router.get('/', controller.getGroups);
router.post('/', controller.createGroup);
router.delete('/:id', controller.deleteGroup);

module.exports = router;
