//Code was written by Muhammad Sindida Hilmy
//Note: Semua keterangan ada di README.md

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;