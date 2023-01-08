var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const Empolyees = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', async function(req, res, next) {
    const { username, password } = req.body;
    const user = await Empolyees.findOne({
        username
    });
    if (user) {
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (isCorrect) {
            req.session.user=user;
            if(user.isAdmin) {
                return res.render('admin');
            } else {
                return res.render('index');
            }
        } else {
            return res.render('login', { message: 'Username or Password incorrect' });
        }
    } else {
        return res.render('login', { message: 'Username does not exist.' });
    }
    
});


  module.exports = router;