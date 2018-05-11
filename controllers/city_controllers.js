let express = require('express');
let db = require('../config/db');

module.exports = {
    readCity(req, res, next) {
        let query = {
            sql : 'SELECT * FROM `city` WHERE `id` = ?',
            values : [req.params.id],
            timeout : 2000
        };

        db.query(query, function(error, rows){
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(rows);
            }
        });
    }
};