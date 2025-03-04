// src/controllers/dashboardController.js
import Medicine from '../../models/Medicine.js';
import { ApiError } from '../../middleware/errorHandler.js';
import Schedule from '../../models/Schedule.js';
// import User from '../../models/User.js';

import mongoose from 'mongoose';

// Get user's upcoming medicines
export const getUpcomingMedicines = async (req, res, next) => {
  g
  try {
    // Get userId from request query instead of auth middleware
    const { userId } = req.query;
    
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      throw new ApiError('Valid user ID is required', 400);
    }
    
    // Get current date and time
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    
    const todayEnd = new Date(now);
    todayEnd.setHours(23, 59, 59, 999);
    
    // Find medicines that have reminders today and time is after current time
    const medicines = await Medicine.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(userId),
          startDate: { $lte: now },
          $or: [
            { endDate: { $gte: now } },
            { endDate: null }
          ]
        }
      },
      {
        $unwind: "$reminders"
      },
      {
        $match: {
          "reminders.enabled": true
        }
      },
      {
        $project: {
          name: 1,
          dosage: 1,
          time: "$reminders.time",
          timeObj: { $toDate: { $concat: [{ $dateToString: { format: "%Y-%m-%d", date: now } }, "T", "$reminders.time"] } }
        }
      },
      {
        $match: {
          timeObj: { $gte: now }
        }
      },
      {
        $sort: { timeObj: 1 }
      },
      {
        $limit: 5
      }
    ]);
    
    // Format the response
    const formattedMedicines = medicines.map(med => {
      // Convert 24h time to 12h format for display
      const [hours, minutes] = med.time.split(':');
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      const time12 = `${hours12}:${minutes} ${period}`;
      
      return {
        name: med.name,
        time: time12,
        dosage: med.dosage
      };
    });
    
    res.status(200).json({
      success: true,
      data: formattedMedicines
    });
  } catch (error) {
    next(error);
  }
};

// Get today's schedule
export const getTodaySchedule = async (req, res, next) => {
  try {
    // Get userId from request query instead of auth middleware
    const { userId } = req.query;
    
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      throw new ApiError('Valid user ID is required', 400);
    }
    
    // Get current date
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    
    const todayEnd = new Date(now);
    todayEnd.setHours(23, 59, 59, 999);
    
    // Find schedules for today
    const schedules = await Schedule.find({
      user: userId,
      scheduledDate: {
        $gte: todayStart,
        $lte: todayEnd
      }
    }).sort({ scheduledTime: 1 });
    
    // Format the response
    const formattedSchedules = schedules.map(schedule => {
      // Convert 24h time to 12h format
      const time = new Date(`2000-01-01T${schedule.scheduledTime}`);
      const formattedTime = time.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      return {
        time: formattedTime,
        task: schedule.title,
        status: schedule.completed ? 'completed' : 'pending'
      };
    });
    
    res.status(200).json({
      success: true,
      data: formattedSchedules
    });
  } catch (error) {
    next(error);
  }
};

