const express = require('express');
const authController = require('../controllers/AuthController');

const router = new express.Router();

// http://localhost:3001/api/login en méthode GET
// json avec une key "username" : username et "password" : password  ou
// form-encoded avec une key "username" : username et "password" : password
router.post('/login', authController.login);

module.exports = router;
