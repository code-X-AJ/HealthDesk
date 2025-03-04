import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    medicineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicine',
      required: true
    },
    scheduledDate: {
      type: Date,
      // required: [true, 'Please add a scheduled date']
    },
    scheduledTime: {
      type: String, // Store as HH:MM format
      required: [true, 'Please add a scheduled time']
    },
    days: {
      sunday: { type: Boolean, default: false },
      monday: { type: Boolean, default: false },
      tuesday: { type: Boolean, default: false },
      wednesday: { type: Boolean, default: false },
      thursday: { type: Boolean, default: false },
      friday: { type: Boolean, default: false },
      saturday: { type: Boolean, default: false }
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Date
    },
    lastTaken: {
      type: Date
    },
    status: {
      type: String,
      enum: ['upcoming', 'taken', 'missed', 'skipped'],
      default: 'upcoming'
    },
    reminderType: {
      type: String,
      enum: ['push', 'sms', 'email', 'both'],
      default: 'push'
    },
    reminderSent: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    },
    takenAt: {
      type: Date
    },
    periodName: {
      type: String,
      default: 'Dose'
    }
  
  },
  {
    timestamps: true
  }
);

// Create index for better query performance
scheduleSchema.index({ user: 1, scheduledDate: 1 });

export default mongoose.model('Schedule', scheduleSchema);

