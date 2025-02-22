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



function Sidebar2() {
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
<div>
  <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white/95 backdrop-blur-sm border-r border-gray-200 transition-all duration-300 flex flex-col min-h-screen`}>
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
    <div className="mt-auto p-2 border-t border-gray-200">
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
</div>
  )
}

export default Sidebar2
