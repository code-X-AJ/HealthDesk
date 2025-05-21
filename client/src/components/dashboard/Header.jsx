import React, { useState, useEffect } from 'react';
import { Clock, User, Bell } from 'lucide-react';

const Header = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const userString = localStorage.getItem('user');
            if (userString) {
                const userObj = JSON.parse(userString);
                setUserData(userObj);
            }
        } catch (error) {
            console.error("Error loading user data:", error);
        }
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    if (isLoading) {
        return (
            <header className="bg-gradient-to-r from-teal-500 to-blue-500 py-4 px-6 sticky top-0 shadow-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                </div>
            </header>
        );
    }

    return (
        <header className="bg-gradient-to-r from-teal-500 to-blue-500 py-4 px-6 sticky top-0 shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full bg-white bg-gradient-to-r from-teal-400 to-blue-300 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        <Clock className="text-white" size={24} />
                    </button>
                    <button className="p-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-300 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white relative">
                        <Bell className="text-white" size={24} />
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>
                    {userData && (
                        <button className="flex items-center space-x-2 bg-white text-teal-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                            <User className="text-teal-600" size={20} />
                            <span className="font-semibold">{userData.name}</span>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
