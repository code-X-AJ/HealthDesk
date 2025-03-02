// src/models/Medicine.js
import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
  time: {
    type: String, // HH:MM format
    required: true
  },
  enabled: {
    type: Boolean,
    default: true
  },
  days: {
    type: [String], // ["monday", "tuesday", etc.]
    default: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  }
});

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add medicine name'],
  },
  dosage: {
    type: String,
    required: [true, 'Please add dosage'],
  },
  frequency: {
    type: String,
    required: [true, 'Please add frequency'],
    enum: ['daily', 'weekly', 'monthly']
  },
  startDate: {
    type: Date,
    required: [true, 'Please add start date'],
    default: Date.now
  },
  endDate: {
    type: Date,
    default: null
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reminders: [reminderSchema],
  refillReminder: {
    enabled: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: Number,
      default: 3 // Days before medication runs out
    }
  },
  totalQuantity: {
    type: Number,
    default: null
  },
  remainingQuantity: {
    type: Number,
    default: null
  },
}, {
  timestamps: true
});

// Create index for better query performance
medicineSchema.index({ user: 1, startDate: 1 });

export default mongoose.model('Medicine', medicineSchema);