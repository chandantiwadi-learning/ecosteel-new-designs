const { sendContactEmail } = require('../services/mailService');

const handleContactSubmit = async (req, res, next) => {
  try {
    const { name, email, phone, message, subject } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const result = await sendContactEmail({ name, email, phone, message, subject });
    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been received successfully. We will contact you shortly.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleContactSubmit };
