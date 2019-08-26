const Note = require('./../models/noteModel');
// const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

// Sets req.body to current user
exports.setUserId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getNote = factory.getOne(Note);
exports.getAllNotes = factory.getAll(Note);
exports.createNote = factory.createOne(Note);
exports.updateNote = factory.updateOne(Note);
exports.deleteNote = factory.deleteOne(Note);
