const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { handleRFQSubmit } = require('../controllers/rfqController');

const router = express.Router();

router.post('/rfq', upload.single('file'), handleRFQSubmit);

module.exports = router;
