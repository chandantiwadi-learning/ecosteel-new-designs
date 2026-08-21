const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config/env');
const contactRoutes = require('./routes/contactRoutes');
const rfqRoutes = require('./routes/rfqRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads if needed
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EcoSteel B2B API Server is running' });
});

// API Routes
app.use('/api', contactRoutes);
app.use('/api', rfqRoutes);

// Error Middleware
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`[EcoSteel Server] B2B API running in ${config.nodeEnv} mode on port ${config.port}`);
});
