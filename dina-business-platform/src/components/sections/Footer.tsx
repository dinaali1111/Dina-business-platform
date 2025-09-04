import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dina Business
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative digital solutions, strategic consulting, 
              and cutting-edge technology implementations that drive sustainable growth.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
            
            {/* Admin Access in Footer */}
            <Link
              href="/login"
              className="inline-flex items-center text-sm text-gray-400 hover:text-yellow-400 transition-colors group"
            >
              <i className="fas fa-crown mr-2 group-hover:animate-pulse" />
              <span>Admin Panel Access</span>
              <i className="fas fa-external-link-alt ml-1 text-xs" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs group-hover:translate-x-1 transition-transform" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <i className="fas fa-chevron-right mr-2 text-xs group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 group hover:text-blue-400 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-sm"></i>
                </div>
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-blue-400 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone text-white text-sm"></i>
                </div>
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-blue-400 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-white text-sm"></i>
                </div>
                <span>info@dina-business.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dina Business Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center text-gray-400 text-sm">
              <i className="fas fa-heart text-red-400 mr-1 animate-pulse" />
              <span>Made with love</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
