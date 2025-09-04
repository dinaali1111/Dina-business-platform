'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl" 
               style={{animation: 'blob 7s infinite'}}></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl" 
               style={{animation: 'blob 7s infinite 2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl" 
               style={{animation: 'blob 7s infinite 4s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0 lg:pr-8">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-200 mb-4">
                🚀 Welcome to Dina Business Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Transform Your Business
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-gray-200 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology solutions, 
              innovative strategies, and exceptional digital experiences that drive growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#contact"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <span>Get Started Today</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#services"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                <i className="fas fa-play-circle mr-2" />
                <span>View Our Services</span>
              </Link>
            </div>

            {/* Admin Quick Access */}
            <div className="mb-8">
              <Link
                href="/login"
                className="group inline-flex items-center bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white/80 hover:text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-300 border border-white/10 hover:border-white/30"
              >
                <i className="fas fa-crown mr-2 text-yellow-400" />
                <span>Admin Access</span>
                <i className="fas fa-external-link-alt ml-2 text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
  );
}
