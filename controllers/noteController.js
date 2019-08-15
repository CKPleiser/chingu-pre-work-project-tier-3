const Note = require('./../models/noteModel');

exports.getAllNotes = async (req, res, next) => {
  const notes = await Note.find({});

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes
    }
  });
};

exports.createNote = async (req, res, next) => {
  const newNote = await Note.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      note: newNote
    }
  });
};
