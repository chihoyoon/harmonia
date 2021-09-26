const express = require('express');
const db = require('../config/db');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser('keyboard cat'));
router.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());
router.use(flash());

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    let sql = 'select * from user where email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return done(err);
        if (results.length) {
            return done(null, false, {
                message: 'your email is already used'
            });
        } else {
            let sql = 'insert into user(email, password) values(?,?)';
            db.query(sql, [email, password], (err, results) => {
                if (err) return done(err);
                return done(null, {
                    'email': email,
                    'id': results.insertId
                })
            });
        }
    })
}))

router.post('/signup', passport.authenticate ('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signup', (req, res, next) => {
    let msg;
    let errMsg = req.flash('error');
    if (errMsg) {
        msg = errMsg;
    }
    res.render('signup', {
        title: 'join',
        message: msg
    });
});


passport.serializeUser ((user, done) => {
    console.log('passport session save: ', user.id);
    done(null, user.id);
});

passport.deserializeUser ((id, done) => {
    console.log('passport session get id: ', id)
    done(null, id);
    
    // let userinfo;
    // let sql = 'SELECT * FROM user WHER email=?';
    // db.query(sql, [id], function (err, result) {
    //     if (err) throw err;

    //     let json = JSON.stringify(result[0]);
    //     userinfo = JSON.parse(json);
    //     done(null, userinfo);
    // })
});

router.get('/', (req, res, next) => {
    let id = req.user;
    res.render('index', {
        title: 'index',
        id
    });
});

router.get('/login', (req, res, next) => {
    let msg;
    let errMsg = req.flash('error');
    if (errMsg) {
        msg = errMsg;
    }
    res.render('login', {
        title: 'login',
        message: msg
    });
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},  function(req, email, password, done) {
    console.log(req);
    let sql = 'select * from user where email=? and password=?';
    db.query(sql, [email, password], function (err, result) {
        if(err) return done(err);
        if(result.length) {
            return done(null, {
                id: email
            });
        } else {
            return done(null, false, {
                message: 'Email or password is not correct.'
            })
        }
    })
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/', (req, res) => {
    console.log('http://localhost:5000/api/');
    res.send({title: 'Book Now!!'})
});


// router.get('/login', (req, res) => {
//     const email = req.query.email
//     const password = req.query.password

//     const sql1 = 'SELECT COUNT(*) AS result FROM user WHERE email = ?'
//     db.query(sql1, email, (err, data) => {
//         if(!err) {
//             if(data[0].result < 1) {
//                 res.send({'msg': 'Could not find your email'})
//             } else {
//                 const sql2 = `SELECT 
//                                 CASE (SELECT COUNT(*) FROM user WHERE email = ? AND password = ?) 
//                                     WHEN '0' THEN NULL 
//                                     ELSE (SELECT email FROM user WHERE email = ? AND password = ?) 
//                                 END AS email
//                                 , CASE (SELECT COUNT(*) FROM user WHERE email = ? AND password = ?)
//                                     WHEN '0' THEN NULL
//                                     ELSE (SELECT password FROM user WHERE email = ? AND password = ?)
//                                 END AS password`;
//                 console.log(sql2);
//                 const params = [email, password, email, password, email, password, email, password]
//                 db.query(sql2, params, (err, data) => {
//                     if(!err) {
//                         res.send(data[0])
//                     } else {
//                         res.send(err)
//                     }
//                 })
//             }
//         } else {
//             res.send(err)
//         }
//     })
// });

// router.post('/login', (req, res) => {
//     passport.authenticate('local', { successRedirect: '/booking',
//                                      failureRedirect: '/login',
//                                      failureFlash: true})
// ;
// })


module.exports = router;