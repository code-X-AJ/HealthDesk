// import React from 'react'
// import Schedule from '../../components/schedule/Schedule'
// import Header from '../../components/dashboard/Header'

// function MedMartPage() {
//     return (
//         <div>
//               <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ">
//           <Sidebar2 />

//         </div>

//         </div>
//   )
// }

// export default MedMartPage

import React, { useState, useEffect } from "react";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import {
  ShoppingBag,
  Clock,
  Bell,
  Mail,
  Package,
  Truck,
  ShieldCheck,
  Heart,
  User,
} from "lucide-react";
// import { Alert } from '@/components/ui/alert';
import { useNavigate } from "react-router-dom";

const MedMartComingSoon = () => {
  
  // const navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(!localStorage.getItem('user')){
  //     navigate("/auth")
  //   }
  // })

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isNotifying, setIsNotifying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNotifyMe = () => {
    setIsNotifying(true);
    setTimeout(() => setIsNotifying(false), 2000);
  };

  const features = [
    {
      icon: <Package className="text-teal-500" />,
      title: "Wide Selection",
      description:
        "Access to a comprehensive range of medications and healthcare products",
    },
    {
      icon: <Truck className="text-blue-500" />,
      title: "Quick Delivery",
      description: "Fast and reliable delivery right to your doorstep",
    },
    {
      icon: <ShieldCheck className="text-indigo-500" />,
      title: "Verified Products",
      description: "All medicines sourced from authorized distributors",
    },
  ];

  return (
<>
    
<div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ">
        {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
        <Sidebar2 />
        <div className={`flex-1 transition-all duration-300`}>


        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                MedMart
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
    
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 transform
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {" "}
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <ShoppingBag size={40} className="text-teal-600" />
            <h1 className="text-4xl font-bold text-gray-800 ml-3">MedMart</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Your One-Stop Medicine Marketplace
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working hard to bring you a convenient and reliable way to
            order your medications online. Stay tuned for an experience that
            will revolutionize how you manage your medical supplies.
          </p>
        </div>
        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-full px-6 py-2 text-white
            flex items-center gap-2 animate-pulse"
          >
            <Clock size={20} />
            <span className="font-semibold">Coming Soon</span>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100
                transform transition-all duration-500 hover:shadow-md hover:scale-105
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Notification Form */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="text-teal-600" />
            Get Notified When We Launch
          </h3>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleNotifyMe}
              className={`px-6 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white
                font-medium transition-all duration-300 hover:shadow-lg hover:scale-105
                flex items-center gap-2 ${isNotifying ? "bg-green-500" : ""}`}
            >
              {isNotifying ? (
                <>
                  <Heart className="animate-bounce" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Mail />
                  Notify Me
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

</>

  );
};

export default MedMartComingSoon;
