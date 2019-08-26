const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne(req.params.id);

    if (!doc) return new AppError("Couldn't find anything like that", 404);

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find(req.body);

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        docs
      }
    });
  });

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    return res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    if (!req.body.user) req.body.user = req.user.id;
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    if (!req.body.user) req.body.user = req.user.id;
    const doc = await Model.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });
