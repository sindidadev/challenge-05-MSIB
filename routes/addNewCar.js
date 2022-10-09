//Code was written by Muhammad Sindida Hilmy
//Note: Semua keterangan ada di README.md

var express = require('express');
var router = express.Router();

/* GET addNewCar page. */
router.get('/addNewCar', function(req, res, next) {
  res.render('addNewCar', { title: 'Express' });
});

module.exports = router;