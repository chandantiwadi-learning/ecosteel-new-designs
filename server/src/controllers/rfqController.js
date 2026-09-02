const RFQ = require('../models/RFQ');
const { sendRFQEmail } = require('../services/mailService');

const handleRFQSubmit = async (req, res, next) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      product,
      message,
    } = req.body;

    if (!name || !email || !product) {
      return res.status(400).json({
        success: false,
        error: 'Name, Email, and Target Product are required fields.',
      });
    }

    // Save to MongoDB
    const newRFQ = new RFQ({
      name,
      company,
      email,
      phone,
      product,
      message
    });

    const savedRFQ = await newRFQ.save();

    // Optionally send email
    try {
      await sendRFQEmail({
        name,
        company: company || 'N/A',
        email,
        phone: phone || 'N/A',
        product,
        message: message || 'N/A',
      });
    } catch (mailError) {
      console.warn("Mail sending failed, but RFQ was saved.", mailError);
    }

    return res.status(200).json({
      success: true,
      message: 'Your Request for Quote (RFQ) has been received. Our sales engineering team will respond within 24 hours.',
      inquiryId: savedRFQ._id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleRFQSubmit };
