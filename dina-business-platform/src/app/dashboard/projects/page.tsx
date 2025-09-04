'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/auth/ProtectedRoute';
import DashboardNavbar from '../../../components/dashboard/DashboardNavbar';

export default function ProjectsPage() {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Website',
      client: 'Tech Store Ltd.',
      status: 'In Progress',
      progress: 75,
      deadline: '2025-10-15',
      price: '$3,500',
      description: 'Full e-commerce platform with payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      client: 'FinTech Solutions',
      status: 'Completed',
      progress: 100,
      deadline: '2025-08-20',
      price: '$8,000',
      description: 'Secure mobile banking application for iOS and Android',
      tags: ['React Native', 'Firebase', 'Stripe'],
    },
    {
      id: 3,
      title: 'Corporate Website',
      client: 'Business Corp',
      status: 'Review',
      progress: 90,
      deadline: '2025-09-30',
      price: '$2,200',
      description: 'Modern corporate website with CMS integration',
      tags: ['Next.js', 'Tailwind CSS', 'Prisma'],
    },
    {
      id: 4,
      title: 'Inventory Management System',
      client: 'Retail Chain Inc.',
      status: 'Starting Soon',
      progress: 10,
      deadline: '2025-12-01',
      price: '$5,500',
      description: 'Complete inventory tracking and management system',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/20';
      case 'In Progress':
        return 'text-blue-400 bg-blue-400/20';
      case 'Review':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Starting Soon':
        return 'text-purple-400 bg-purple-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <DashboardNavbar />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">My Projects</h1>
              <p className="text-gray-300">Track and manage your ongoing projects</p>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <select className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-lg">
                <option value="">All Status</option>
                <option value="active">In Progress</option>
                <option value="completed">Completed</option>
                <option value="review">Under Review</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
                <i className="fas fa-plus ml-2"></i>
                New Project
              </button>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white mr-3">{project.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <i className="fas fa-user ml-2"></i>
                      <span className="mr-4">{project.client}</span>
                      <i className="fas fa-calendar ml-2"></i>
                      <span className="mr-4">Due: {new Date(project.deadline).toLocaleDateString()}</span>
                      <span className="text-green-400 font-bold">{project.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 space-x-reverse mt-4 lg:mt-0">
                    <button className="text-gray-300 hover:text-white transition-colors duration-200 p-2">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-gray-300 hover:text-white transition-colors duration-200 p-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-gray-300 hover:text-white transition-colors duration-200 p-2">
                      <i className="fas fa-comment"></i>
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-300">Progress</span>
                    <span className="text-sm text-white font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/20 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-300">Total Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1</div>
              <div className="text-gray-300">Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
              <div className="text-gray-300">In Progress</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">$19,200</div>
              <div className="text-gray-300">Total Value</div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
