const express = require('express');
const router = express.Router();
const { createInquiry } = require('../controllers/inquiryController');

// Official Inquiry Submission Endpoint
router.post('/inquiries', createInquiry);

// Backwards compatibility routes for any existing frontend forms
router.post('/contact', createInquiry);
router.post('/rfq', createInquiry);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Eco Steel Engineering B2B Inquiry Service'
  });
});

module.exports = router;
