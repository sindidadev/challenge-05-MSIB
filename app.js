//Code was written by Muhammad Sindida Hilmy
//Note: Semua keterangan ada di README.md

require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');
var addNewCarRouter = require('./routes/addNewCar');
var updateCarInformationRouter = require('./routes/updateCarInformation');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);
app.use('/addNewCar', addNewCarRouter);
app.use('/updateCarInformation', updateCarInformationRouter);

module.exports = app;