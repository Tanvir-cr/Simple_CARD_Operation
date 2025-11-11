const express = require('express');
const controller = require('./registration.controller');

const router = express.Router();

// POST /api/register
router.post('/', controller.register);

module.exports = router;
