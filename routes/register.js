var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const Empolyees = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
  const { 
    username, 
    password, 
    identityNo,
    jobPosition,
    position,
    firstName,
    lastName,
    phoneNo,
    email,
    address,
    moo,
    street,
    disdrict,
    ambhur,
    province,
    zipCode,} = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    const identityNoHash = bcrypt.hashSync(identityNo, 10);
  data = new Empolyees ({
    username,
    password : passwordHash,
    identityNo : identityNoHash,
    jobPosition,
    position,
    firstName,
    lastName,
    phoneNo,
    email,
    address,
    moo,
    street,
    disdrict,
    ambhur,
    province,
    zipCode,
  })
  Empolyees.createUser(data, function(err,callback){
    if(err) console.log(err);
    res.redirect('/login');
  })
});

  module.exports = router;