const { sendRFQEmail } = require('../services/mailService');

const handleRFQSubmit = async (req, res, next) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      country,
      product,
      material,
      grade,
      size,
      quantity,
      standard,
      message,
      preferredContact,
    } = req.body;

    if (!name || !email || !product) {
      return res.status(400).json({
        success: false,
        error: 'Name, Email, and Target Product are required fields.',
      });
    }

    const attachment = req.file
      ? {
          filename: req.file.originalname,
          path: req.file.path,
        }
      : null;

    const rfqData = {
      name,
      company: company || 'N/A',
      email,
      phone: phone || 'N/A',
      country: country || 'N/A',
      product,
      material: material || 'N/A',
      grade: grade || 'N/A',
      size: size || 'N/A',
      quantity: quantity || 'N/A',
      standard: standard || 'N/A',
      message: message || 'N/A',
      preferredContact: preferredContact || 'Email',
      attachment,
    };

    const mailResult = await sendRFQEmail(rfqData);

    return res.status(200).json({
      success: true,
      message: 'Your Request for Quote (RFQ) has been received. Our sales engineering team will respond within 24 hours.',
      inquiryId: 'RFQ-' + Date.now().toString().slice(-6),
      data: mailResult,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleRFQSubmit };
