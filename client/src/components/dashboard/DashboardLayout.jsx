import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardContent from "./DashboardContent";
import Sidebar2 from "./Sidebar2";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ">
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <Sidebar2 />

      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen}`}>
        <div className="">
          <Header />
        </div>
        <main className="p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
