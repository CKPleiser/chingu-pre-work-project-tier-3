const Note = require('../models/noteModel');
const catchAsync = require('../utils/catchAsync');

exports.home = catchAsync(async (req, res) => {
  res.status(200).render('base', {
    title: 'HomePage'
  });
});

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get Note Data from Collection
  const notes = await Note.find();

  // 2) Build Template

  // 3) Render that template using note data from 1
  res.status(200).render('overview', {
    title: 'My Notes',
    notes
  });
});

exports.login = catchAsync(async (req, res) => {
  res.status(200).render('login');
});
