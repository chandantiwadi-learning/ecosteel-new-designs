const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = require('./config/db');
const inquiryRoutes = require('./routes/inquiryRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Connect to MongoDB Atlas
connectDB();

// CORS Configuration
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (such as mobile apps, Postman, curl, or server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin) || NODE_ENV === 'development') {
      return callback(null, true);
    } else {
      return callback(new Error(`CORS Policy: Origin ${origin} not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Body Parsing Middleware
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));

// API Base Information
app.get('/', (req, res) => {
  res.json({
    name: 'Eco Steel Engineering API',
    version: '1.0.0',
    description: 'Production B2B Inquiry Service',
    status: 'online'
  });
});

// Mount Routes
app.use('/api', inquiryRoutes);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
const server = app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`  Eco Steel Engineering Backend API     `);
  console.log(`  Environment: ${NODE_ENV}              `);
  console.log(`  Port:        ${PORT}                  `);
  console.log(`  URL:         http://localhost:${PORT} `);
  console.log(`=========================================`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('[Unhandled Rejection]', err);
});

module.exports = app;
