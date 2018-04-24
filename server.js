const express = require('express');
const app = express();
const Book = require('./classes/book');

let port = 3000;

app.get('/book', function(req, res){
    let kvk = new Book('Koning van Katoren', 'Jan Terlouw');
    res.send(kvk);
});

app.listen(port, function(){
   console.log('Server app is listening on port 3000');
});