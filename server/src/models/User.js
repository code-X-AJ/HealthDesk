import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  age: {
    type: Number,
    required: [true, 'Please add an age'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['patient', 'caregiver', 'admin'],
    default: 'patient',
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  bloodGroup: {
    type: String,
    required: [true, 'Please add a blood group'],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: [true, 'Please add a gender'],
  },
  emergencyContact: {
    name: {
      type: String,
      required: [true, 'Please add an emergency contact name'],
    },
    phone: {
      type: String,
      required: [true, 'Please add an emergency contact phone'],
    },
    relation: {
      type: String,
      required: [true, 'Please add the relation of the emergency contact'],
    },
  },
}, {
  timestamps: true,
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
