const express = require('express');
const authController = require('../controllers/AuthController');

const router = new express.Router();

router.post('/login', authController.login);

module.exports = router;
