import React from "react";
import Sidebar from "./Sidebar";
import { Clock, Calendar, Bell, Pill, Activity } from "lucide-react";

const DashboardContent = () => {
  const upcomingMeds = [
    { name: "Amoxicillin", time: "9:00 AM", dosage: "500mg" },
    { name: "Paracetamol", time: "2:00 PM", dosage: "250mg" },
    { name: "Vitamin D3", time: "8:00 PM", dosage: "1000mg" },
  ];

  const todaySchedule = [
    { time: "9:00 AM", task: "Morning Medicine", status: "completed" },
    { time: "2:00 PM", task: "Afternoon Medicine", status: "pending" },
    { time: "8:00 PM", task: "Evening Medicine", status: "pending" },
  ];

  return (
    <div className="relative min-h-screen p-6 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 ">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />

        {/* Bottom-left decorative circle */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />

        {/* Medical cross pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5,
          }}
        />

        {/* Animated pulse circles */}
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-400 rounded-full opacity-20 animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-ping"
          style={{ animationDuration: "4s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Medicines Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Pill className="mr-2 text-teal-500" size={20} />
                Upcoming Medicines
              </h3>
              <span className="text-sm text-teal-500 font-medium">
                {upcomingMeds.length} pending
              </span>
            </div>

            <div className="space-y-4">
              {upcomingMeds.map((med, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-4 hover:bg-white/80 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-800">{med.name}</h4>
                      <p className="text-sm text-gray-500">{med.dosage}</p>
                    </div>
                    <div className="flex items-center text-teal-500">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">{med.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Schedule Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Calendar className="mr-2 text-blue-500" size={20} />
                Today's Schedule
              </h3>
              <span className="text-sm text-blue-500 font-medium">
                {
                  todaySchedule.filter((item) => item.status === "completed")
                    .length
                }
                /{todaySchedule.length} Done
              </span>
            </div>

            <div className="space-y-4">
              {todaySchedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg"
                >
                  <div
                    className={`w-2 h-2 rounded-full mr-4 ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{item.task}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      item.status === "completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {item.status === "completed" ? "Completed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Activity className="mr-2 text-purple-500" size={20} />
                Recent Activities
              </h3>
              <Bell className="text-purple-500" size={20} />
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-purple-500 pl-4 py-2">
                <p className="text-gray-800 font-medium">Medicine Taken</p>
                <p className="text-sm text-gray-500">Amoxicillin - 9:00 AM</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
              <div className="border-l-2 border-yellow-500 pl-4 py-2">
                <p className="text-gray-800 font-medium">Upcoming Reminder</p>
                <p className="text-sm text-gray-500">Paracetamol - 2:00 PM</p>
                <p className="text-xs text-gray-400 mt-1">in 2 hours</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4 py-2">
                <p className="text-gray-800 font-medium">Missed Medicine</p>
                <p className="text-sm text-gray-500">Vitamin C - 8:00 AM</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
