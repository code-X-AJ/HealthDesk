import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import DashboardContent from '../../components/dashboard/DashboardContent'
import Sidebar from '../../components/dashboard/Sidebar'
import Header from '../../components/dashboard/Header'
import DashboardLayout from '../../components/dashboard/DashboardLayout'
import Sidebar2 from '../../components/dashboard/Sidebar2'

function Dashboard() {
  // const navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(!localStorage.getItem('user')){
  //     navigate("/auth")
  //   }
  // })

  return (
    <div>
      {/* <DashboardContent /> */}
      {/* <Sidebar /> */}
        {/* <Header /> */}
        <DashboardLayout />
    </div>
  )
}

export default Dashboard
