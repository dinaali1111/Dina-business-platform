'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import { useAuth } from '../../contexts/AuthContext';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UserDashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // التحقق من تسجيل الدخول
    const token = localStorage.getItem('userToken');
    const user = localStorage.getItem('userData');
    
    if (!token || !user) {
      router.push('/user-login');
      return;
    }

    try {
      setUserData(JSON.parse(user));
    } catch (error) {
      console.error('Error parsing user data:', error);
      router.push('/user-login');
      return;
    }

    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" 
             style={{animation: 'blob 7s infinite'}}></div>
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" 
             style={{animation: 'blob 7s infinite 2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" 
             style={{animation: 'blob 7s infinite 4s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dina Business
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-white">
                  <span className="text-sm text-gray-300">مرحباً، </span>
                  <span className="font-medium">{userData?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user text-3xl text-white"></i>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                مرحباً بك، {userData?.name}!
              </h1>
              <p className="text-gray-300 text-lg">
                أهلاً بك في لوحة تحكم المستخدم. يمكنك من هنا إدارة حسابك والوصول إلى خدماتنا
              </p>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-user-edit text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">الملف الشخصي</h3>
                  <p className="text-gray-300 text-sm">إدارة بياناتك الشخصية</p>
                </div>
              </div>
              <Link 
                href="/profile" 
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-300"
              >
                عرض الملف الشخصي
                <i className="fas fa-arrow-left mr-2"></i>
              </Link>
            </div>

            {/* Services Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">خدماتي</h3>
                  <p className="text-gray-300 text-sm">اطلب واتابع خدماتك</p>
                </div>
              </div>
              <Link 
                href="/my-services" 
                className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors duration-300"
              >
                عرض الخدمات
                <i className="fas fa-arrow-left mr-2"></i>
              </Link>
            </div>

            {/* Support Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-headset text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">الدعم الفني</h3>
                  <p className="text-gray-300 text-sm">احصل على المساعدة</p>
                </div>
              </div>
              <Link 
                href="/support" 
                className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors duration-300"
              >
                تواصل معنا
                <i className="fas fa-arrow-left mr-2"></i>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">إجراءات سريعة</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <i className="fas fa-plus text-2xl mb-2"></i>
                <p className="font-medium">طلب خدمة جديدة</p>
              </button>

              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <i className="fas fa-chart-line text-2xl mb-2"></i>
                <p className="font-medium">تتبع المشاريع</p>
              </button>

              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <i className="fas fa-file-invoice-dollar text-2xl mb-2"></i>
                <p className="font-medium">الفواتير</p>
              </button>

              <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <i className="fas fa-bell text-2xl mb-2"></i>
                <p className="font-medium">الإشعارات</p>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
              <div className="text-gray-300">الخدمات النشطة</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-300">المشاريع المكتملة</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">0</div>
              <div className="text-gray-300">نقاط المكافآت</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
