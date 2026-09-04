const mongoose = require('mongoose');

/**
 * Connect to MongoDB Atlas
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('[Database Warning] MONGODB_URI is not defined in environment variables. Database operations will fail.');
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      // Modern mongoose defaults are optimal; standard options can be added here
    });

    console.log(`[MongoDB Connected] Host: ${conn.connection.host} | Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB Connection Error] ${error.message}`);
    // Do not crash the entire process immediately in dev so health checks can still respond
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn('[MongoDB Disconnected] Lost connection to MongoDB Atlas.');
});

mongoose.connection.on('reconnected', () => {
  console.log('[MongoDB Reconnected] Successfully reconnected to MongoDB Atlas.');
});

module.exports = connectDB;
