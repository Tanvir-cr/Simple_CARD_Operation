const express = require('express');
const controller = require('./card.controller');
const auth = require('../middleware/UserCheck');

const router = express.Router();

// All routes below are protected
router.use(auth);

router.post('/', controller.create);
router.get('/', controller.list);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
