var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const doctorRouter = require('./routes/doctorsRoute');
const galleryRoute = require('./routes/galleryRoute');
const contactRoute = require('./routes/contactRoute');
const rangeRoute = require('./routes/rangeRoute');
const docDetailsRoute = require('./routes/docDetailsRoute');
const loginRoute = require('./routes/loginRoute');
const patientRoute = require('./routes/patientRoute');
const visitDetailsRoute = require('./routes/visitDetailsRoute');
const patientEditRoute = require('./routes/patientEditRoute');
const docRoute = require('./routes/docRoute');
const editVisitRoute = require('./routes/editVisitRoute');
const addNewVisitRoute = require('./routes/addNewVisitRoute');
const registerPatientRoute = require('./routes/registerPatientRoute');
const petFormRoute = require('./routes/petFormRoute');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/doctors', doctorRouter);
app.use('/pet-photos', galleryRoute);
app.use('/contact', contactRoute);
app.use('/range', rangeRoute);
app.use('/doc-details', docDetailsRoute);
app.use('/login', loginRoute);
app.use('/patient', patientRoute);
app.use('/visit-details', visitDetailsRoute);
app.use('/patient-edit', patientEditRoute);
app.use('/doc', docRoute);
app.use('/edit-visit', editVisitRoute);
app.use('/add-new-visit', addNewVisitRoute);
app.use('/register-new-patient', registerPatientRoute);
app.use('/pet-form', petFormRoute);

const docApiRouter = require('./routes/api/DoctorApiRoute');
app.use('/api/doctors', docApiRouter);

const ownApiRouter = require('./routes/api/OwnerApiRoute');
app.use('/api/owners', ownApiRouter);

const patApiRouter = require('./routes/api/PatientApiRoute');
app.use('/api/patients', patApiRouter);

const visApiRouter = require('./routes/api/VisitApiRoute');
const { Console } = require('console');
app.use('/api/visits', visApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error');
});

module.exports = app;
