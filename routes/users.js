//Code was written by Muhammad Sindida Hilmy
//Note : Semua keterangan ada di README.md

//Latihan

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;