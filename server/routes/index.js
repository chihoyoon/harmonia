const express = require('express');
const db = require('../config/db');
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
const flash = require('connect-flash');
const cors = require('cors');


router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser('keyboard cat'));
router.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());
router.use(flash());

// passport.use('local-signup', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// }, function (req, done) {
//     let email = req.body.email;
//     let password = req.body.password;
//     let name = req.body.name;    
//     let sql = 'select * from user where email=?';
//     db.query(sql, [email], (err, results) => {        
//         if (err) return done(err);
//         if (results.length) {
//             return done(null, false, {
//                 message: 'your email is already used'
//             });
//         } else {
//             let sql = 'insert into user(email, password, name) values(?,?,?)';
//             // db.query(sql, [email, password, name]);
//             // req.session.returnTo = req.originalUrl;
//             // res.redirect('/login');

//             db.query(sql, [email, password, name], (err, user) => {
//                 if (err) return done(err);
//                 return (user);
//             });
//         }
//     })
// }));

// router.get("auth/google/callback",
//         passport.authenticate('local-signup'),
//         (req, res) => {
//             res.redirect('api/login');
//         }
// );


// router.post('/signup', passport.authenticate ('local-signup', {
//     successRedirect: 'http:localhost:5000/api/login',
//     failureRedirect: '/',
//     failureFlash: true
// }));

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
            // db.query(sql, [email, password, name]);
            // req.session.returnTo = req.originalUrl;
            // res.redirect('/login');

            db.query(sql, [email, password, name], (err, user) => {
                if (err) return next(err);
                return res.redirect('http://localhost:5000/api/login');
            });
        }
    });
});

// router.get('/signup', (req, res, next) => {
//     let msg;
//     let errMsg = req.flash('error');
//     if (errMsg) {
//         msg = errMsg;
//     }
//     res.render('signup', {
//         title: 'signup',
//         message: msg
//     });
// });


passport.serializeUser ((user, done) => {
    console.log('passport session save: ', user.id);
    done(null, user.id);
})

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

router.get('/', (req, res) => {
        
    console.log('http://localhost:5000/api/');
    res.send({title: 'Book now'});
});

router.get('/login', (req, res) => {
    console.log('login');
    res.send({title: 'login'});
});

router.get('/signup', (req, res) => {
    console.log('signup');
    res.send({title: 'signup'});
});

// router.get('/login', (req, res, next) => {
//     let msg;
//     let errMsg = req.flash('error');
//     if (errMsg) {
//         msg = errMsg;
//     }
//     res.render('login', {
//         title: 'login',
//         message: msg
//     });
// });







// router.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }));

// passport.use('local-login', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// },  function(req, email, password, done) {
//     console.log(req);
//     let sql = 'select * from user where email=? and password=?';
//     db.query(sql, [email, password], function (err, result) {
//         if(err) return done(err);
//         if(result.length) {
//             return done(null, {
//                 id: email
//             });
//         } else {
//             return done(null, false, {
//                 message: 'Email or password is not correct.'
//             });
//         }
//     })
// }))

// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// })




module.exports = router;