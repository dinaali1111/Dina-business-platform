'use client';

import Link from 'next/link';

export default function AdminAccessSection() {
  return (
    <>
      <style jsx global>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
      
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <i className="fas fa-crown text-6xl text-yellow-400 mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Admin Dashboard
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Powerful control panel for managing your business operations
              </p>
            </div>

            {/* Admin Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-tachometer-alt text-3xl text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Dashboard</h3>
                <p className="text-gray-300 text-sm">Real-time analytics and insights</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-cogs text-3xl text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
                <p className="text-gray-300 text-sm">Manage all your services</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-question-circle text-3xl text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">FAQs</h3>
                <p className="text-gray-300 text-sm">Handle customer questions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-envelope text-3xl text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Messages</h3>
                <p className="text-gray-300 text-sm">Customer communications</p>
              </div>
            </div>

            {/* Admin Access Button */}
            <div className="space-y-4">
              <Link
                href="/login"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                <i className="fas fa-shield-alt mr-3 text-xl" />
                <span>Access Admin Panel</span>
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <i className="fas fa-lock mr-2 text-green-400" />
                  <span>Secure Access</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2 text-blue-400" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-mobile-alt mr-2 text-purple-400" />
                  <span>Mobile Friendly</span>
                </div>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="mt-8 p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 max-w-md mx-auto">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center justify-center">
                <i className="fas fa-key mr-2 text-yellow-400" />
                Demo Credentials
              </h4>
              <div className="text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Email:</span>
                  <code className="text-blue-400 bg-black/30 px-2 py-1 rounded text-sm">admin@dina.com</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Password:</span>
                  <code className="text-blue-400 bg-black/30 px-2 py-1 rounded text-sm">admin123</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
