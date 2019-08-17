// const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  createSendToken(newUser, 201, res);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Check if E-Mail and Password Exist
  if (!email || !password) {
    return next(); // Implement App Error here
  }
  // 2. Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next();
  }

  // 3. If everything is okay, send token to client
  createSendToken(user, 200, res);
};

exports.protect = async (req, res, next) => {
  // 1. Getting the tokenand check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.spliy(' ')[1];
  }

  if (!token) {
    return next();
  }

  // 2. Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3. Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next();
  }

  // 4. Grant Access to proectected route
  req.user = currentUser;
  next();
};
