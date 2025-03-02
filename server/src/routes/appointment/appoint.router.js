import express from 'express';
import { getNextAppointment } from './appoint.controller.js';

const router = express.Router();

// Route to get the next upcoming appointment
router.get('/next', getNextAppointment);

export default router;
