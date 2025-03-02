import { ApiError } from './errorHandler.js';

export const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError('Please fill all fields', 400);
  }

  if (password.length < 6) {
    throw new ApiError('Password must be at least 6 characters', 400);
  }

  next();
};

export const validateMedicine = (req, res, next) => {
  const { name, dosage, frequency, startDate } = req.body;

  if (!name || !dosage || !frequency || !startDate) {
    throw new ApiError('Please fill all required fields', 400);
  }

  next();
};

