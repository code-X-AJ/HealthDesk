// src/controllers/authController.js
import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import { ApiError } from '../../middleware/errorHandler.js';

// Register Controller
export const register = async (req, res, next) => {
  
  try {
    const {
      name,
      age,
      email,
      password,
      bloodGroup,
      gender,
      role = 'patient',
      emergencyContact
    } = req.body;

    

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new ApiError('User already exists with this email', 400);
    }

    // Validate required fields
    if (!name || !age || !email || !password || !bloodGroup || !gender) {
      throw new ApiError('Please fill all required fields', 400);
    }

    // Validate emergency contact
    if (!emergencyContact || !emergencyContact.name || !emergencyContact.phone || !emergencyContact.relation) {
      throw new ApiError('Emergency contact details are required', 400);
    }

    // Validate age
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 0) {
      throw new ApiError('Invalid age', 400);
    }

    // Validate blood group format
    const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    if (!validBloodGroups.includes(bloodGroup)) {
      throw new ApiError('Invalid blood group', 400);
    }

    // Validate gender
    const validGenders = ['male', 'female', 'other'];
    if (!validGenders.includes(gender)) {
      throw new ApiError('Invalid gender', 400);
    }

    // Create user
    const user = await User.create({
      name,
      age: ageNum,
      email,
      password,
      bloodGroup,
      gender,
      role,
      emergencyContact: {
        name: emergencyContact.name,
        phone: emergencyContact.phone,
        relation: emergencyContact.relation
      }
    });

    if (user) {
      // Create session
      req.session.userId = user._id;

      // Send response
      res.status(201).json({
        success: true,
        data: user
      });
    } else {
      throw new ApiError('Invalid user data', 400);
    }
  } catch (error) {
    next(error);
  }
};

// Login Controller
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError('Please provide email and password', 400);
    }

    const user = await User.findOne({ email });

    if (!user || !user.password) {
      throw new ApiError('Invalid credentials', 401);
    }

    // Correct way to compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new ApiError('Invalid credentials', 401);
    }

    req.session.userId = user._id;

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error("Login error:", error.message);
    next(error);
  }
};


// Get Current User
export const getCurrentUser = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      throw new ApiError('Not authenticated', 401);
    }

    const user = await User.findById(req.session.userId);
    if (!user) {
      throw new ApiError('User not found', 404);
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Logout Controller
export const logout = async (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        throw new ApiError('Logout failed', 500);
      }
      res.clearCookie('connect.sid');
      res.status(200).json({
        success: true,
        message: 'Logged out successfully'
      });
    });
  } catch (error) {
    next(error);
  }
};

// Example usage:
/*
POST /api/auth/register
{
  "name": "allo tiki",
  "age": "14",
  "email": "amit24032005@gmail.com",
  "password": "123452e",
  "bloodGroup": "A+",
  "gender": "male",
  "role": "patient",
  "emergencyContact": {
    "name": "dante",
    "phone": "1324352",
    "relation": "sibling"
  }
}

POST /api/auth/login
{
  "email": "amit24032005@gmail.com",
  "password": "123452e"
}
*/