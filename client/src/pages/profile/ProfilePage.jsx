import Schedule from "../../components/schedule/Schedule";
import ProfileLayout from "../../components/profile/ProfileLayout";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import Header from "../../components/dashboard/Header";
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
} from "lucide-react";
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function ProfilePage() {

  const navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(!localStorage.getItem('user')){
  //     navigate("/auth")
  //   }
  // })

  return (
    <div>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ">
        {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
        <Sidebar2 />
        <div className={`flex-1 transition-all duration-300`}>
          {/* <div className="">
          <Header />
        </div> */}

          <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Profile
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

          <main className="p-6">
            <ProfileLayout />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
