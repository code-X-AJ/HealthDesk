import React, { useState } from 'react';
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
  ShoppingBag
} from 'lucide-react';

const MedicineManagement = () => {
  const [showAddMedicine, setShowAddMedicine] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/dash" },
    { icon: <Pill size={20} />, label: 'Medicines', path: '/meds' },
    { icon: <Calendar size={20} />, label: 'Schedule', path: '/schedule' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <ShoppingBag size={20} />, label: 'MedMart', path: '/medmart' },
  ];

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
                {/* Medicine Item */}
                <div className="group p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800">Aspirin</h4>
                      <p className="text-gray-500 text-sm">1 pill - Daily</p>
                      <p className="text-teal-500 text-sm">Next dose: 9:00 AM</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MoreVertical size={20} className="text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                </div>
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
                {/* Schedule Item */}
                <div className="group p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center">
                    <Clock className="text-teal-500" size={20} />
                    <div className="ml-3 flex-1">
                      <p className="text-gray-800 font-medium">9:00 AM</p>
                      <p className="text-gray-500 text-sm">Aspirin - 1 pill</p>
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="px-3 py-1 bg-teal-100 text-teal-600 rounded-lg hover:bg-teal-200 transition-colors duration-300">
                        Take
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                        Skip
                      </button>
                    </div>
                  </div>
                </div>
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
                  <p className="text-2xl font-semibold text-teal-600">85%</p>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50">
                  <p className="text-gray-600">Upcoming Refills</p>
                  <p className="text-2xl font-semibold text-teal-600">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Medicine Modal */}
      {showAddMedicine && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
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
              <form className="space-y-4">
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
                      placeholder="Enter medicine name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
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
                    placeholder="E.g., 1 pill"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Frequency Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
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
                    className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Add Medicine
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showSchedule && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
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
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Medicine
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
                    <option value="">Choose a medicine</option>
                    <option value="aspirin">Aspirin</option>
                    <option value="other">Other Medicine</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input 
                    type="time"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Repeat
                  </label>
                  <div className="flex justify-between">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-teal-500 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reminder Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
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
                  >
                    <span>Save Schedule</span>
                    <ChevronRight size={20} className="transform transition-transform group-hover:translate-x-1" />
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






// import React, { useState } from 'react';

// // const MedicineCom = () => {
// //   const [medicines, setMedicines] = useState([
// //     {
// //       id: 1,
// //       name: 'Aspirin',
// //       dosage: '100mg',
// //       schedule: 'Once Daily',
// //       time: '08:00 AM'
// //     },
// //     {
// //       id: 2,
// //       name: 'Vitamin D',
// //       dosage: '2000 IU',
// //       schedule: 'Once Daily',
// //       time: '09:00 AM'
// //     }
// //   ]);

// //   const [newMedicine, setNewMedicine] = useState({
// //     name: '',
// //     dosage: '',
// //     schedule: 'Once Daily',
// //     time: ''
// //   });

// //   const [alarmSettings, setAlarmSettings] = useState({
// //     type: 'Sound',
// //     reminderBefore: '5 minutes'
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewMedicine(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const addMedicine = () => {
// //     if (!newMedicine.name || !newMedicine.dosage) return;

// //     setMedicines([
// //       ...medicines, 
// //       { 
// //         ...newMedicine, 
// //         id: Date.now() 
// //       }
// //     ]);

// //     // Reset form
// //     setNewMedicine({
// //       name: '',
// //       dosage: '',
// //       schedule: 'Once Daily',
// //       time: ''
// //     });
// //   };

// //   const deleteMedicine = (id) => {
// //     setMedicines(medicines.filter(med => med.id !== id));
// //   };

// //   return (
// //     <div className="bg-gray-50 min-h-screen py-8">
// //       <div className="container mx-auto max-w-4xl px-4">
// //         <div className="bg-white shadow-xl rounded-2xl overflow-hidden border-t-4 border-blue-500">
// //           {/* Header */}
// //           <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
// //             <div className="flex items-center justify-between">
// //               <h1 className="text-2xl font-bold flex items-center">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                 </svg>
// //                 Medicine Management
// //               </h1>
// //             </div>
// //           </div>

// //           {/* Add Medicine Section */}
// //           <div className="p-6 bg-gray-50">
// //             <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Medicine</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-gray-700 mb-2 font-medium">Medicine Name</label>
// //                 <input 
// //                   type="text" 
// //                   name="name"
// //                   value={newMedicine.name}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200" 
// //                   placeholder="Enter medicine name"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-gray-700 mb-2 font-medium">Dosage</label>
// //                 <input 
// //                   type="text" 
// //                   name="dosage"
// //                   value={newMedicine.dosage}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200" 
// //                   placeholder="e.g., 2 tablets"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-gray-700 mb-2 font-medium">Schedule</label>
// //                 <select 
// //                   name="schedule"
// //                   value={newMedicine.schedule}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
// //                 >
// //                   <option>Once Daily</option>
// //                   <option>Twice Daily</option>
// //                   <option>Three Times Daily</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block text-gray-700 mb-2 font-medium">Time</label>
// //                 <input 
// //                   type="time" 
// //                   name="time"
// //                   value={newMedicine.time}
// //                   onChange={handleInputChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
// //                 />
// //               </div>
// //             </div>
// //             <button 
// //               onClick={addMedicine}
// //               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
// //             >
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
// //                 <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
// //               </svg>
// //               Add Medicine
// //             </button>
// //           </div>

// //           {/* Medicine List Section */}
// //           <div className="p-6 border-t border-gray-200">
// //             <h2 className="text-xl font-semibold mb-4 text-gray-800">Scheduled Medicines</h2>
// //             {medicines.length === 0 ? (
// //               <div className="text-center text-gray-500 bg-white p-6 rounded-md border border-gray-200">
// //                 No medicines added yet. Start by adding a new medicine!
// //               </div>
// //             ) : (
// //               <div className="space-y-4">
// //                 {medicines.map((medicine) => (
// //                   <div 
// //                     key={medicine.id} 
// //                     className="bg-white p-4 rounded-md shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition duration-300"
// //                   >
// //                     <div>
// //                       <h3 className="font-semibold text-gray-800">{medicine.name}</h3>
// //                       <p className="text-gray-600">Dosage: {medicine.dosage}</p>
// //                       <p className="text-sm text-gray-500">
// //                         Schedule: {medicine.schedule} at {medicine.time}
// //                       </p>
// //                     </div>
// //                     <div className="flex space-x-2">
// //                       <button 
// //                         className="text-blue-500 hover:bg-blue-100 p-2 rounded-full transition duration-300"
// //                         title="Edit"
// //                       >
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                           <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
// //                         </svg>
// //                       </button>
// //                       <button 
// //                         onClick={() => deleteMedicine(medicine.id)}
// //                         className="text-red-500 hover:bg-red-100 p-2 rounded-full transition duration-300"
// //                         title="Delete"
// //                       >
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                           <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
// //                         </svg>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>

// //           {/* Alarm Settings Section */}
// //           <div className="p-6 border-t border-gray-200 bg-gray-50">
// //             <h2 className="text-xl font-semibold mb-4 text-gray-800">Alarm Settings</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <label className="block text-gray-700 mb-2 font-medium">Alarm Type</label>
// //                 <select 
// //                   value={alarmSettings.type}
// //                   onChange={(e) => setAlarmSettings(prev => ({...prev, type: e.target.value}))}
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
// //                 >
// //                   <option>Sound</option>
// //                   <option>Vibration</option>
// //                   <option>Both</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block text-gray-700 mb-2 font-medium">Reminder Before</label>
// //                 <select 
// //                   value={alarmSettings.reminderBefore}
// //                   onChange={(e) => setAlarmSettings(prev => ({...prev, reminderBefore: e.target.value}))}
// //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
// //                 >
// //                   <option>5 minutes</option>
// //                   <option>10 minutes</option>
// //                   <option>15 minutes</option>
// //                 </select>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MedicineCom;


// function MedicationPage() {
//   const [medications, setMedications] = useState([]);
//   const [newMed, setNewMed] = useState({
//     name: '',
//     dosage: '',
//     frequency: 'daily',
//     times: ['08:00'],
//     alarmSound: 'default'
//   });

//   const handleAddTime = () => {
//     setNewMed({...newMed, times: [...newMed.times, '08:00']});
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       {/* Add Medication Form */}
//       <div className="bg-white rounded-lg shadow p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Add New Medication</h2>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Medicine Name</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               placeholder="e.g., Paracetamol"
//               value={newMed.name}
//               onChange={(e) => setNewMed({...newMed, name: e.target.value})}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Dosage</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 placeholder="e.g., 500mg"
//                 value={newMed.dosage}
//                 onChange={(e) => setNewMed({...newMed, dosage: e.target.value})}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Frequency</label>
//               <select 
//                 className="w-full p-2 border rounded"
//                 value={newMed.frequency}
//                 onChange={(e) => setNewMed({...newMed, frequency: e.target.value})}
//               >
//                 <option>Daily</option>
//                 <option>Weekly</option>
//                 <option>As Needed</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Schedule Times</label>
//             <div className="space-y-2">
//               {newMed.times.map((time, index) => (
//                 <div key={index} className="flex gap-2">
//                   <input
//                     type="time"
//                     className="p-2 border rounded flex-1"
//                     value={time}
//                     onChange={(e) => {
//                       const newTimes = [...newMed.times];
//                       newTimes[index] = e.target.value;
//                       setNewMed({...newMed, times: newTimes});
//                     }}
//                   />
//                   {index > 0 && (
//                     <button 
//                       className="px-3 bg-red-100 text-red-600 rounded"
//                       onClick={() => setNewMed({
//                         ...newMed,
//                         times: newMed.times.filter((_, i) => i !== index)
//                       })}
//                     >
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button 
//                 onClick={handleAddTime}
//                 className="text-blue-600 text-sm flex items-center gap-1"
//               >
//                 <PlusIcon className="w-4 h-4" />
//                 Add Another Time
//               </button>
//             </div>
//           </div>

//           <div className="border-t pt-4 mt-4">
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//               Save Medication Schedule
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Existing Medications */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-xl font-semibold mb-4">Scheduled Medications</h2>
        
//         <div className="space-y-3">
//           {medications.map((med, index) => (
//             <div key={index} className="border rounded-lg p-4">
//               <div className="flex justify-between items-start mb-2">
//                 <div>
//                   <h3 className="font-medium">{med.name}</h3>
//                   <p className="text-sm text-gray-600">{med.dosage}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button className="text-blue-600 text-sm">Edit</button>
//                   <button className="text-red-600 text-sm">Delete</button>
//                 </div>
//               </div>
//               <div className="text-sm">
//                 <p>Times: {med.times.join(', ')}</p>
//                 <p>Frequency: {med.frequency}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Simple Plus icon component
// function PlusIcon() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//     </svg>
//   );
// }


// export default MedicationPage;

