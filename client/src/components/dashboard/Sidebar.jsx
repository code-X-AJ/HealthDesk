import React, { useState } from "react";
import {
  Home,
  PlusCircle,
  Calendar,
  Clock,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Stethoscope,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/dash" },
    { icon: <PlusCircle size={20} />, label: "Medicines", path: "/meds" },
    { icon: <Calendar size={20} />, label: "Schedule", path: "/schedule" },
    { icon: <Clock size={20} />, label: "Reminders", path: "/reminders" },
    { icon: <User size={20} />, label: "Profile", path: "/profile" },
  ];

  return (
    <aside
      className={`
      ${isOpen ? "w-64" : "w-24"} 
      bg-white border-r border-r-gray-100
      transition-all duration-300 ease-in-out
      shadow-lg
    `}
    >
      <div className="">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-teal-500/10 to-blue-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope
              className={`text-teal-600 transition-transform duration-300 ${
                !isOpen && "rotate-90"
              }`}
              size={24}
            />
            <h1
              className={`
              font-bold text-gray-800
              transition-all duration-300
              ${!isOpen ? "opacity-0 w-0" : "opacity-100 w-auto"}
            `}
            >
              HealthDesk
            </h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-white/80 text-gray-600 transition-colors duration-200"
          >
            {/* {isOpen ? <X size={20} /> : <span onClick={toggle} > <Menu size={70}  /></span>} */}
            {isOpen ? (
  <X size={30} onClick={toggle} className="cursor-pointer" />
) : (
  <span onClick={toggle} className="cursor-pointer">
    <Menu size={30} />
  </span>
)}

          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      {/* <nav className="p-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            className="flex items-center space-x-2 p-3 my-1 rounded-lg group
              hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-blue-500/10
              transition-all duration-200"
          >
            <div
              className={`
              text-gray-500 group-hover:text-teal-600
              transition-all duration-200
              ${hoveredItem === index ? "scale-110" : "scale-100"}
            `}
            >
              {item.icon}
            </div>
            <span
              className={`
              text-gray-600 group-hover:text-gray-800
              transition-all duration-300
              ${!isOpen ? "opacity-0 w-0" : "opacity-100 w-auto"}
            `}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav> */}

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
      <div className="absolute bottom-0 p-2 border-t border-gray-100 bg-gray-50">
        <a
          href="/settings"
          className="flex items-center space-x-2 p-3 rounded-lg
            hover:bg-white group transition-all duration-200"
        >
          <Settings
            size={20}
            className="text-gray-500 group-hover:text-teal-600 transition-colors duration-200"
          />
          <span
            className={`
            text-gray-600 group-hover:text-gray-800
            transition-all duration-300
            ${!isOpen ? "opacity-0 w-0" : "opacity-100 w-auto"}
          `}
          >
            Settings
          </span>
        </a>
        <a
          href="/logout"
          className="flex items-center space-x-2 p-3 rounded-lg
            hover:bg-red-50 group transition-all duration-200"
        >
          <LogOut
            size={20}
            className="text-gray-500 group-hover:text-red-600 transition-colors duration-200"
          />
          <span
            className={`
            text-gray-600 group-hover:text-red-600
            transition-all duration-300
            ${!isOpen ? "opacity-0 w-0" : "opacity-100 w-auto"}
          `}
          >
            Logout
          </span>
        </a>
      </div>
      </div>

    </aside>
  );
};

export default Sidebar;
