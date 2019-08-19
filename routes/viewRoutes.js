const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewsController.home);
router.get('/overview', authController.protect, viewsController.getOverview);
router.get('/login', viewsController.login);

module.exports = router;
