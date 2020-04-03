const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const createError = require('http-errors');

var db_client = new Client({
    user: 'drone_default_user',
    password: 'qwerty12',
    host: 'localhost',
    port: '5432',
    database: 'drone_data'
})

db_client.connect();

router.get('/', function(req, res, next) {

    db_client.query('select * from base_score;', (error, results) => {
        if(error) {
            throw new createError.BadRequest();
        }
        else {
            res.status(200).json(results.rows)
            console.log('Drone database query complete');
        }
    });
});

module.exports = router;