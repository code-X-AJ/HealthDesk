// import React, { useState } from 'react';
// import { 
//   Home,
//   Plus, 
//   Calendar,
//   Clock,
//   User,
//   Bell,
//   Search,
//   Filter,
//   MoreVertical,
//   X,
//   CheckCircle,
//   AlertCircle,
//   Pill,
//   Calendar as CalendarIcon,
//   ChevronRight,
//   Menu,
//   Settings,
//   LogOut,
//   Stethoscope,
//   ShoppingBag
// } from 'lucide-react';

// const MedicineManagement = () => {
//   const [showAddMedicine, setShowAddMedicine] = useState(false);
//   const [showSchedule, setShowSchedule] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const menuItems = [
//     { icon: <Home size={20} />, label: "Dashboard", path: "/dash" },
//     { icon: <Pill size={20} />, label: 'Medicines', path: '/meds' },
//     { icon: <Calendar size={20} />, label: 'Schedule', path: '/schedule' },
//     { icon: <User size={20} />, label: 'Profile', path: '/profile' },
//     { icon: <ShoppingBag size={20} />, label: 'MedMart', path: '/medmart' },
//   ];

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-teal-50 to-blue-50">
//       {/* Sidebar */}
//       <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white/95 backdrop-blur-sm border-r border-gray-200 transition-all duration-300 flex flex-col`}>
//         {/* Logo */}
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex items-center space-x-2">
//             <Stethoscope className="text-teal-600" size={24} />
//             <h1 className={`font-bold text-xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent transition-opacity duration-300 ${!isSidebarOpen && 'opacity-0'}`}>
//               MedEase
//             </h1>
//           </div>
//         </div>

//         {/* Toggle Button */}
//         <button 
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="p-4 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>

//         {/* Navigation Menu */}
//         <nav className="flex-1 p-2">
//           {menuItems.map((item, index) => (
//             <a 
//               key={index}
//               href={item.path}
//               className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 group"
//             >
//               <div className="text-teal-500">{item.icon}</div>
//               {isSidebarOpen && 
//                 <span className="transition-transform group-hover:translate-x-1 duration-300">
//                   {item.label}
//                 </span>
//               }
//             </a>
//           ))}
//         </nav>

//         {/* Bottom Menu */}
//         <div className="p-2 border-t border-gray-200">
//           <a href="/settings" className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//             <Settings size={20} className="text-teal-500" />
//             {isSidebarOpen && <span>Settings</span>}
//           </a>
//           <a href="/logout" className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//             <LogOut size={20} className="text-teal-500" />
//             {isSidebarOpen && <span>Logout</span>}
//           </a>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1">
//         {/* Top Header */}
//         <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
//               Medicine Management
//             </h2>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//                 <Bell size={20} className="text-gray-600" />
//               </button>
//               <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//                 <User size={20} className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Actions Bar */}
//         <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
//           <div className="flex justify-between items-center">
//             <div className="flex space-x-3">
//               <button 
//                 onClick={() => setShowAddMedicine(true)}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group"
//               >
//                 <Plus size={20} />
//                 <span>Add Medicine</span>
//               </button>
//               <button 
//                 onClick={() => setShowSchedule(true)}
//                 className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 text-gray-700"
//               >
//                 <Calendar size={20} className="text-teal-500" />
//                 <span>Set Schedule</span>
//               </button>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="relative">
//                 <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
//                 <input 
//                   type="text"
//                   placeholder="Search medicines..."
//                   className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                 />
//               </div>
//               <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//                 <Filter size={20} className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Current Medicines Card */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
//                   <Pill className="text-teal-500" size={20} />
//                   <span>Current Medicines</span>
//                 </h3>
//               </div>
//               <div className="p-4 space-y-3">
//                 {/* Medicine Item */}
//                 <div className="group p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h4 className="font-medium text-gray-800">Aspirin</h4>
//                       <p className="text-gray-500 text-sm">1 pill - Daily</p>
//                       <p className="text-teal-500 text-sm">Next dose: 9:00 AM</p>
//                     </div>
//                     <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <MoreVertical size={20} className="text-gray-400 hover:text-gray-600" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Schedule Card */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
//                   <CalendarIcon className="text-teal-500" size={20} />
//                   <span>Today's Schedule</span>
//                 </h3>
//               </div>
//               <div className="p-4 space-y-3">
//                 {/* Schedule Item */}
//                 <div className="group p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
//                   <div className="flex items-center">
//                     <Clock className="text-teal-500" size={20} />
//                     <div className="ml-3 flex-1">
//                       <p className="text-gray-800 font-medium">9:00 AM</p>
//                       <p className="text-gray-500 text-sm">Aspirin - 1 pill</p>
//                     </div>
//                     <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button className="px-3 py-1 bg-teal-100 text-teal-600 rounded-lg hover:bg-teal-200 transition-colors duration-300">
//                         Take
//                       </button>
//                       <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
//                         Skip
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Statistics Card */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="p-4 border-b border-gray-200">
//                 <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
//                   <CheckCircle className="text-teal-500" size={20} />
//                   <span>Medicine Statistics</span>
//                 </h3>
//               </div>
//               <div className="p-4 space-y-4">
//                 <div className="p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50">
//                   <p className="text-gray-600">Adherence Rate</p>
//                   <p className="text-2xl font-semibold text-teal-600">85%</p>
//                 </div>
//                 <div className="p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50">
//                   <p className="text-gray-600">Upcoming Refills</p>
//                   <p className="text-2xl font-semibold text-teal-600">2</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Add Medicine Modal */}
//       {showAddMedicine && (
//         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
//           <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 animate-fade-in-up">
//             <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//               <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
//                 Add New Medicine
//               </h3>
//               <button 
//                 onClick={() => setShowAddMedicine(false)}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="p-6">
//               <form className="space-y-4">
//                 {/* Medicine Name Field */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Medicine Name
//                   </label>
//                   <div className="relative">
//                     <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'name' ? 'text-teal-500' : 'text-gray-400'}`}>
//                       <Pill size={20} />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Enter medicine name"
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField(null)}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                     />
//                   </div>
//                 </div>

