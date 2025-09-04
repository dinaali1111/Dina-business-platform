'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import DashboardNavbar from '../../components/dashboard/DashboardNavbar';
import { useAuth } from '../../contexts/AuthContext';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <DashboardNavbar />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              مرحباً بك، {user?.name}!
            </h1>
            <p className="text-xl text-gray-300">
              إدارة حسابك وخدماتك من خلال لوحة التحكم الخاصة بك
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-project-diagram text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">المشاريع النشطة</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">المشاريع المكتملة</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-star text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">التقييم</p>
                  <p className="text-2xl font-bold text-white">4.8</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <p className="text-gray-300">ساعات العمل</p>
                  <p className="text-2xl font-bold text-white">240</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Profile Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-user ml-2"></i>
                الملف الشخصي
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">الاسم:</span>
                  <span className="text-white">{user?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">البريد الإلكتروني:</span>
                  <span className="text-white">{user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">نوع الحساب:</span>
                  <span className="text-white capitalize">{user?.role}</span>
                </div>
              </div>
              <Link
                href="/dashboard/profile"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200 text-center block"
              >
                تعديل الملف الشخصي
              </Link>
            </div>

            {/* Services Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-briefcase ml-2"></i>
                خدماتي
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">تطوير المواقع</span>
                  <span className="text-green-400 text-sm">نشط</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">تطبيقات الجوال</span>
                  <span className="text-yellow-400 text-sm">قيد المراجعة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">التسويق الرقمي</span>
                  <span className="text-blue-400 text-sm">مجدول</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors duration-200">
                طلب خدمة جديدة
              </button>
            </div>

            {/* Support Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-headset ml-2"></i>
                الدعم الفني
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">تذكرة #1234</span>
                  <span className="text-green-400 text-sm">محلولة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">تذكرة #1235</span>
                  <span className="text-yellow-400 text-sm">قيد المعالجة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">وقت الاستجابة:</span>
                  <span className="text-white">{"< 2 ساعة"}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors duration-200">
                إنشاء تذكرة جديدة
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-history ml-2"></i>
              النشاط الأخير
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white/5 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-code text-white text-sm"></i>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">تم البدء في مشروع تطوير موقع التجارة الإلكترونية</p>
                  <p className="text-gray-400 text-sm">منذ 3 ساعات</p>
                </div>
                <span className="text-blue-400 text-sm">جديد</span>
              </div>
              
              <div className="flex items-center p-4 bg-white/5 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">تم تسليم مشروع تطبيق الجوال</p>
                  <p className="text-gray-400 text-sm">منذ يوم واحد</p>
                </div>
                <span className="text-green-400 text-sm">مكتمل</span>
              </div>
              
              <div className="flex items-center p-4 bg-white/5 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-comment text-white text-sm"></i>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">تم الرد على استفسارك حول التسويق الرقمي</p>
                  <p className="text-gray-400 text-sm">منذ يومين</p>
                </div>
                <span className="text-purple-400 text-sm">رد</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors duration-200 border border-white/20">
                عرض جميع الأنشطة
              </button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
