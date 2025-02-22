import React, { useState } from 'react';
import { 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Bell,
  User,
  Pill,
  CheckCircle2,
  XCircle,
  CalendarDays,
  AlertCircle,
  Stethoscope
} from 'lucide-react';

const Schedule = () => {
  const [hoveredDay, setHoveredDay] = useState(null);

  // Example data for demo
  const adherenceData = {
    1: 'high',
    2: 'medium',
    3: 'low',
    4: 'missed',
  };

  const getAdherenceColor = (level) => {
    switch(level) {
      case 'high': return 'bg-teal-500';
      case 'medium': return 'bg-teal-300';
      case 'low': return 'bg-teal-200';
      case 'missed': return 'bg-red-200';
      default: return 'bg-gray-100';
    }
  };

  return (
    <main className="flex-1 bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <CalendarDays className="text-teal-600" size={24} />
            <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Medicine Schedule
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative group">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 rounded-full text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Adherence Calendar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 max-w-lg mx-auto transform transition-all duration-300 hover:scale-[1.02]">
            <div className="border-b border-gray-200 p-3 flex justify-between items-center">
              <h3 className="font-medium text-gray-800 flex items-center space-x-2">
                <CheckCircle2 className="text-teal-500" size={18} />
                <span>Monthly Adherence</span>
              </h3>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <ChevronLeft size={16} className="text-gray-600" />
                </button>
                <span className="text-sm text-gray-600 font-medium">September 2024</span>
                <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="p-3">
              <div className="grid grid-cols-7 text-xs mb-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="h-6 flex items-center justify-center text-gray-500 font-medium">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {[...Array(35)].map((_, i) => (
                  <div 
                    key={i}
                    className="relative group"
                    onMouseEnter={() => setHoveredDay(i)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    <div className={`w-6 h-6 rounded-sm flex items-center justify-center text-xs transition-all duration-300
                      ${adherenceData[i % 4] ? getAdherenceColor(adherenceData[i % 4]) : 'bg-gray-100'}
                      ${hoveredDay === i ? 'transform scale-110' : ''}
                    `}>
                      {i + 1}
                    </div>
                    {hoveredDay === i && adherenceData[i % 4] && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                        {adherenceData[i % 4] === 'missed' ? 'Missed dose' : 'All doses taken'}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-1 items-center text-xs space-x-1 text-gray-600">
                <span>Less</span>
                {[1,2,3,4].map(level => (
                  <div key={level} className={`w-3 h-3 rounded-sm ${getAdherenceColor(Object.keys(adherenceData)[level-1])}`}></div>
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Schedule Timeline */}
            <div className="col-span-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-200 p-3">
                <h3 className="font-medium text-gray-800 flex items-center space-x-2">
                  <Clock className="text-teal-500" size={18} />
                  <span>Today's Schedule</span>
                </h3>
              </div>
              <div className="p-4">
                <div className="border-l-2 border-teal-200">
                  {/* Completed Medicine */}
                  <div className="ml-4 mb-4 relative group">
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-teal-500 border-2 border-white"></div>
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-3 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-800">9:00 AM</span>
                        <span className="text-teal-600">Morning Dose</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Pill className="text-teal-500 mr-2" size={16} />
                        <p className="text-sm text-gray-600">Aspirin - 1 tablet</p>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-teal-600">
                        <CheckCircle2 size={16} className="mr-1" />
                        <span>Taken at 9:15 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Medicine */}
                  <div className="ml-4 mb-4 relative group">
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 transform transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-800">2:00 PM</span>
                        <span className="text-gray-600">Afternoon Dose</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Pill className="text-gray-500 mr-2" size={16} />
                        <p className="text-sm text-gray-600">Vitamin D - 1 capsule</p>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span>Upcoming</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="col-span-4 space-y-6">
              {/* Next Appointment */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="border-b border-gray-200 p-3">
                  <h3 className="font-medium text-gray-800 flex items-center space-x-2">
                    <Stethoscope className="text-teal-500" size={18} />
                    <span>Next Appointment</span>
                  </h3>
                </div>
                <div className="p-3">
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-3 rounded-lg">
                    <div className="flex items-center text-gray-800">
                      <User size={16} className="mr-2 text-teal-500" />
                      <span className="font-medium">Dr. Smith</span>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <p>Cardiologist</p>
                      <p>Sept 20, 2024</p>
                      <p>10:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medicine Alerts */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="border-b border-gray-200 p-3">
                  <h3 className="font-medium text-gray-800 flex items-center space-x-2">
                    <AlertCircle className="text-teal-500" size={18} />
                    <span>Medicine Alerts</span>
                  </h3>
                </div>
                <div className="p-3">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="flex items-center text-red-600">
                      <AlertCircle size={16} className="mr-2" />
                      <p className="text-sm font-medium">Refill Needed</p>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <p>Aspirin</p>
                      <p>10 pills remaining</p>
                      <p className="text-red-600">Refill in 5 days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Stats */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="border-b border-gray-200 p-3">
                  <h3 className="font-medium text-gray-800 flex items-center space-x-2">
                    <CheckCircle2 className="text-teal-500" size={18} />
                    <span>Monthly Overview</span>
                  </h3>
                </div>
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Taken</p>
                      <p className="text-xl font-semibold text-teal-600">85</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Missed</p>
                      <p className="text-xl font-semibold text-red-600">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default Schedule;

// import React from 'react'

// function Schedule() {
//   return (
//     <div>
//       Schedule
//     </div>
//   )
// }

// export default Schedule
