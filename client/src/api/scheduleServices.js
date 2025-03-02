// api/scheduleServices.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add authentication token to requests
// apiClient.interceptors.request.use(config => {
//   const userJson = localStorage.getItem('user');
//   if (userJson) {
//     const user = JSON.parse(userJson);
//     if (user.token) {
//       config.headers.Authorization = `Bearer ${user.token}`;
//     }
//   }
//   return config;
// });

// Schedule services
export const scheduleService = {
  // Get today's medication schedule
  getTodaySchedule: async () => {
    try {
      const userJson = localStorage.getItem('user');
      if (!userJson) throw new Error('User not found in local storage');
      
      const user = JSON.parse(userJson);
      const userId = user._id;
      
      const response = await apiClient.get('/schedules/todays', {
        params: { userId }
      });

      console.log("response.data.......", response.data);
      
      
      return response.data.data;
    } catch (error) {
      console.error('Error fetching today\'s schedule:', error);
      return [];
    }
  },
  
  // Update a schedule status (mark as taken, missed, skipped)
  updateScheduleStatus: async (scheduleId, status) => {
    try {
      const response = await apiClient.put(`/schedules/${scheduleId}/status`, { 
        status 
      });
      
      return response.data.data;
    } catch (error) {
      console.error('Error updating schedule status:', error);
      throw error;
    }
  },
  
  // Get adherence data for a specific month
  getMonthlyAdherence: async (month, year) => {
    try {
      const userJson = localStorage.getItem('user');
      if (!userJson) throw new Error('User not found in local storage');
      
      const user = JSON.parse(userJson);
      const userId = user._id;
      
      const response = await apiClient.get(`/schedules/adherence/${month}/${year}`, {
        params: { userId }
      });
      
      return response.data.data;
    } catch (error) {
      console.error('Error fetching adherence data:', error);
      return {};
    }
  },
  
  // Get monthly statistics
  getMonthlyStats: async (month, year) => {
    try {
      const userJson = localStorage.getItem('user');
      if (!userJson) throw new Error('User not found in local storage');
      
      const user = JSON.parse(userJson);
      const userId = user._id;
      
      const response = await apiClient.get(`/schedules/stats/${month}/${year}`, {
        params: { userId }
      });
      
      return response.data.data;
    } catch (error) {
      console.error('Error fetching monthly stats:', error);
      return { taken: 0, missed: 0 };
    }
  }
};

// Appointment services
export const appointmentService = {
  // Get next upcoming appointment
  getNextAppointment: async () => {
    try {
      const userJson = localStorage.getItem('user');
      if (!userJson) throw new Error('User not found in local storage');
      
      const user = JSON.parse(userJson);
      const userId = user._id;
      
      const response = await apiClient.get('/appointments/next', {
        params: { userId }
      });
      
      return response.data.data;
    } catch (error) {
      console.error('Error fetching next appointment:', error);
      return null;
    }
  }
};

// Medication alert services
export const alertService = {
  // Get medication alerts (refills needed)
  getMedicationAlerts: async () => {
    try {
      const userJson = localStorage.getItem('user');
      if (!userJson) throw new Error('User not found in local storage');
      
      const user = JSON.parse(userJson);
      const userId = user._id;
      
      const response = await apiClient.get('/medication-alerts', {
        params: { userId }
      });
      
      return response.data.data;
    } catch (error) {
      console.error('Error fetching medication alerts:', error);
      return [];
    }
  }
};