// src/routes/authRoutes.js
import express from 'express';
import { register, login, getCurrentUser } from './user.controller.js';
// import { protect } from '../middleware/auth.js';

const router = express.Router();

// Auth routes
router.post('/register', register);
router.post('/login', login);
// router.get('/me', protect, getCurrentUser);

export default router;

// Add to app.js:
// import authRoutes from './routes/authRoutes.js';
// app.use('/api/auth', authRoutes);