// Get dashboard data - combined endpoint
export const getDashboardDataPrev = async (req, res, next) => {
  
  try {
    // Get userId from request query instead of auth middleware
    const { userId } = req.query;
    
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      
      console.error("Invalid userId received:", userId);
      return res.status(400).json({ success: false, message: "Valid user ID is required" });
    
      // throw new ApiError('Valid user ID is required', 400);
    }
    
    // Get current date and time
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    
    const todayEnd = new Date(now);
    todayEnd.setHours(23, 59, 59, 999);
    
    // 1. Find upcoming medicines
    // const medicines = await Medicine.aggregate([
    //   {
    //     $match: {
    //       user: new mongoose.Types.ObjectId(userId),
    //       startDate: { $lte: now },
    //       $or: [
    //         { endDate: { $gte: now } },
    //         { endDate: null }
    //       ]
    //     }
    //   },
    //   {
    //     $unwind: "$reminders"
    //   },
    //   {
    //     $match: {
    //       "reminders.enabled": true
    //     }
    //   },
    //   {
    //     $project: {
    //       name: 1,
    //       dosage: 1,
    //       time: "$reminders.time",
    //       timeObj: { $toDate: { $concat: [{ $dateToString: { format: "%Y-%m-%d", date: now } }, "T", "$reminders.time"] } }
    //     }
    //   },
    //   {
    //     $match: {
    //       timeObj: { $gte: now }
    //     }
    //   },
    //   {
    //     $sort: { timeObj: 1 }
    //   },
    //   {
    //     $limit: 3
    //   }
    // ]);
    // const medicines = await Medicine.find({user: userId});
    const medicines = await Medicine.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
          startDate: { $lte: now },
          $or: [
            { endDate: { $gte: now } },
            { endDate: null }
          ]
        }
      },
      {
        $unwind: "$reminders"
      },
      {
        $match: {
          "reminders.enabled": true,
          "reminders.isActive": true
        }
      },
      {
        $project: {
          medicineId: 1,
          user: 1,
          scheduledTime: "$reminders.time",
          periodName: "$reminders.periodName",
          days: {
            completed: "$reminders.completed",
            status: "$reminders.status",
            reminderType: "$reminders.reminderType",
            reminderSent: "$reminders.reminderSent",
            isActive: "$reminders.isActive"
          },
          timeObj: {
            $toDate: {
              $concat: [{ $dateToString: { format: "%Y-%m-%d", date: now } }, "T", "$reminders.time"]
            }
          }
        }
      },
      {
        $match: {
          timeObj: { $gte: now }
        }
      },
      {
        $sort: { timeObj: 1 }
      },
      {
        $limit: 3
      }
    ]);
    
      
    // 2. Find today's schedules
    const schedules = await Schedule.find({
      user: userId,
      scheduledDate: {
        $gte: todayStart,
        $lte: todayEnd
      }
    }).sort({ scheduledTime: 1 }).limit(3);
    console.log(".............", medicines);
    console.log(".............", schedules);
    
    // Format medicines
    const upcomingMeds = medicines.map(med => {
      const [hours, minutes] = med.time.split(':');
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      const time12 = `${hours12}:${minutes} ${period}`;
      
      return {
        name: med.name,
        time: time12,
        dosage: med.dosage
      };
    });
    
    // Format schedules
    const todaySchedule = schedules.map(schedule => {
      const time = new Date(`2000-01-01T${schedule.scheduledTime}`);
      const formattedTime = time.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      return {
        time: formattedTime,
        task: schedule.title,
        status: schedule.completed ? 'completed' : 'pending'
      };
    });

    if (upcomingMeds.length === 0) {
      upcomingMeds.push(
        { name: "Amoxicillin", time: "9:00 AM", dosage: "500mg" },
        { name: "Paracetamol", time: "2:00 PM", dosage: "250mg" },
        { name: "Vitamin D3", time: "8:00 PM", dosage: "1000mg" }
      );
    }
    
    if (todaySchedule.length === 0) {
      todaySchedule.push(
        { time: "9:00 AM", task: "Morning Medicine", status: "completed" },
        { time: "2:00 PM", task: "Afternoon Medicine", status: "pending" },
        { time: "8:00 PM", task: "Evening Medicine", status: "pending" }
      );
    }

    
    
    res.status(200).json({
      success: true,
      data: {
        upcomingMeds,
        todaySchedule
      }
    });
  } catch (error) {
    next(error);
  }
};


export const getDashboardData = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayMapping = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayField = `days.${dayMapping[dayOfWeek]}`;
    
    const todaySchedules = await Schedule.find({ userId, isActive: true, [dayField]: true })
      .populate('medicineId', 'name dosage')
      .sort({ time: 1 });

    const todayScheduleData = todaySchedules.map(schedule => ({
      time: schedule.time,
      task: `${schedule.medicineId?.name || 'Unknown'} - ${schedule.medicineId?.dosage || ''}`,
      status: schedule.status
    }));
    
    const upcomingMedicines = todaySchedules
      .filter(schedule => schedule.status === 'pending')
      .map(schedule => ({
        name: schedule.medicineId?.name || 'Unknown',
        time: schedule.time,
        dosage: schedule.medicineId?.dosage || ''
      }));
    
    res.status(200).json({ success: true, data: { upcomingMeds: upcomingMedicines, todaySchedule: todayScheduleData } });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch dashboard data', error: error.message });
  }
};

// Get statistics for medicines and schedule adherence
export const getDashboardStats = async (req, res) => {
  console.log("getDashborad stats....");
  
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    
    const totalMedicines = await Medicine.countDocuments({ user: userId });
    const totalSchedules = await Schedule.countDocuments({ user: userId, isActive: true });
    console.log(totalMedicines, totalSchedules);
    
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);
    
    const takenCount = await Schedule.countDocuments({ userId, status: 'taken', lastTaken: { $gte: last7Days } });
    const missedCount = await Schedule.countDocuments({ userId, status: 'missed', updatedAt: { $gte: last7Days } });
    
    const totalDosed = takenCount + missedCount;
    const adherenceRate = totalDosed > 0 ? Math.round((takenCount / totalDosed) * 100) : 0;
    
    const upcomingRefills = await Medicine.countDocuments({ userId, isActive: true, quantityRemaining: { $lt: 5 }, quantity: { $gt: 0 } });
    
    res.status(200).json({ success: true, data: { totalMedicines, totalSchedules, adherenceRate, upcomingRefills } });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch dashboard stats', error: error.message });
  }
};
