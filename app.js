var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var empresaRouter = require('./routes/empresa');
var membresiaRouter = require('./routes/membresia');
var miembroRouter = require('./routes/miembro');
var profesionRouter = require('./routes/profesion');
var publicacionRouter = require('./routes/publicacion');
var sesionRouter = require('./routes/sesion');
var solicitudRouter = require('./routes/solicitud');
var usuarioRouter = require('./routes/usuario');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//enable CROS
app.use(cors());

//Rutas
app.use('/', indexRouter);
app.use('/empresa', empresaRouter);
app.use('/membresia', membresiaRouter);
app.use('/miembro', miembroRouter);
app.use('/profesion', profesionRouter);
app.use('/publicacion', publicacionRouter)
app.use('/sesion', sesionRouter);
app.use('/solicitud', solicitudRouter);
app.use('/usuario', usuarioRouter);


//conexion a MongoDB

mongoose.connect('mongodb://localhost:27017/prueba', (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log('Conexion a la base de datos establecida');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
