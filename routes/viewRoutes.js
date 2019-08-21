const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewsController.home);
router.get('/overview', authController.protect, viewsController.getOverview);
router.get('/login', viewsController.getLoginForm);
router.get('/register', viewsController.getRegistrationForm);

module.exports = router;
