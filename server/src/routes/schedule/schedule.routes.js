// routes/scheduleRoutes.js
import express from 'express';
import { getAllSchedules, getTodaysSchedules, createSchedule, updateSchedule, deleteSchedule, hardDeleteSchedule, getTodaySchedule,
    getAdherenceData,
    updateScheduleStatus,
    getMonthlyStats } from './schedule.controller.js';

const router = express.Router();

router.get('/', getAllSchedules);
router.get('/today', getTodaysSchedules);
router.post('/', createSchedule);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);
router.delete('/:id/permanent', hardDeleteSchedule);

router.get('/todays', getTodaySchedule);
router.get('/adherence/:month/:year', getAdherenceData);
router.put('/:id/status', updateScheduleStatus);
router.get('/stats/:month/:year', getMonthlyStats);

export default router;


