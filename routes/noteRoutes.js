const express = require('express');
const authController = require('./../controllers/authController');
const noteController = require('./../controllers/noteController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(noteController.getAllNotes)
  .post(authController.protect, noteController.createNote);

router.route('/:id').delete(authController.protect, noteController.deleteNote);
module.exports = router;
