// Require's modules //
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
// Routes //
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// Api Routes in locals //
const budgetApiRouter = require('./routes/api/budget')
// Express ejecution //
const app = express();
// Middlewares //
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
// Paths //
app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Api Path //
app.use('/api/budgets',budgetApiRouter);

module.exports = app;
