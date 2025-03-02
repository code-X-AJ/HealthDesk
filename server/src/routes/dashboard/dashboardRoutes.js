// src/routes/dashboardRoutes.js
import express from 'express';
import { 
  getUpcomingMedicines, 
  getTodaySchedule, 
  getDashboardDataPrev,
  getDashboardData,
getDashboardStats
} from './dashboardController.js';

const router = express.Router();

// Individual endpoints - no auth middleware
router.get('/upcoming-medicines', getUpcomingMedicines);
router.get('/today-schedule', getTodaySchedule);

// Combined endpoint for dashboard data - no auth middleware
router.get('/dataprev', getDashboardDataPrev);
router.get('/data', getDashboardData);
router.get('/stats', getDashboardStats);



export default router;

// Add to app.js:
// import dashboardRoutes from './routes/dashboardRoutes.js';
// app.use('/api/dashboard', dashboardRoutes);