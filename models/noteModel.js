const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Your note must have a title'],
    trim: true,
    maxlength: [40, 'A note must have less or equal then 40 characters'],
    minlength: [5, 'A note must have less or equal then 5 characters']
  },
  body: {
    type: String,
    trim: true,
    required: [true, 'A note must have a body']
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
