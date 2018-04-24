let express = require('express');
const Book = require('../classes/book');

module.exports = {
    readBook(req, res, next){
        console.log('book_controllers: readBook(req, res, next) was called');
        let kvk = new Book('Koning van Katoren', 'Jan Terlouw');
        res.status(200).json(kvk).end();
    },

    createBook(req, res, next){
        console.log('book_controllers: createBook(req, res, next) was called');
        res.status(200).end();
    },

    deleteBook(req, res, next){
        console.log('book_controllers: deleteBook(req, res, next) was called');
        res.status(200).end();
    },

    changeBook(req, res, next){
        console.log('book_controllers: changeBook(req, res, next) was called');
        res.status(200).end();
    }
};