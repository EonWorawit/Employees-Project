var express = require('express');
var router = express.Router();
const Empolyees = require('../models/User')

const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  Empolyees.gatAllData(function(err,empolyee){
    res.render('index', { title: 'Protoss', data: empolyee ,});
  })
});

module.exports = router;