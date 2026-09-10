const Inquiry = require('../models/Inquiry');
const { sendCustomerAutoReply, sendTeamNotification } = require('../services/emailService');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Reusable server-side Turnstile verification
 * Uses URLSearchParams as recommended by Cloudflare
 */
async function verifyTurnstile(token, remoteIp) {
  console.log('[Turnstile Debug] Verification started');
  console.log('[Turnstile Debug] Token present:', !!token);
  if (token) {
    console.log('[Turnstile Debug] Token length:', token.length);
    console.log('[Turnstile Debug] Token type:', typeof token);
    console.log('[Turnstile Debug] Token prefix:', typeof token === 'string' ? token.substring(0, 10) + '...' : 'N/A');
  }

  if (!token) {
    return {
      success: false,
      errorCodes: ["missing-input-response"]
    };
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  console.log('[Turnstile Debug] Secret configured:', !!secret);

  if (!secret) {
    console.error("[Turnstile] TURNSTILE_SECRET_KEY is missing in backend environment");
    return {
      success: false,
      errorCodes: ["server-misconfiguration"]
    };
  }

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);

  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  console.log('[Turnstile Debug] Endpoint: https://challenges.cloudflare.com/turnstile/v0/siteverify');

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    console.log("[Turnstile Debug] Cloudflare response:", {
      httpStatus: response.status,
      success: result.success,
      errorCodes: result["error-codes"] || [],
      hostname: result.hostname || null,
      action: result.action || null
    });

    return {
      success: result.success,
      errorCodes: result["error-codes"] || [],
      hostname: result.hostname,
      action: result.action
    };
  } catch (err) {
    console.error("[Turnstile Debug] Fetch Error:", err.message);
    return {
      success: false,
      errorCodes: ["network-error"]
    };
  }
}

/**
 * Handle website inquiry / contact form submission
 * POST /api/inquiries
 */
const createInquiry = async (req, res, next) => {
  try {
    const {
      fullName,
      name,
      email,
      phone,
      companyName,
      company,
      subject,
      message,
      requirements,
      productInterest,
      product,
      quantity,
      country
    } = req.body;

    // Normalize field names to accommodate both frontend form naming variants
    const resolvedFullName = (fullName || name || '').trim();
    const resolvedEmail = (email || '').trim().toLowerCase();
    const resolvedPhone = (phone || '').trim();
    const resolvedCompany = (companyName || company || '').trim();
    const resolvedSubject = (subject || '').trim();
    const resolvedMessage = (message || requirements || '').trim();
    const resolvedProduct = (productInterest || product || '').trim();
    const resolvedQuantity = (quantity || '').trim();
    const resolvedCountry = (country || '').trim();

    // 1. Validation: Required fields
    if (!resolvedFullName) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your full name.'
      });
    }

    if (!resolvedEmail) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your email address.'
      });
    }

    // 2. Validation: Email format
    if (!emailRegex.test(resolvedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid corporate email address.'
      });
    }

    // 3. Validation: Message / requirements
    if (!resolvedMessage || resolvedMessage.length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your inquiry requirements (minimum 5 characters).'
      });
    }

    // 4. Security Verification: Cloudflare Turnstile CAPTCHA token verification
    const turnstileToken = req.body.turnstileToken;
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress;
    
    console.log('[Turnstile Debug] Request origin:', req.headers.origin || 'unknown');
    console.log('[Turnstile Debug] Request hostname:', req.hostname || 'unknown');

    const verificationResult = await verifyTurnstile(turnstileToken, clientIp);

    if (!verificationResult.success) {
      return res.status(403).json({
        success: false,
        error: 'Turnstile verification failed',
        errorCodes: verificationResult.errorCodes
      });
    }

    // Guard: Verify MongoDB URI is configured
    if (!process.env.MONGODB_URI) {
      console.error('[Inquiry Error] MONGODB_URI is not defined in environment variables.');
      return res.status(500).json({
        success: false,
        message: process.env.NODE_ENV === 'production'
          ? 'Something went wrong. Please try again.'
          : 'Database connection string missing. Please configure MONGODB_URI in server/.env'
      });
    }

    // 5. Save inquiry to MongoDB
    const inquiry = await Inquiry.create({
      fullName: resolvedFullName,
      email: resolvedEmail,
      phone: resolvedPhone,
      companyName: resolvedCompany,
      subject: resolvedSubject || (resolvedProduct ? `Inquiry for ${resolvedProduct}` : 'General Industrial Inquiry'),
      message: resolvedMessage,
      productInterest: resolvedProduct || 'General Inquiry',
      quantity: resolvedQuantity,
      country: resolvedCountry,
      status: 'new'
    });

    console.log(`[Inquiry Created] ID: ${inquiry._id} | From: ${inquiry.fullName} <${inquiry.email}>`);

    // 5. Send transactional emails via Resend asynchronously (Gracefully handled)
    // Rule: If database save succeeds but email fails, log error properly and do not fail the request
    Promise.allSettled([
      sendCustomerAutoReply(inquiry),
      sendTeamNotification(inquiry)
    ]).then(results => {
      results.forEach((result, index) => {
        const type = index === 0 ? 'Customer Auto-Reply' : 'Team Notification';
        if (result.status === 'fulfilled') {
          if (result.value) {
            console.log(`[Resend Dispatch] ${type} sent successfully for inquiry ${inquiry._id}`);
          }
        } else {
          console.error(`[Resend Error] Failed to send ${type} for inquiry ${inquiry._id}:`, result.reason?.message || result.reason);
        }
      });
    }).catch(err => {
      console.error('[Resend Error] Unexpected error in email dispatch:', err);
    });

    // 6. Return standard success response
    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully. Our team will contact you shortly.'
    });

  } catch (error) {
    console.error('[Inquiry Controller Error]', error);

    // Mongoose schema validation error fallback
    if (error.name === 'ValidationError') {
      const firstError = Object.values(error.errors)[0]?.message;
      return res.status(400).json({
        success: false,
        message: firstError || 'Please fill in all required fields properly.'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
};

module.exports = {
  createInquiry
};
