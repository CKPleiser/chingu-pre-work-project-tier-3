const Note = require('./../models/noteModel');
const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');

exports.getAllNotes = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.userId) filter = { user: req.params.userId };
  const notes = await Note.find(filter);

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes
    }
  });
});

exports.createNote = catchAsync(async (req, res, next) => {
  // Allow nested routes
  if (!req.body.user) req.body.user = req.user.id;
  const newNote = await Note.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      note: newNote
    }
  });
});
