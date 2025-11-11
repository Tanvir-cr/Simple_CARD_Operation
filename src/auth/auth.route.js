const express = require('express');
const controller = require('./auth.controller');

const router = express.Router();

// POST /api/auth/login
router.post('/login', controller.login);

module.exports = router;
