let express = require('express');
let router = express.Router();
let book_controllers = require('../controllers/book_controllers');

router.get('/api/book', book_controllers.readBook);
router.post('/api/book', book_controllers.createBook);

module.exports = router;
