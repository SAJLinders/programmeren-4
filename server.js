const express = require('express');
const app = express();
const Book = require('./classes/book');
const book_routes = require('./routes/book_routes');
const city_routes = require('./routes/city_routes');

let port = process.env.PORT || 3000;
app.use('/', book_routes);
app.use('/', city_routes);

app.use('*', function(req, res, next){
    console.log('server.js: The super endpoint was called');
    let message = {
        'error: ' : 'deze endpoint bestaat niet'
    };
    next(message);
});

app.listen(port, function(){
   console.log('Server app is listening on port ' + port);
});

app.use((err, req, res, next) => {
    console.log('server.js: The catch-all error handler was called');
    console.log('server.js: ' + err);
    res.status(404).json(err).end();
});