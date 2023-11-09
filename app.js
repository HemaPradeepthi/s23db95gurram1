var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ElectronicsRouter = require('./routes/electronics');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
var Electronics = require('./models/electronics');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Electronics', ElectronicsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter)

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//   console.log('Connection to DB succeeded');
// });



mongoose.connect('mongodb+srv://ghpradeepthi24:Chinni24@cluster0.wajbyue.mongodb.net/?retryWrites=true&w=majority').

then(() => {

    console.log("DB connected");
    async function recreateDB() {
      // Delete everything
      await Electronics.deleteMany();
      //one instance
      let instance1 = new Electronics({ Gadget:"Laptop", Price: 50000, Storage:64 });
      let instance2 = new Electronics({ Gadget:"Mobile", Price: 20000, Storage:128 });
      let instance3 = new Electronics({ Gadget:"ipad", Price: 100000, Storage:256 });
      instance1.save().then(doc => {
        console.log("First object saved")
      }
      ).catch(err => {
        console.error(err)
      });
      instance2.save().then(doc => {
        console.log("Second object saved")
      }
      ).catch(err => {
        console.error(err)
      });
      instance3.save().then(doc => {
        console.log("Third object saved")
      }
      ).catch(err => {
        console.error(err)
      });
  
    }
    async function recreateDB() {
      // Delete everything
      await Electronics.deleteMany();
      //one instance
      let instance1 = new Electronics({ Gadget:"Laptop", Price: 50000, Storage:64 });
      let instance2 = new Electronics({ Gadget:"Mobile", Price: 20000, Storage:128 });
      let instance3 = new Electronics({ Gadget:"ipad", Price: 100000, Storage:256  });
      instance1.save().then(doc => {
        console.log("First object saved")
      }
      ).catch(err => {
        console.error(err)
      });
      instance2.save().then(doc => {
        console.log("Second object saved")
      }
      ).catch(err => {
        console.error(err)
      });
      instance3.save().then(doc => {
        console.log("Third object saved")
      }
      ).catch(err => {
        console.error(err)
      });
  
    }
    let reseed = true;
  if (reseed) { recreateDB(); }
})

.catch((err) => console.log(err.message))
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

