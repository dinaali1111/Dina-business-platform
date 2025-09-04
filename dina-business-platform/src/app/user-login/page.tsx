'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';

export default function UserLoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const success = await login(formData.email, formData.password);
    
    if (success) {
      router.push('/dashboard');
    } else {
      setError('فشل في تسجيل الدخول. تحقق من البيانات وحاول مرة أخرى.');
    }
    
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" 
             style={{animation: 'blob 7s infinite'}}></div>
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" 
             style={{animation: 'blob 7s infinite 2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20" 
             style={{animation: 'blob 7s infinite 4s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dina Business
            </h1>
            <p className="text-gray-300 text-sm mt-2">حلول أعمال احترافية</p>
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">تسجيل الدخول</h2>
            <p className="text-gray-300">ادخل بياناتك للوصول إلى حسابك</p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-6">
              <div className="flex items-center">
                <i className="fas fa-exclamation-triangle text-red-400 mr-2"></i>
                <p className="text-red-300">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <i className="fas fa-envelope mr-2"></i>
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <i className="fas fa-lock mr-2"></i>
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="أدخل كلمة المرور"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  جاري تسجيل الدخول...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  تسجيل الدخول
                </div>
              )}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 space-y-3 text-center">
            <Link 
              href="/register" 
              className="block text-blue-300 hover:text-blue-200 text-sm transition-colors duration-300"
            >
              ليس لديك حساب؟ إنشاء حساب جديد
            </Link>
            
            <Link 
              href="/forgot-password" 
              className="block text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300"
            >
              نسيت كلمة المرور؟
            </Link>

            <div className="border-t border-white/20 pt-3 mt-4">
              <Link 
                href="/login" 
                className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors duration-300 flex items-center justify-center"
              >
                <i className="fas fa-crown mr-2"></i>
                دخول الإدارة
              </Link>
            </div>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
          <div className="text-center">
            <h3 className="text-yellow-400 font-medium mb-2">
              <i className="fas fa-info-circle mr-2"></i>
              بيانات تجريبية
            </h3>
            <div className="space-y-1 text-sm text-yellow-300">
              <p>البريد: user@dina.com</p>
              <p>المرور: user123</p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-400 hover:text-white text-sm transition-colors duration-300"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
