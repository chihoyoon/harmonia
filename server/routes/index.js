const express = require('express');
const db = require('../config/db');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
const passport = require('passport');
const { errorMonitor } = require('events');
    , LocalStrategy = require('passport-local').Strategy;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser('keyboard cat'));
router.use(session({secret: 'keyboard cat'}));
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser (function(email, done){
    done(null, user.email);
});

passport.deseriallizeUser (function(email, done) {
    let userinfo;
    let sql = 'SELECT * FROM user WHER email=?';
    db.query(sql, [email], function (err, result) {
        if (err) throw err;

        let json = JSON.stringify(result[0]);
        userinfo = JSON.parse(json);
        done(null, userinfo);
    })
});

passport.use(new LocalStrategy(
    function(email, password, done) {
        let sql = 'SELECT * FROM USER WHERE email=? AND password=?';
        db.query(sql, [email, password], function (err, result) {
            if(err) throw err;

            if(result.length === 0) {
                return done(null, false, { message: 'Incorrect email.'});
            } else {
                let json = JSON.stringify(result[0]);
                let userinfo = JSON.parse(json);
                return done(null, userinfo);
            }
        })        
    }
));

router.get('/', (req, res) => {
    console.log('http://localhost:5000/api/');
    res.send({title: 'Book Now!!'})
});

// router.get('/login', (req, res) => {
//     let userId = '';
//     if (req.cookies['loginId'] ! == undefined){
//         userId = req.cookies['rememberId']; 
//     }
//     res.render('login', {userId: userId})
// });

router.get('/login', (req, res) => {
    const email = req.query.email
    const password = req.query.password

    const sql1 = 'SELECT COUNT(*) AS result FROM user WHERE email = ?'
    db.query(sql1, email, (err, data) => {
        if(!err) {
            if(data[0].result < 1) {
                res.send({'msg': 'Could not find your email'})
            } else {
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user WHERE email = ? AND password = ?) 
                                    WHEN '0' THEN NULL 
                                    ELSE (SELECT email FROM user WHERE email = ? AND password = ?) 
                                END AS email
                                , CASE (SELECT COUNT(*) FROM user WHERE email = ? AND password = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT password FROM user WHERE email = ? AND password = ?)
                                END AS password`;
                console.log(sql2);
                const params = [email, password, email, password, email, password, email, password]
                db.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});

router.post('/login', (req, res) => {
    passport.authenticate('local', { successRedirect: '/booking',
                                     failureRedirect: '/login',
                                     failureFlash: true})
;
})

router.get('/signup', (req, res) => {
    res.send({title: 'login'});
})


module.exports = router;