//                 {/* Dosage Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Dosage
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="E.g., 1 pill"
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                   />
//                 </div>

//                 {/* Frequency Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Frequency
//                   </label>
//                   <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
//                     <option value="">Select frequency</option>
//                     <option value="daily">Daily</option>
//                     <option value="weekly">Weekly</option>
//                     <option value="monthly">Monthly</option>
//                   </select>
//                 </div>

//                 {/* Form Actions */}
//                 <div className="flex justify-end space-x-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setShowAddMedicine(false)}
//                     className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
//                   >
//                     Add Medicine
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Schedule Modal */}
//       {showSchedule && (
//         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
//           <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 animate-fade-in-up">
//             <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//               <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
//                 Set Medicine Schedule
//               </h3>
//               <button 
//                 onClick={() => setShowSchedule(false)}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="p-6">
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Select Medicine
//                   </label>
//                   <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
//                     <option value="">Choose a medicine</option>
//                     <option value="aspirin">Aspirin</option>
//                     <option value="other">Other Medicine</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Time
//                   </label>
//                   <input 
//                     type="time"
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Repeat
//                   </label>
//                   <div className="flex justify-between">
//                     {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
//                       <button
//                         key={index}
//                         type="button"
//                         className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-teal-500 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
//                       >
//                         {day}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Reminder Type
//                   </label>
//                   <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
//                     <option value="push">Push Notification</option>
//                     <option value="sms">SMS</option>
//                     <option value="both">Both</option>
//                   </select>
//                 </div>

//                 <div className="flex justify-end space-x-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setShowSchedule(false)}
//                     className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2 group"
//                   >
//                     <span>Save Schedule</span>
//                     <ChevronRight size={20} className="transform transition-transform group-hover:translate-x-1" />
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MedicineManagement;


// MedicineManagement.jsx with API Integration
// MedicineManagement.jsx with API Integration
import React, { useState, useEffect } from 'react';
import { 
  Home,
  Plus, 
  Calendar,
  Clock,
  User,
  Bell,
  Search,
  Filter,
  MoreVertical,
  X,
  CheckCircle,
  AlertCircle,
  Pill,
  Calendar as CalendarIcon,
  ChevronRight,
  Menu,
  Settings,
  LogOut,
  Stethoscope,
  ShoppingBag,
  Trash2,
  Edit
} from 'lucide-react';
import { medicineService, scheduleService, dashboardService } from '../../api//services';

