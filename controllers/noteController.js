const Note = require('./../models/noteModel');
const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getAllNotes = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.userId || req.body.user) filter = { user: req.user };
  const notes = await Note.find(filter);

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes
    }
  });
});

exports.createNote = factory.createOne(Note);
exports.deleteNote = factory.deleteOne(Note);
