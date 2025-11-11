const express = require('express');
const controller = require('./user.controller');
const auth = require('../../middleware/UserCheck');

const router = express.Router();

// GET /api/user/profile
router.get('/profile', auth, controller.profile);

module.exports = router;
