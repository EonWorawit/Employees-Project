var express = require('express');
var router = express.Router();
const Empolyees = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('empolyee');
});

module.exports = router;