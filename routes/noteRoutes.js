const express = require('express');
const authController = require('./../controllers/authController');
const noteController = require('./../controllers/noteController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(authController.protect, noteController.getAllNotes)
  .post(authController.protect, noteController.createNote);

router
  .route('/:id')
  .delete(authController.protect, noteController.deleteNote)
  .patch(authController.protect, noteController.updateNote);

module.exports = router;
