const express = require('express');
const { handleContactSubmit } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact', handleContactSubmit);

module.exports = router;
