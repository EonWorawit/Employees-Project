var express = require('express');
var router = express.Router();
const Empolyees = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('calendar');
});

router.get('/addevent', function(req, res, next) {
    res.render('addevent');
});

module.exports = router;