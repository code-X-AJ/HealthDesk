// controllers/scheduleController.js
import Schedule from '../../models/Schedule.js';
import Medicine from '../../models/Medicine.js';

// Get all schedules for a user
export const getAllSchedules = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    const schedules = await Schedule.find({ user:userId, isActive: true })
    .populate('medicineId', 'name dosage')
    .sort({ time: 1 });
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch schedules', error: error.message });
  }
};

// Get today's schedules for a user
export const getTodaysSchedules = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    const dayOfWeek = new Date().getDay();
    const dayMapping = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const query = { userId, isActive: true, [`days.${dayMapping[dayOfWeek]}`]: true };
    const schedules = await Schedule.find(query)
      .populate('medicineId', 'name dosage')
      .sort({ time: 1 });
    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error fetching today's schedules:", error);
    res.status(500).json({ success: false, message: "Failed to fetch today's schedules", error: error.message });
  }
};

// Create a new schedule
export const createSchedule = async (req, res) => {
  try {
    const { medicineId, time, days, reminderType, userId } = req.body;
    if (!medicineId || !time || !userId) {
      return res.status(400).json({ success: false, message: 'Medicine ID, time, and user ID are required' });
    }
    const medicine = await Medicine.findById(medicineId);
    if (!medicine) {
      return res.status(404).json({ success: false, message: 'Medicine not found or unauthorized' });
    }
    const newSchedule = await Schedule.create({ medicineId, user:userId, scheduledTime:time, days: days || {}, reminderType: reminderType || 'push' });
    const populatedSchedule = await Schedule.findById(newSchedule._id).populate('medicineId', 'name dosage');
    res.status(201).json(populatedSchedule);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ success: false, message: 'Failed to create schedule', error: error.message });
  }
};

// Update a schedule
export const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSchedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
      .populate('medicineId', 'name dosage');
    if (!updatedSchedule) {
      return res.status(404).json({ success: false, message: 'Schedule not found' });
    }
    res.status(200).json(updatedSchedule);
  } catch (error) {
    console.error('Error updating schedule:', error);
    res.status(500).json({ success: false, message: 'Failed to update schedule', error: error.message });
  }
};

// Delete a schedule (soft delete)
export const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByIdAndUpdate(id, { isActive: false }, { new: true });
    if (!schedule) {
      return res.status(404).json({ success: false, message: 'Schedule not found' });
    }
    res.status(200).json({ success: true, message: 'Schedule deleted successfully' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ success: false, message: 'Failed to delete schedule', error: error.message });
  }
};

// Hard delete a schedule
export const hardDeleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByIdAndDelete(id);
    if (!schedule) {
      return res.status(404).json({ success: false, message: 'Schedule not found' });
    }
    res.status(200).json({ success: true, message: 'Schedule permanently deleted' });
  } catch (error) {
    console.error('Error permanently deleting schedule:', error);
    res.status(500).json({ success: false, message: 'Failed to permanently delete schedule', error: error.message });
  }
};



////////////////////////////////


// Get today's schedule for the user
export const getTodaySchedule = async (req, res) => {
  try {
    console.log("getTodaySchedule");
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ success: false, message: 'User ID is required' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // const schedules = await Schedule.find({
    //   user:userId,
    //   scheduledDate: { $gte: today, $lt: tomorrow }
    // }).populate('medicineId', 'name dosage');
    const schedules = await Schedule.find({ user: userId });
    console.log(schedules);

    const formattedSchedules = schedules.map(schedule => ({
      id: schedule._id,
      time: schedule.scheduledDate,
      medicineName: schedule.medicineId?.name,
      dose: schedule.medicineId?.dosage,
      period: schedule.periodName,
      status: schedule.status,
      takenAt: schedule.takenAt ? schedule.takenAt.toTimeString().slice(0, 5) : null
    }));

    

    res.status(200).json({ success: true, data: formattedSchedules.sort((a, b) => a.time.localeCompare(b.time)) });
  } catch (error) {
    console.error('Error fetching today’s schedule:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch schedule', error: error.message });
  }
};

// Get monthly adherence data
export const getAdherenceData = async (req, res) => {
  try {
    const { userId } = req.query;
    const { month, year } = req.params;
    if (!userId) return res.status(400).json({ success: false, message: 'User ID is required' });

    const monthNum = parseInt(month) - 1;
    const yearNum = parseInt(year);
    const startDate = new Date(yearNum, monthNum, 1);
    const endDate = new Date(yearNum, monthNum + 1, 0);

    const schedules = await Schedule.find({ userId, date: { $gte: startDate, $lte: endDate } });

    const adherenceData = Array.from({ length: endDate.getDate() }, (_, i) => ({
      total: 0,
      taken: 0,
      level: 'none'
    }));

    schedules.forEach(schedule => {
      const dayIndex = schedule.date.getDate() - 1;
      adherenceData[dayIndex].total += 1;
      if (schedule.status === 'taken') adherenceData[dayIndex].taken += 1;
    });

    adherenceData.forEach((data, i) => {
      const ratio = data.total === 0 ? 0 : data.taken / data.total;
      adherenceData[i].level =
        ratio === 1 ? 'high' : ratio >= 0.7 ? 'medium' : ratio > 0 ? 'low' : 'missed';
    });

    res.status(200).json({ success: true, data: adherenceData });
  } catch (error) {
    console.error('Error fetching adherence data:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch adherence data', error: error.message });
  }
};

// Update schedule status
export const updateScheduleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['taken', 'missed', 'skipped', 'upcoming'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const updateData = { status, takenAt: status === 'taken' ? new Date() : null };
    const schedule = await Schedule.findByIdAndUpdate(id, updateData, { new: true })
      .populate('medicationId', 'name dosage');

    if (!schedule) return res.status(404).json({ success: false, message: 'Schedule not found' });

    res.status(200).json({
      success: true,
      data: {
        id: schedule._id,
        time: schedule.time,
        medicineName: schedule.medicationId?.name,
        dose: schedule.medicationId?.dosage,
        period: schedule.periodName,
        status: schedule.status,
        takenAt: schedule.takenAt ? schedule.takenAt.toTimeString().slice(0, 5) : null
      }
    });
  } catch (error) {
    console.error('Error updating schedule status:', error);
    res.status(500).json({ success: false, message: 'Failed to update status', error: error.message });
  }
};

// Get monthly stats
export const getMonthlyStats = async (req, res) => {
  try {
    const { userId } = req.query;
    const { month, year } = req.params;

    if (!userId) return res.status(400).json({ success: false, message: 'User ID is required' });

    const monthNum = parseInt(month) - 1;
    const yearNum = parseInt(year);
    const startDate = new Date(yearNum, monthNum, 1);
    const endDate = new Date(yearNum, monthNum + 1, 0);

    const takenCount = await Schedule.countDocuments({
      userId,
      date: { $gte: startDate, $lte: endDate },
      status: 'taken'
    });

    const missedCount = await Schedule.countDocuments({
      userId,
      date: { $gte: startDate, $lte: endDate },
      status: { $in: ['missed', 'skipped'] }
    });

    res.status(200).json({ success: true, data: { taken: takenCount, missed: missedCount } });
  } catch (error) {
    console.error('Error fetching monthly stats:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch stats', error: error.message });
  }
};
