const express = require('express');
const morgan = require('morgan');

const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));

app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/api/v1/notes', noteRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
