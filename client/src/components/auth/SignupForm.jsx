import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Lock,
  User,
  Phone,
  Stethoscope,
  Heart,
  UserCheck,
  Calendar,
  Droplet,
  Venus,
  Users,
} from "lucide-react";
import { signupRoute,loginRoute } from "../../api/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";


const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };


  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    role: "patient",
    bloodGroup: "",
    gender: "",
    emergencyContact: {
      name: "",
      phone: "",
      relation: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      // Handle nested fields
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        return {
          ...prevData,
          [parent]: {
            ...prevData[parent],
            [child]: value,
          },
        };
      }
      return { ...prevData, [name]: value };
    });
  };

  const handleSwitchForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
      setFormData({
        name: "",
        age: "",
        email: "",
        password: "",
        role: "patient",
        bloodGroup: "",
        gender: "",
        emergencyContact: {
          name: "",
          phone: "",
          relation: "",
        },
      });
    }, 300);
  };

  const handleSignSubmit = async (event) => {
    event.preventDefault();
  
    const signupData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: formData.age,
      bloodGroup: formData.bloodGroup,
      gender: formData.gender,
      role: "patient",
      emergencyContact: {
        name: formData.emergencyContact.name,
        phone: formData.emergencyContact.phone,
        relation: formData.emergencyContact.relation,
      },
    };
  
    try {
      const { data } = await axios.post(signupRoute, signupData);
      console.log("Signup response:", data);
  
      if (!data.success) {
        toast.error(data.message, toastOptions);
        return;
      }
  
      console.log("Signup successful", data.data);
      localStorage.setItem("user", JSON.stringify(data.data)); // Store user info
      navigate("/dash"); // Redirect after signup
    } catch (error) {
      if (error.response) {
        // Backend responded with an error status
        console.error("Signup Failed:", error.response.data.message);
        toast.error(error.response.data.message || "Signup failed.", toastOptions);
      } else {
        // Network error or no response from server
        console.error("Signup Failed:", error.message);
        toast.error("Network error. Please try again.", toastOptions);
      }
    }
  };
      
  const handleLogin = async (event) => {
    event.preventDefault();
  
    const loginData = {
      email: formData.email,
      password: formData.password,
    };
  
    try {
      const { data } = await axios.post(loginRoute, loginData);
      console.log("Login response:", data);
  
      if (!data.success) {
        toast.error(data.message, toastOptions);
        return;
      }
  
      console.log("Login successful", data.data);
      localStorage.setItem("user", JSON.stringify(data.data)); // Store user info
      navigate("/dash"); // Redirect after login
    } catch (error) {
      if (error.response) {
        // Backend responded with an error status
        console.error("Login Failed:", error.response.data.message);
        toast.error(error.response.data.message || "Login failed.", toastOptions);
      } else {
        // Network error or no response from server
        console.error("Login Failed:", error.message);
        toast.error("Network error. Please try again.", toastOptions);
      }
    }
  };
  
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-6">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-28 h-28 bg-teal-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in-down">
          <div className="flex items-center justify-center space-x-3">
            <Stethoscope className="text-teal-600 animate-pulse" size={40} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              MedEase
            </h1>
          </div>
          <p className="text-gray-600 mt-2">Medicine Tracking Made Simple</p>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in-up">
          <div
            className={`transition-all duration-300 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {isLogin ? (
              // Login Form
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Welcome Back
                </h2>

                <div className="space-y-4">
                  <div className="relative">
                    <div
                      className={`absolute left-3 top-3 transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-teal-500"
                          : "text-gray-400"
                      }`}
                    >
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute left-3 top-3 transition-colors duration-300 ${
                        focusedField === "password"
                          ? "text-teal-500"
                          : "text-gray-400"
                      }`}
                    >
                      <Lock size={20} />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 group" onClick={handleLogin}>
                  <span>Login</span>
                  <ArrowRight
                    size={20}
                    className="transform transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            ) : (
              // Signup Form

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Create Account
                </h2>

                <div className="space-y-4">
                  {/* Personal Information */}
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar
                        className="absolute left-3 top-3 text-gray-400"
                        size={20}
                      />
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div className="relative">
                      <Droplet
                        className="absolute left-3 top-3 text-gray-400"
                        size={20}
                      />
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <Venus
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Emergency Contact */}
                  <div className="border-t pt-4 mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                      Emergency Contact
                    </h3>
                    <div className="space-y-3">
                      <div className="relative">
                        <User
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <input
                          type="text"
                          name="emergencyContact.name"
                          placeholder="Contact Name"
                          value={formData.emergencyContact.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <input
                          type="tel"
                          name="emergencyContact.phone"
                          placeholder="Contact Phone"
                          value={formData.emergencyContact.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div className="relative">
                        <Users
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <select
                          name="emergencyContact.relation"
                          value={formData.emergencyContact.relation}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Relation</option>
                          <option value="parent">Parent</option>
                          <option value="spouse">Spouse</option>
                          <option value="sibling">Sibling</option>
                          <option value="child">Child</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  
                </div>


                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 group" onClick={handleSignSubmit}>
                  <span>Sign Up</span>
                  <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
                </button>


              </div>
            )}

            {/* Switch Form Link */}
            <div className="text-center mt-6">
              <button
                onClick={handleSwitchForm}
                className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
              >
                {isLogin
                  ? "Need an account? Sign up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthPages;
