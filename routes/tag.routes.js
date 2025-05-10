const express = require('express');
const router = express.Router();
const controller = require('../controllers/tag.controller');

router.get('/', controller.getTags);
router.post('/', controller.createTag);
router.delete('/:id', controller.deleteTag);

module.exports = router;
