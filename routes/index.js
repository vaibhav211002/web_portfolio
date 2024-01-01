var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index');
});


app.get('/myprojects', function(req, res, next) {
  res.render('myprojects');
});


app.get('/about', function(req, res, next) {
  res.render('about');
});


module.exports = app;
