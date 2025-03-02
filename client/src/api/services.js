import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Configure axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
    const userJson = localStorage.getItem("user");
    if (!userJson) throw new Error("User not found in local storage");
    const userId = JSON.parse(userJson)._id;

// Medicine API services
export const medicineService = {
  getAllMedicines: async () => {
    const response = await apiClient.get('/medicines', {params: { userId } });
    return response.data;
  },
  
  getMedicineById: async (id) => {
    const response = await apiClient.get(`/medicines/${id}`);
    return response.data;
  },
  
  createMedicine: async (medicineData) => {
    const newMedicineData = { ...medicineData, userId };
    const response = await apiClient.post('/medicines', newMedicineData);
    return response.data;
  },
  
  updateMedicine: async (id, medicineData) => {
    const response = await apiClient.put(`/medicines/${id}`, medicineData);
    return response.data;
  },
  
  deleteMedicine: async (id) => {
    const response = await apiClient.delete(`/medicines/${id}`);
    return response.data;
  }
};

// Schedule API services
export const scheduleService = {
  getAllSchedules: async () => {
    const response = await apiClient.get('/schedules', { params: { userId } });
    return response.data;
  },
  
  getTodaySchedules: async () => {
    const response = await apiClient.get('/schedules/today', { params: { userId } });
    return response.data;
  },
  
  getScheduleById: async (id) => {
    const response = await apiClient.get(`/schedules/${id}`);
    return response.data;
  },
  
  createSchedule: async (scheduleData) => {
    const newScheduleData = { ...scheduleData, userId };
    const response = await apiClient.post('/schedules', newScheduleData);
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

// Dashboard API services
export const dashboardService = {
  getDashboardData: async () => {
    const response = await apiClient.get('/dashboard/data', { params: { userId } });
    return response.data;
  },
  
  getDashboardStats: async () => {
    const response = await apiClient.get('/dashboard/stats', { params: { userId } });
    return response.data;
  }
};




