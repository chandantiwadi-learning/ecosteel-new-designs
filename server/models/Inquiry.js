const mongoose = require('mongoose');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Full name must be at least 2 characters long'],
      maxlength: [100, 'Full name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [emailRegex, 'Please provide a valid corporate email address']
    },
    phone: {
      type: String,
      trim: true,
      default: ''
    },
    companyName: {
      type: String,
      trim: true,
      default: ''
    },
    subject: {
      type: String,
      trim: true,
      default: 'General Industrial Inquiry'
    },
    message: {
      type: String,
      required: [true, 'Inquiry message/requirements are required'],
      trim: true,
      minlength: [5, 'Message must be at least 5 characters long']
    },
    productInterest: {
      type: String,
      trim: true,
      default: 'General Inquiry'
    },
    quantity: {
      type: String,
      trim: true,
      default: ''
    },
    country: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: {
        values: ['new', 'in-review', 'contacted', 'quoted', 'closed'],
        message: '{VALUE} is not a supported status'
      },
      default: 'new',
      index: true // Optimized for future admin dashboard status filtering
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true // Optimized for chronological sorting
    }
  },
  {
    timestamps: true // Automatically manages createdAt and updatedAt
  }
);

// Compound index for potential admin search & filtering
inquirySchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Inquiry', inquirySchema);
