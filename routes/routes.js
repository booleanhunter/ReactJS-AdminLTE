var express = require('express');
var router = express.Router();

//Setting up an event listener for GET request to '/'
router.get('/', function (req, res) {
  console.log('request to / received');
  res.render('dashboard.html');
});

router.get('/starter.html', function (req, res) {
  res.render('starter.html');
});

router.get('/index.html', function (req, res) {
  res.render('index.html');
});

router.get('/index2.html', function (req, res) {
  res.render('index2.html');
});

router.get('/widgets.html', function (req, res) {
  res.render('widgets.html');
});

router.get('/buttons.html', function (req, res) {
  res.render('buttons.html');
});

router.get('/UI/general.html', function (req, res) {
  res.render('general.html');
});

router.get('/timeline.html', function (req, res) {
  res.render('timeline.html');
});

module.exports = router;