var express = require('express');
var router = express.Router();

const Calendars = require('../models/Calendar')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('noti');
});

router.post('/', function(req, res, next) {
    const { 
        subject, 
        location, 
        date,
        s_time,
        e_time,
        detail,
        latitude,
        longtitude,} = req.body;
    data = new Calendars ({
        subject, 
        location, 
        date,
        s_time,
        e_time,
        detail,
        latitude,
        longtitude,
    })
    Calendars.createAdddate(data, function(err,callback){
        if(err) console.log(err);
        res.redirect('/calendar');
      })
  });


    module.exports = router;