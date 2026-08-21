const nodemailer = require('nodemailer');
const config = require('../config/env');

const sendContactEmail = async ({ name, email, phone, message, subject }) => {
  if (!config.smtp.user || !config.smtp.pass) {
    console.log('[Mail Service] SMTP credentials not configured. Simulating mail send:');
    console.log({ name, email, phone, message, subject });
    return { success: true, simulated: true };
  }

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.port === 465,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: config.smtp.receiver,
    subject: subject || `EcoSteel Website Contact Request from ${name}`,
    html: `
      <h2>New Contact Request - EcoSteel Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
};

const sendRFQEmail = async (rfq) => {
  if (!config.smtp.user || !config.smtp.pass) {
    console.log('[Mail Service] SMTP credentials not configured. Simulating RFQ send:');
    console.log(rfq);
    return { success: true, simulated: true };
  }

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.port === 465,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  const attachments = rfq.attachment
    ? [{ filename: rfq.attachment.filename, path: rfq.attachment.path }]
    : [];

  const mailOptions = {
    from: `"${rfq.name}" <${rfq.email}>`,
    to: config.smtp.receiver,
    subject: `[URGENT RFQ] Quote Request for ${rfq.product} (${rfq.company})`,
    html: `
      <h2>EcoSteel Commercial RFQ Submission</h2>
      <hr />
      <h3>Contact Information</h3>
      <p><strong>Full Name:</strong> ${rfq.name}</p>
      <p><strong>Company:</strong> ${rfq.company}</p>
      <p><strong>Email:</strong> ${rfq.email}</p>
      <p><strong>Phone:</strong> ${rfq.phone}</p>
      <p><strong>Country:</strong> ${rfq.country}</p>
      <p><strong>Preferred Contact Method:</strong> ${rfq.preferredContact}</p>

      <h3>Product Requirements</h3>
      <p><strong>Product Category:</strong> ${rfq.product}</p>
      <p><strong>Material Alloy:</strong> ${rfq.material}</p>
      <p><strong>Grade:</strong> ${rfq.grade}</p>
      <p><strong>Size / Schedule:</strong> ${rfq.size}</p>
      <p><strong>Quantity:</strong> ${rfq.quantity}</p>
      <p><strong>Required Standard:</strong> ${rfq.standard}</p>

      <h3>Additional Specifications</h3>
      <p>${rfq.message}</p>
    `,
    attachments,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
};

module.exports = { sendContactEmail, sendRFQEmail };
