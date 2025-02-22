import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, User, Phone, Stethoscope } from 'lucide-react';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSwitchForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-6">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-teal-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
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
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {isLogin ? (
              // Login Form
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Welcome Back</h2>
                
                <div className="space-y-4">
                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'email' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'password' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <Lock size={20} />
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Login</span>
                  <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              // Signup Form
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Create Account</h2>
                
                <div className="space-y-4">
                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'name' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'email' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'phone' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <Phone size={20} />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute left-3 top-3 transition-colors duration-300 ${focusedField === 'password' ? 'text-teal-500' : 'text-gray-400'}`}>
                      <Lock size={20} />
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 group">
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
                {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>

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