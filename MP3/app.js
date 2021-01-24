var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginRoute');
var doctorsRouter = require('./routes/doctorsRoute');
var patientsRouter = require('./routes/patientsRoute');
var visitsRouter = require('./routes/visitsRoute');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });

const docApiRouter = require('./routes/api/DoctorApiRoute');
const patApiRouter = require('./routes/api/PatientApiRoute');
const visApiRouter = require('./routes/api/VisitApiRoute');

const session = require('express-session');
const authUtils = require('./util/authUtils');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if(!res.locals.loginError) {
      res.locals.loginError = undefined;
  }
  next();
});




app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/doctors',  doctorsRouter);
app.use('/patients',  patientsRouter);
app.use('/visits', authUtils.permitAuthenticatedUser, visitsRouter);

app.use('/api/doctors', docApiRouter);
app.use('/api/patients', patApiRouter);
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
console.log(res.locals.message);
console.log(res.locals.error);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
