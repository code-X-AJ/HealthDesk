import React from 'react'
import Schedule from '../../components/schedule/Schedule'
import Header from '../../components/dashboard/Header'
import Sidebar2 from '../../components/dashboard/Sidebar2'

function SchedulePage() {
  return (
    <div>
          <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ">
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <Sidebar2 />

          <Schedule/>
      {/* <div className={`flex-1 transition-all duration-300`}>
        <main className="p-6">
          <Schedule/>
        </main>
      </div> */}
    </div>

    </div>
  )
}

export default SchedulePage
