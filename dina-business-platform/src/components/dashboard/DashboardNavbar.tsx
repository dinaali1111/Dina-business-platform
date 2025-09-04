'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';

export default function DashboardNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const navItems = [
    {
      name: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      href: '/dashboard',
    },
    {
      name: 'My Services',
      icon: 'fas fa-briefcase',
      href: '/dashboard/services',
    },
    {
      name: 'Projects',
      icon: 'fas fa-project-diagram',
      href: '/dashboard/projects',
    },
    {
      name: 'Messages',
      icon: 'fas fa-envelope',
      href: '/dashboard/messages',
      badge: '3',
    },
    {
      name: 'Support',
      icon: 'fas fa-headset',
      href: '/dashboard/support',
    },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl">Dina Business</span>
                <span className="text-blue-300 text-sm block">Dashboard</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 space-x-reverse text-gray-300 hover:text-white transition-colors duration-200 relative"
              >
                <i className={`${item.icon} text-sm`}></i>
                <span className="text-sm font-medium">{item.name}</span>
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side - User Menu */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Notifications */}
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <i className="fas fa-bell text-lg"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 space-x-reverse text-white hover:bg-white/10 rounded-lg px-3 py-2 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-sm font-medium">{user?.name || 'User'}</div>
                  <div className="text-xs text-gray-300 capitalize">{user?.role || 'user'}</div>
                </div>
                <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}></i>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-1 z-50">
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="fas fa-user ml-2"></i>
                    My Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="fas fa-cog ml-2"></i>
                    Settings
                  </Link>
                  <Link
                    href="/dashboard/billing"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className="fas fa-credit-card ml-2"></i>
                    Billing
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <i className="fas fa-sign-out-alt ml-2"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 space-x-reverse px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
