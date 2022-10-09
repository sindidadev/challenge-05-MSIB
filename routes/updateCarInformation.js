//Code was written by Muhammad Sindida Hilmy
//Note: Semua keterangan ada di README.md

var express = require('express');
var router = express.Router();

/* GET updateCarInformation page. */
router.get('/updateCarInformation', function(req, res, next) {
  res.render('updateCarInformation', { title: 'Express' });
});

module.exports = router;