const express = require('express');
const db = require('../config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
const flash = require('connect-flash');
const cors = require('cors');
const path = require('path');

const index = path.resolve(__dirname, '../../public/index.html');

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser('keyboard cat'));
router.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true
}));
router.use(flash());


router.get('/book', (req, res) => {
    console.log('book');
    res.send({title: 'book'});
});


router.post('/book', (req, res, next) => {    
    let date = req.body.date;
    let time = req.body.time;    
    let email = req.body.email;

    let sql = 'insert into book(email, date, time) values(?,?,?)';

    db.query(sql, [email, date, time], (err, book) => {
        if (err) { return next(err); }
        else { return res.send('You succeeded in booking'); }                
    });
});


router.get('/signup', (req, res) => {
    console.log('signup');
    res.send({title: 'signup'});
});


router.post('/signup', function (req, res, next) {    
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;      

    let sql = 'select * from user where email=?';

    db.query(sql, [email], (err, results) => {        
        if (err) { return next(err); }
        if (results.length) { return res.redirect('/signup'); } 
        else {
            let sql = 'insert into user(email, password, name) values(?,?,?)';
            
            db.query(sql, [email, password, name], (err, user) => {
                if (err) { return next(err); }
                else { return res.redirect('/api/login'); }                
            });
        }
    });
});


router.get('/login', (req, res) => {
    console.log('login');
    res.send({title: 'login'});
});


router.post('/login', function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    let sql = 'select * from user where email=? and password=?';

    db.query(sql, [email, password], (err, result) => {
        if (err) { return next(err); }
        if (result.length) { 
            return res.redirect('/api/book');             
        } else { return res.json('Email or password is not correct'); }
    });
});


router.get('/book', (req, res) => {
    console.log('book now');
    res.send({title: 'book now'});
});


router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});


router.get("*", (req,res) => {
    res.sendFile(index);
});



module.exports = router;