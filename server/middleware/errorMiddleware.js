/**
 * 404 Not Found Middleware
 */
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`
  });
};

/**
 * Centralized Error Handling Middleware
 */
const errorHandler = (err, req, res, next) => {
  // Handle JSON parsing syntax errors
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      message: 'Malformed JSON payload received.'
    });
  }

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({
      success: false,
      message: messages[0] || 'Validation failed. Please verify your form data.'
    });
  }

  // Handle Mongoose CastError (invalid ObjectId, etc.)
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: `Invalid resource identifier: ${err.value}`
    });
  }

  console.error('[Server Error]', err);

  const statusCode = err.statusCode || 500;
  const message = err.isOperational
    ? err.message
    : (process.env.NODE_ENV === 'production' 
        ? 'Something went wrong. Please try again.' 
        : err.message || 'Something went wrong. Please try again.');

  res.status(statusCode).json({
    success: false,
    message: message
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};
