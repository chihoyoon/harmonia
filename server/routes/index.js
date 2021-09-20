const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    console.log('http://localhost:5000/api/');
    console.log(db.query('select * from book'))
    res.send({title: 'Booking Now!!'})
});

module.exports = router;