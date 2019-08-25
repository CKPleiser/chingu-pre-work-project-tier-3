const Note = require('./../models/noteModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getAllNotes = catchAsync(async (req, res, next) => {
  const notes = await Note.find({ user: req.user });

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes
    }
  });
});

exports.getNote = catchAsync(async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  if (!note) return next(new AppError("Couldn't find a note like that", 404));

  if (req.user.id !== note.user.toString())
    return next(new AppError("This note doesn't belong to you. Sorry", 403));

  res.status(200).json({
    status: 'success',
    data: {
      note
    }
  });
});

exports.createNote = factory.createOne(Note);
exports.updateNote = factory.updateOne(Note);
exports.deleteNote = factory.deleteOne(Note);
