import axios from 'axios';

const API_URL = 'https://healthdesk.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ✅ Safe helper function to get userId from localStorage
function getUserId() {
  try {
    const userJson = localStorage.getItem("user");
    if (!userJson) {
      window.location.href = '/auth'; // Redirect if not logged in
      return null;
    }
    return JSON.parse(userJson)._id;
  } catch (err) {
    console.error("Error reading user from localStorage:", err);
    return null;
  }
}

// ✅ Medicine API services
export const medicineService = {
  getAllMedicines: async () => {
    const response = await apiClient.get('/medicines', { params: { userId: getUserId() } });
    return response.data;
  },

  getMedicineById: async (id) => {
    const response = await apiClient.get(`/medicines/${id}`);
    return response.data;
  },

  createMedicine: async (medicineData) => {
    const response = await apiClient.post('/medicines', {
      ...medicineData,
      userId: getUserId()
    });
    return response.data;
  },

  updateMedicine: async (id, medicineData) => {
    const response = await apiClient.put(`/medicines/${id}`, medicineData);
    return response.data;
  },

  deleteMedicine: async (id) => {
    const response = await apiClient.delete(`/medicines/${id}/permanent`);
    return response.data;
  }
};

// ✅ Schedule API services
export const scheduleService = {
  getAllSchedules: async () => {
    const response = await apiClient.get('/schedules', { params: { userId: getUserId() } });
    return response.data;
  },

  getTodaySchedules: async () => {
    const response = await apiClient.get('/schedules/today', { params: { userId: getUserId() } });
    return response.data;
  },

  getScheduleById: async (id) => {
    const response = await apiClient.get(`/schedules/${id}`);
    return response.data;
  },

  createSchedule: async (scheduleData) => {
    const response = await apiClient.post('/schedules', {
      ...scheduleData,
      userId: getUserId()
    });
    return response.data;
  },

  updateSchedule: async (id, scheduleData) => {
    const response = await apiClient.put(`/schedules/${id}`, scheduleData);
    return response.data;
  },

  updateScheduleStatus: async (id, status) => {
    const response = await apiClient.put(`/schedules/${id}/status`, { status });
    return response.data;
  },

  deleteSchedule: async (id) => {
    const response = await apiClient.delete(`/schedules/${id}`);
    return response.data;
  }
};

// ✅ Dashboard API services
export const dashboardService = {
  getDashboardData: async () => {
    const response = await apiClient.get('/dashboard/data', { params: { userId: getUserId() } });
    return response.data;
  },

  getDashboardStats: async () => {
    const response = await apiClient.get('/dashboard/stats', { params: { userId: getUserId() } });
    return response.data;
  }
};
