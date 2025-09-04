'use client';

import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import DashboardNavbar from '../../../components/dashboard/DashboardNavbar';
import ProtectedRoute from '../../../components/auth/ProtectedRoute';

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1234567890',
    company: 'Dina Business Solutions',
    position: 'Software Developer',
    location: 'Cairo, Egypt',
    bio: 'Experienced developer with expertise in web technologies and mobile applications.',
    skills: ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript'],
    experience: '5+ years',
    portfolio: 'https://portfolio.example.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  });

  const [newSkill, setNewSkill] = useState('');
  const [profileImage, setProfileImage] = useState('/api/placeholder/150/150');

  const handleSave = () => {
    // Here you would typically save to database
    console.log('Saving profile:', profileData);
    setIsEditing(false);
    // Show success message
  };

  const handleCancel = () => {
    // Reset to original data
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '+1234567890',
      company: 'Dina Business Solutions',
      position: 'Software Developer',
      location: 'Cairo, Egypt',
      bio: 'Experienced developer with expertise in web technologies and mobile applications.',
      skills: ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript'],
      experience: '5+ years',
      portfolio: 'https://portfolio.example.com',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <DashboardNavbar />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
            <p className="text-gray-300">Manage your account information and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                      {profileData.name.charAt(0).toUpperCase() || 'U'}
                    </div>
                    {isEditing && (
                      <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-200">
                        <i className="fas fa-camera text-sm"></i>
                      </button>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-1">{profileData.name}</h2>
                  <p className="text-blue-300 mb-2">{profileData.position}</p>
                  <p className="text-gray-300 text-sm mb-4">{profileData.company}</p>
                  
                  <div className="flex justify-center space-x-4 space-x-reverse mb-6">
                    <a href={profileData.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href={profileData.github} className="text-gray-300 hover:text-white transition-colors duration-200">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href={profileData.portfolio} className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                  </div>

                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <i className="fas fa-edit ml-2"></i>
                      Edit Profile
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <button
                        onClick={handleSave}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <i className="fas fa-save ml-2"></i>
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <i className="fas fa-times ml-2"></i>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-user ml-2"></i>
                  Basic Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Location</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.location}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-briefcase ml-2"></i>
                  Professional Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Company</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">Position</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.position}
                        onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.position}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-medium mb-1">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-white bg-white/5 px-3 py-2 rounded-lg">{profileData.bio}</p>
                  )}
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profileData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-red-300"
                          >
                            <i className="fas fa-times text-xs"></i>
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill"
                        className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <button
                        onClick={addSkill}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Account Statistics */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-chart-bar ml-2"></i>
                  Account Statistics
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">15</div>
                    <div className="text-gray-300 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">4.8</div>
                    <div className="text-gray-300 text-sm">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">320</div>
                    <div className="text-gray-300 text-sm">Hours Worked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