const MedicineManagement = () => {
  const [showAddMedicine, setShowAddMedicine] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // State for medicine data
  const [medicines, setMedicines] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [statistics, setStatistics] = useState({
    adherenceRate: 0,
    upcomingRefills: 0,
    totalMedicines: 0,
    totalSchedules: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State for form inputs
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    frequency: 'daily'
  });
  
  const [newSchedule, setNewSchedule] = useState({
    medicineId: '',
    time: '09:00',
    days: {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false
    },
    reminderType: 'push'
  });

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/dash" },
    { icon: <Pill size={20} />, label: 'Medicines', path: '/meds' },
    { icon: <Calendar size={20} />, label: 'Schedule', path: '/schedule' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <ShoppingBag size={20} />, label: 'MedMart', path: '/medmart' },
  ];
  
  // Fetch medicines, schedules, and stats on component mount
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch all data in parallel
      const [medicinesData, schedulesData, statsData] = await Promise.all([
        medicineService.getAllMedicines(),
        scheduleService.getAllSchedules(),
        dashboardService.getDashboardStats()
      ]);
      
      setMedicines(medicinesData);
      setSchedules(schedulesData);
      
      if (statsData && statsData.data) {
        setStatistics(statsData.data);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle medicine form input changes
  const handleMedicineInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine({
      ...newMedicine,
      [name]: value
    });
  };
  
  // Handle schedule form input changes
  const handleScheduleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule({
      ...newSchedule,
      [name]: value
    });
  };
  
  // Handle day selection in the schedule form
  const handleDayToggle = (day) => {
    setNewSchedule({
      ...newSchedule,
      days: {
        ...newSchedule.days,
        [day]: !newSchedule.days[day]
      }
    });
  };
  
  // Submit new medicine to the backend
  const handleAddMedicine = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const response = await medicineService.createMedicine(newMedicine);
      
      // Update the medicines state with the new medicine
      setMedicines([...medicines, response]);
      
      // Reset the form
      setNewMedicine({
        name: '',
        dosage: '',
        frequency: 'daily'
      });
      
      // Close the modal
      setShowAddMedicine(false);
      setError(null);
    } catch (err) {
      console.error('Error adding medicine:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Submit new schedule to the backend
  const handleAddSchedule = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const response = await scheduleService.createSchedule(newSchedule);
      
      // Update the schedules state with the new schedule
      setSchedules([...schedules, response]);
      
      // Reset the form
      setNewSchedule({
        medicineId: '',
        time: '09:00',
        days: {
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false
        },
        reminderType: 'push'
      });
      
      // Close the modal
      setShowSchedule(false);
      setError(null);
    } catch (err) {
      console.error('Error adding schedule:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // Delete a medicine
  const handleDeleteMedicine = async (medicineId) => {
    try {
      setLoading(true);
      await medicineService.deleteMedicine(medicineId);
      
      // Update medicines list by removing the deleted medicine
      setMedicines(medicines.filter(med => med._id !== medicineId));
      setError(null);
    } catch (err) {
      console.error('Error deleting medicine:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update a schedule status (taken, skipped)
  const handleScheduleStatus = async (scheduleId, status) => {
    try {
      setLoading(true);
      const updatedSchedule = await scheduleService.updateScheduleStatus(scheduleId, status);
      
      // Update the schedule in the state
      setSchedules(schedules.map(schedule => 
        schedule._id === scheduleId ? updatedSchedule : schedule
      ));
      
      setError(null);
    } catch (err) {
      console.error(`Error marking schedule as ${status}:`, err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get formatted day names from the days object
  const getScheduleDays = (daysObject) => {
    const dayNames = {
      sunday: 'S',
      monday: 'M',
      tuesday: 'T',
      wednesday: 'W',
      thursday: 'T',
      friday: 'F',
      saturday: 'S'
    };
    
    return Object.entries(daysObject)
      .filter(([_, isSelected]) => isSelected)
      .map(([day, _]) => dayNames[day])
      .join(', ');
  };
  
  // Helper function to get medicine name by ID
  const getMedicineName = (medicineId) => {
    const medicine = medicines.find(med => med._id === medicineId);
    return medicine ? medicine.name : 'Unknown';
  };

  // Format a time string for display (e.g., "09:00" -> "9:00 AM")
  const formatTimeForDisplay = (timeString) => {
    try {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours, 10);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    } catch (error) {
      return timeString;
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white/95 backdrop-blur-sm border-r border-gray-200 transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Stethoscope className="text-teal-600" size={24} />
            <h1 className={`font-bold text-xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent transition-opacity duration-300 ${!isSidebarOpen && 'opacity-0'}`}>
              MedEase
            </h1>
          </div>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation Menu */}
        <nav className="flex-1 p-2">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.path}
              className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 group"
            >
              <div className="text-teal-500">{item.icon}</div>
              {isSidebarOpen && 
                <span className="transition-transform group-hover:translate-x-1 duration-300">
                  {item.label}
                </span>
              }
            </a>
          ))}
        </nav>

        {/* Bottom Menu */}
        <div className="p-2 border-t border-gray-200">
          <a href="/settings" className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
            <Settings size={20} className="text-teal-500" />
            {isSidebarOpen && <span>Settings</span>}
          </a>
          <a href="/logout" className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
            <LogOut size={20} className="text-teal-500" />
            {isSidebarOpen && <span>Logout</span>}
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Medicine Management
            </h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                <Bell size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                <User size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Actions Bar */}
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowAddMedicine(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 group"
              >
                <Plus size={20} />
                <span>Add Medicine</span>
              </button>
              <button 
                onClick={() => setShowSchedule(true)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300 text-gray-700"
              >
                <Calendar size={20} className="text-teal-500" />
                <span>Set Schedule</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search medicines..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="p-2 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                <Filter size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="m-4 p-4 bg-red-50 border border-red-200 text-red-500 rounded-lg">
            <p className="flex items-center">
              <AlertCircle size={16} className="mr-2" />
              {error}
            </p>
          </div>
        )}

        {/* Content Area */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Current Medicines Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <Pill className="text-teal-500" size={20} />
                  <span>Current Medicines</span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {loading ? (
                  <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                  </div>
                ) : medicines.length === 0 ? (
                  <div className="text-center p-8 text-gray-500">
                    <Pill size={40} className="mx-auto mb-4 text-gray-300" />
                    <p>No medicines added yet</p>
                    <button 
                      onClick={() => setShowAddMedicine(true)}
                      className="mt-2 text-teal-500 hover:text-teal-600 flex items-center justify-center space-x-1 mx-auto"
                    >
                      <Plus size={16} />
                      <span>Add your first medicine</span>
                    </button>
                  </div>
                ) : (
                  medicines.map((medicine, index) => (
                    <div key={index} className="group p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800 capitalize">{medicine.name}</h4>
                          <p className="text-gray-500 text-sm capitalize ">{medicine.dosage} <span className="lowercase">pill</span> - {medicine.frequency}</p>
                          <p className="text-teal-500 text-sm">
                            {schedules.some(schedule => schedule.medicineId._id === medicine._id) 
                              ? `Next dose: ${formatTimeForDisplay(schedules.find(schedule => schedule.medicineId === medicine._id)?.time || '09:00')}`
                              : 'No schedule set'}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <button 
                            className="p-1 rounded-full text-gray-400 hover:text-teal-500 hover:bg-teal-50 transition-colors duration-300"
                            onClick={() => {
                              // Edit functionality would go here
                              console.log('Edit medicine:', medicine);
                            }}
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            className="p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-300"
                            onClick={() => handleDeleteMedicine(medicine._id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <CalendarIcon className="text-teal-500" size={20} />
                  <span>Today's Schedule</span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {loading ? (
                  <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                  </div>
                ) : schedules.length === 0 ? (
                  <div className="text-center p-8 text-gray-500">
                    <Calendar size={40} className="mx-auto mb-4 text-gray-300" />
                    <p>No schedules set yet</p>
                    <button 
                      onClick={() => setShowSchedule(true)}
                      className="mt-2 text-teal-500 hover:text-teal-600 flex items-center justify-center space-x-1 mx-auto"
                    >
                      <Plus size={16} />
                      <span>Create your first schedule</span>
                    </button>
                  </div>
                ) : (
                  schedules.map((schedule, index) => (
                    <div key={index} className="group p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                      <div className="flex items-center">
                        <Clock className="text-teal-500" size={20} />
                        <div className="ml-3 flex-1">
                          <p className="text-gray-800 font-medium">{formatTimeForDisplay(schedule.scheduledTime)}</p>
                          <p className="text-gray-500 text-sm"><span className="capitalize">{schedule.medicineId.name}</span> - {schedule.medicineId.dosage} pill</p>
                          <p className="text-xs text-gray-400">
                            {getScheduleDays(schedule.days)} {schedule.days && Object.values(schedule.days).some(day => day) ? '' : 'No days selected'}
                          </p>
                        </div>
                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button 
                            className="px-3 py-1 bg-teal-100 text-teal-600 rounded-lg hover:bg-teal-200 transition-colors duration-300"
                            onClick={() => handleScheduleStatus(schedule._id, 'taken')}
                          >
                            Take
                          </button>
                          <button 
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                            onClick={() => handleScheduleStatus(schedule._id, 'skipped')}
                          >
                            Skip
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span>Medicine Statistics</span>
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50">
                  <p className="text-gray-600">Adherence Rate</p>
                  <p className="text-2xl font-semibold text-teal-600">
                    {statistics.adherenceRate || 0}%
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50">
                  <p className="text-gray-600">Total Medicines</p>
                  <p className="text-2xl font-semibold text-teal-600">{statistics.totalMedicines || 0}</p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50">
                  <p className="text-gray-600">Upcoming Refills</p>
                  <p className="text-2xl font-semibold text-teal-600">{statistics.upcomingRefills || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Medicine Modal */}
      {showAddMedicine && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 animate-fade-in-up">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Add New Medicine
              </h3>
              <button 
                onClick={() => setShowAddMedicine(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleAddMedicine} className="space-y-4">
                {/* Medicine Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Medicine Name
                  </label>
                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'name' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <Pill size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={newMedicine.name}
                      onChange={handleMedicineInputChange}
                      placeholder="Enter medicine name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Dosage Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dosage
                  </label>
                  <input
                    type="text"
                    name="dosage"
                    value={newMedicine.dosage}
                    onChange={handleMedicineInputChange}
                    placeholder="E.g., 1 pill"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Frequency Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
                  </label>
                  <select 
                    name="frequency"
                    value={newMedicine.frequency}
                    onChange={handleMedicineInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="as needed">As Needed</option>
                  </select>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddMedicine(false)}
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                        Processing...
                      </>
                    ) : 'Add Medicine'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showSchedule && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300 animate-fade-in-up">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Set Medicine Schedule
              </h3>
              <button 
                onClick={() => setShowSchedule(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleAddSchedule} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Medicine
                  </label>
                  <select 
                    name="medicineId"
                    value={newSchedule.medicineId}
                    onChange={handleScheduleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Choose a medicine</option>
                    {medicines.map((medicine, index) => (
                      <option key={index} value={medicine._id}>{medicine.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input 
                    type="time"
                    name="time"
                    value={newSchedule.time}
                    onChange={handleScheduleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Repeat
                  </label>
                  <div className="flex justify-between">
                    {[
                      { key: 'sunday', label: 'S' },
                      { key: 'monday', label: 'M' },
                      { key: 'tuesday', label: 'T' },
                      { key: 'wednesday', label: 'W' },
                      { key: 'thursday', label: 'T' },
                      { key: 'friday', label: 'F' },
                      { key: 'saturday', label: 'S' }
                    ].map((day, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          newSchedule.days[day.key] 
                            ? 'bg-teal-500 text-white border-transparent' 
                            : 'border border-gray-200 text-gray-700 hover:border-teal-500 hover:bg-teal-50'
                        }`}
                        onClick={() => handleDayToggle(day.key)}
                      >
                        {day.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reminder Type
                  </label>
                  <select 
                    name="reminderType"
                    value={newSchedule.reminderType}
                    onChange={handleScheduleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="push">Push Notification</option>
                    <option value="sms">SMS</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSchedule(false)}
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2 group"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Save Schedule</span>
                        <ChevronRight size={20} className="transform transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                   </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MedicineManagement;