'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/auth/ProtectedRoute';
import DashboardNavbar from '../../../components/dashboard/DashboardNavbar';

export default function ServicesPage() {
  const [services] = useState([
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies',
      price: '$500 - $2000',
      status: 'Active',
      icon: 'fas fa-code',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'iOS and Android app development',
      price: '$1000 - $5000',
      status: 'Under Review',
      icon: 'fas fa-mobile-alt',
      color: 'green',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User interface and experience design',
      price: '$300 - $1500',
      status: 'Active',
      icon: 'fas fa-paint-brush',
      color: 'purple',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'SEO, social media, and content marketing',
      price: '$200 - $1000',
      status: 'Scheduled',
      icon: 'fas fa-bullhorn',
      color: 'orange',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-400 bg-green-400/20';
      case 'Under Review':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Scheduled':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <DashboardNavbar />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">My Services</h1>
              <p className="text-gray-300">Manage your service offerings and pricing</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
              <i className="fas fa-plus ml-2"></i>
              Add New Service
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${service.color}-500 rounded-lg flex items-center justify-center mr-4`}>
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 space-x-reverse">
                    <button className="text-gray-300 hover:text-white transition-colors duration-200">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200 border border-white/20">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Service Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <div className="text-gray-300">Active Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-gray-300">Under Review</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2,400</div>
              <div className="text-gray-300">Avg. Price</div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
