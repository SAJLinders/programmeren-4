let express = require('express');
let router = express.Router();
let city_controller = require('../controllers/city_controllers');

router.get('/api/v1/city/:id', city_controller.readCity);

module.exports = router;