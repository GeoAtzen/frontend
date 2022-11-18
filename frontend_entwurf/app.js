var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var startRouter = require("./routes/start");
var ergebnisseiteRouter = require("./routes/ergebnisseite");
var anwendungsseiteRouter = require("./routes/anwendungsseite");
var impressumRouter = require("./routes/impressum");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", startRouter);
app.use("/ergebnisseite", ergebnisseiteRouter);
app.use("/anwendungsseite", anwendungsseiteRouter);
app.use("/impressum", impressumRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;