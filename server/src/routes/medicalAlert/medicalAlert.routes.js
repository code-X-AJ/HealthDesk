import express from 'express';
import { getMedicationAlerts } from './medicalAlert.controller.js';

const router = express.Router();

// Route to get medication alerts
router.get('/', getMedicationAlerts);

export default router;
