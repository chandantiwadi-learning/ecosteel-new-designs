const { Resend } = require('resend');

// Initialize Resend client lazily or when API key is present
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[Resend Warning] RESEND_API_KEY is not defined in environment variables. Emails will not be dispatched.');
    return null;
  }
  return new Resend(apiKey);
};

/**
 * Send customer auto-response email acknowledging receipt
 */
const sendCustomerAutoReply = async (inquiry) => {
  const resend = getResendClient();
  if (!resend) return null;

  const fromEmail = process.env.FROM_EMAIL || 'Eco Steel Engineering <onboarding@resend.dev>';
  const recipient = inquiry.email;
  const customerName = inquiry.fullName || 'Valued Customer';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Confirmation - Eco Steel Engineering</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0; }
    .header { background: #0b1528; padding: 28px 32px; text-align: left; border-bottom: 3px solid #0284c7; }
    .header h1 { color: #ffffff; font-size: 20px; margin: 0; font-weight: 700; letter-spacing: 0.5px; }
    .header p { color: #94a3b8; font-size: 13px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 32px; line-height: 1.6; font-size: 15px; color: #334155; }
    .greeting { font-size: 16px; font-weight: 600; color: #0f172a; margin-bottom: 16px; }
    .box { background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 16px 20px; margin: 20px 0; border-radius: 0 6px 6px 0; }
    .footer { background: #f8fafc; padding: 24px 32px; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .footer p { margin: 4px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ECO STEEL ENGINEERING</h1>
      <p>Precision Industrial Piping & Engineered Solutions</p>
    </div>
    <div class="content">
      <div class="greeting">Dear ${customerName},</div>
      <p>Thank you for contacting <strong>Eco Steel Engineering</strong>.</p>
      <div class="box">
        <p style="margin: 0;">We have successfully received your inquiry and our commercial sales and engineering team will review your specifications.</p>
      </div>
      <p>One of our technical representatives will get back to you within <strong>24 hours</strong> with project pricing, technical data verification, or material test availability.</p>
      <p>Thank you for your interest in Eco Steel Engineering.</p>
      <br>
      <p style="margin-bottom: 0;">
        Regards,<br>
        <strong>Eco Steel Engineering Team</strong><br>
        <span style="color: #64748b; font-size: 13px;">Commercial & Technical Sales Desk</span>
      </p>
    </div>
    <div class="footer">
      <p><strong>Eco Steel Engineering</strong> | Mumbai, Maharashtra, India</p>
      <p>Specialists in Butt-Weld Fittings, High-Pressure Forged Fittings, Flanges, Fasteners & Special Alloys</p>
    </div>
  </div>
</body>
</html>
  `;

  return await resend.emails.send({
    from: fromEmail,
    to: [recipient],
    subject: 'Thank You for Contacting Eco Steel Engineering',
    html: html
  });
};

/**
 * Send internal notification email to Eco Steel sales & engineering team
 */
const sendTeamNotification = async (inquiry) => {
  const resend = getResendClient();
  if (!resend) return null;

  const fromEmail = process.env.FROM_EMAIL || 'Eco Steel Engineering <onboarding@resend.dev>';
  const teamEmail = process.env.TEAM_EMAIL || 'sales@ecosteels.com';
  const customerName = inquiry.fullName || 'Unknown Customer';

  const submissionDate = inquiry.createdAt
    ? new Date(inquiry.createdAt).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
      }) + ' IST'
    : new Date().toLocaleString();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #cbd5e1; }
    .header { background: #0f172a; padding: 20px 28px; border-bottom: 3px solid #38bdf8; }
    .header h2 { color: #ffffff; margin: 0; font-size: 18px; }
    .header span { color: #38bdf8; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 28px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 14px; }
    .table td { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; }
    .table td.label { font-weight: 600; width: 32%; color: #475569; background-color: #f8fafc; }
    .table td.value { color: #0f172a; }
    .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-top: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b; }
    .footer { background: #f8fafc; padding: 16px 28px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span>Eco Steel Engineering - B2B Lead</span>
      <h2>New Website Inquiry - ${customerName}</h2>
    </div>
    <div class="content">
      <p style="margin-top: 0; font-size: 14px; color: #475569;">A new inquiry has been submitted via the official Eco Steel website:</p>
      <table class="table">
        <tr>
          <td class="label">Customer Name</td>
          <td class="value"><strong>${customerName}</strong></td>
        </tr>
        <tr>
          <td class="label">Corporate Email</td>
          <td class="value"><a href="mailto:${inquiry.email}" style="color: #0284c7; text-decoration: none;">${inquiry.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / Mobile</td>
          <td class="value">${inquiry.phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Company</td>
          <td class="value">${inquiry.companyName || 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Country / Region</td>
          <td class="value">${inquiry.country || 'Not specified'}</td>
        </tr>
        <tr>
          <td class="label">Product Interest</td>
          <td class="value"><strong>${inquiry.productInterest || 'General Inquiry'}</strong></td>
        </tr>
        <tr>
          <td class="label">Estimated Quantity</td>
          <td class="value">${inquiry.quantity || 'Not specified'}</td>
        </tr>
        <tr>
          <td class="label">Subject</td>
          <td class="value">${inquiry.subject || 'Website Inquiry'}</td>
        </tr>
        <tr>
          <td class="label">Submission Date</td>
          <td class="value">${submissionDate}</td>
        </tr>
      </table>

      <h4 style="margin: 20px 0 8px 0; color: #334155;">Customer Specifications / Message:</h4>
      <div class="message-box">${inquiry.message}</div>
    </div>
    <div class="footer">
      This notification was automatically dispatched by the Eco Steel Engineering Website Backend.
    </div>
  </div>
</body>
</html>
  `;

  return await resend.emails.send({
    from: fromEmail,
    to: [teamEmail],
    subject: `New Website Inquiry - ${customerName}`,
    html: html
  });
};

module.exports = {
  sendCustomerAutoReply,
  sendTeamNotification
};
