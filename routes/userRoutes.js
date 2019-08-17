const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const noteRouter = require('./../routes/noteRoutes');

const router = express.Router();

// POST /user/1212ea/notes
// GET /user/1212ea/notes
// GET /user/1212ea/notes/9812dds

router.use('/:userId/notes', noteRouter);

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(authController.protect, userController.getAllUsers)
  .post(userController.createUser);

router.route('/:id').get(authController.protect, userController.getUser);

module.exports = router;
