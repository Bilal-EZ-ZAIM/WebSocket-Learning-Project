const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to display the login page
router.get('/login', authController.showLoginPage);

// Route to display the registration page
router.get('/register', authController.showRegisterPage);

// Route to handle login form submission
router.post('/login', authController.handleLogin);

module.exports = router;
