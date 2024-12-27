const express = require('express');
const router = express.Router();
const authController = require('../controller/authcontroller');

// POST route for user registration
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/update', authController.updateUser);
router.post('/delete', authController.deleteuser);

module.exports = router;
