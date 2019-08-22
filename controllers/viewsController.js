const Note = require('../models/noteModel');
const catchAsync = require('../utils/catchAsync');

exports.home = catchAsync(async (req, res) => {
  res.status(200).render('base', {
    title: 'HomePage'
  });
});

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get Note Data from Collection
  const notes = await Note.find({ user: req.user.id });

  // 2) Build Template

  // 3) Render that template using note data from 1
  res.status(200).render('overview', {
    title: 'My Notes',
    notes
  });
});

exports.getLoginForm = catchAsync(async (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
});

exports.getUpdateForm = catchAsync(async (req, res) => {
  const note = Note.findById(req.params.id);

  res.status(200).render('update', {
    title: 'Update Note',
    note
  });
});

exports.getRegistrationForm = catchAsync(async (req, res) => {
  res.status(200).render('register', {
    title: 'Register for free'
  });
});
