const express = require('express');
const router = express.Router();

// Import controllers
const eventsController = require('../controllers/eventsController');

router.get('/', eventsController.homePage);

module.exports = router;