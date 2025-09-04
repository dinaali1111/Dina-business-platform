'use client';

import { useState } from 'react';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 1,
      title: "تطوير المواقع الإلكترونية",
      description: "إنشاء مواقع حديثة وسريعة باستخدام أحدث التقنيات",
      icon: "fas fa-globe",
      color: "from-blue-500 to-cyan-500",
      features: ["تصميم متجاوب", "سرعة عالية", "أمان متقدم", "تحسين محركات البحث"]
    },
    {
      id: 2,
      title: "تطبيقات الجوال",
      description: "تطوير تطبيقات مخصصة لنظامي iOS و Android",
      icon: "fas fa-mobile-alt",
      color: "from-purple-500 to-pink-500",
      features: ["Native Apps", "React Native", "Flutter", "UI/UX متقدم"]
    },
    {
      id: 3,
      title: "التجارة الإلكترونية",
      description: "منصات تجارة إلكترونية متكاملة مع أنظمة دفع آمنة",
      icon: "fas fa-shopping-cart",
      color: "from-green-500 to-teal-500",
      features: ["متجر متكامل", "نظام دفع آمن", "إدارة المخزون", "تقارير مفصلة"]
    },
    {
      id: 4,
      title: "الذكاء الاصطناعي",
      description: "حلول ذكية باستخدام تقنيات الذكاء الاصطناعي",
      icon: "fas fa-robot",
      color: "from-orange-500 to-red-500",
      features: ["Machine Learning", "ChatBots", "تحليل البيانات", "أتمتة العمليات"]
    }
  ];

  const stats = [
    { number: "250+", label: "مشروع مُنجز", icon: "fas fa-project-diagram" },
    { number: "150+", label: "عميل راضي", icon: "fas fa-users" },
    { number: "5+", label: "سنوات خبرة", icon: "fas fa-calendar-alt" },
    { number: "24/7", label: "دعم فني", icon: "fas fa-headset" }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      company: "شركة النور للتجارة",
      comment: "خدمة ممتازة ونتائج فاقت التوقعات. فريق محترف ومتعاون.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "فاطمة علي",
      company: "متجر الأناقة",
      comment: "تم إنشاء متجرنا الإلكتروني بجودة عالية وفي الوقت المحدد.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "محمد سالم",
      company: "مؤسسة الإبداع",
      comment: "تطبيق الجوال الذي طوروه لنا ساعد في زيادة مبيعاتنا بشكل كبير.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              مستقبل
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> الأعمال </span>
              الرقمية
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              نحول أفكارك إلى حلول تقنية مبتكرة تساعدك على النجاح في العصر الرقمي
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <i className="fas fa-rocket mr-3"></i>
                ابدأ مشروعك الآن
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-play mr-3"></i>
                شاهد أعمالنا
              </button>
            </div>

            {/* Floating Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <i className={`${stat.icon} text-3xl text-blue-400 mb-3`}></i>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات التقنية المتطورة لتلبية احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:bg-white/20">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300 text-sm">
                        <i className="fas fa-check text-green-400 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">من نحن</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                نحن فريق من المطورين والمصممين المتخصصين في تقديم حلول تقنية مبتكرة. 
                نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى واقع رقمي يحقق النجاح.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                خبرتنا الواسعة وشغفنا بالابتكار يضمنان لك الحصول على أفضل الحلول 
                التي تناسب احتياجاتك وتحقق أهدافك التجارية.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">250+</div>
                  <div className="text-gray-300">مشروع ناجح</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
                  <div className="text-gray-300">عميل سعيد</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-lg border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <i className="fas fa-code text-2xl text-blue-400 mb-2"></i>
                    <div className="text-white font-semibold">تطوير</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <i className="fas fa-paint-brush text-2xl text-purple-400 mb-2"></i>
                    <div className="text-white font-semibold">تصميم</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <i className="fas fa-mobile-alt text-2xl text-green-400 mb-2"></i>
                    <div className="text-white font-semibold">تطبيقات</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <i className="fas fa-chart-line text-2xl text-orange-400 mb-2"></i>
                    <div className="text-white font-semibold">تحليلات</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              تقييمات وشهادات من عملائنا الكرام حول جودة خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">تواصل معنا</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ابدأ رحلتك الرقمية اليوم وحول فكرتك إلى مشروع ناجح
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">البريد الإلكتروني</h4>
                    <p className="text-gray-300">info@dinabusiness.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">رقم الهاتف</h4>
                    <p className="text-gray-300">+20 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">العنوان</h4>
                    <p className="text-gray-300">القاهرة، مصر</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">تابعنا على</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-800 hover:bg-blue-900 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">الاسم</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="اكتب اسمك"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">الموضوع</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">الرسالة</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dina Business
              </h3>
            </div>
            <p className="text-gray-300 mb-6">حلول أعمال احترافية للعصر الرقمي</p>
            <p className="text-gray-400 text-sm">
              © 2024 Dina Business Solutions. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
