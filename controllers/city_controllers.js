let express = require('express');
let db = require('../config/db');
const assert = require('assert');
let ApiError = require('../classes/api_error');

module.exports = {
    readCity(req, res, next) {
        try {
            assert(typeof (req.params.id) === 'string', 'Expected a string');
            assert(req.params.id.length < 6, 'Value mast be be smaller than 99999');
        } catch (e){
            const error = new ApiError(e.toString());
            res.status(422).json(error);
            return
        }

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