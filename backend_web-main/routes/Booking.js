const express = require('express');
const router = express.Router();
const { bookMajor } = require('../controller/bookingController');

// Removed `auth` middleware
router.post('/booking', bookMajor);

module.exports = router;
