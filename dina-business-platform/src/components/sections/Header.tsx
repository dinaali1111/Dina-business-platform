'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dina Business
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Professional Business Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center"
            >
              <i className="fas fa-home mr-2"></i>
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center"
            >
              <i className="fas fa-info-circle mr-2"></i>
              About Us
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center"
            >
              <i className="fas fa-briefcase mr-2"></i>
              Services
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              /* Logged In User Menu */
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-user-circle"></i>
                  <span>{user.name}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link 
                      href="/dashboard" 
                      className="flex px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 items-center"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <i className="fas fa-tachometer-alt mr-3 text-blue-500"></i>
                      Dashboard
                    </Link>
                    <Link 
                      href="/profile" 
                      className="flex px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 items-center"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <i className="fas fa-user-edit mr-3 text-green-500"></i>
                      Profile
                    </Link>
                    <hr className="my-2" />
                    <button 
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="flex px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 items-center w-full"
                    >
                      <i className="fas fa-sign-out-alt mr-3 text-red-500"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Guest User Menu */
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-user"></i>
                  <span>My Account</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link 
                      href="/user-login" 
                      className="flex px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 items-center"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <i className="fas fa-sign-in-alt mr-3 text-blue-500"></i>
                      User Login
                    </Link>
                    <Link 
                      href="/register" 
                      className="flex px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 items-center"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <i className="fas fa-user-plus mr-3 text-green-500"></i>
                      Create Account
                    </Link>
                    <hr className="my-2" />
                    <Link 
                      href="/login" 
                      className="flex px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200 items-center"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <i className="fas fa-crown mr-3 text-yellow-500"></i>
                      Admin Login
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Quick Contact */}
            <Link
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t border-gray-200/20">
              <Link 
                href="/" 
                className="flex px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-home mr-3"></i>
                Home
              </Link>
              <Link 
                href="#about" 
                className="flex px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle mr-3"></i>
                About Us
              </Link>
              <Link 
                href="#services" 
                className="flex px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-briefcase mr-3"></i>
                Services
              </Link>
              <Link 
                href="#contact" 
                className="flex px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-envelope mr-3"></i>
                Contact Us
              </Link>
              
              {/* Mobile User Actions */}
              <div className="border-t border-gray-200/50 pt-3 mt-3">
                <Link 
                  href="/user-login" 
                  className="flex px-3 py-2 rounded-md text-blue-600 hover:bg-blue-50 font-medium items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-sign-in-alt mr-3"></i>
                  User Login
                </Link>
                <Link 
                  href="/register" 
                  className="flex px-3 py-2 rounded-md text-green-600 hover:bg-green-50 font-medium items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-user-plus mr-3"></i>
                  Create Account
                </Link>
                <Link 
                  href="/login" 
                  className="flex px-3 py-2 rounded-md text-yellow-600 hover:bg-yellow-50 font-medium items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-crown mr-3"></i>
                  Admin Login
                </Link>
                <Link 
                  href="#contact" 
                  className="flex px-3 py-2 rounded-md text-green-600 hover:bg-green-50 font-medium items-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-phone mr-3"></i>
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
