import jwt from 'jsonwebtoken';
import { ApiError } from './errorHandler.js';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } else {
      throw new ApiError('Not authorized', 401);
    }
  } catch (error) {
    next(new ApiError('Not authorized', 401));
  }
};
