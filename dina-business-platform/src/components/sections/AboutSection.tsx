export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="w-full h-[400px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-blue-600">
                <i className="fas fa-image text-6xl mb-4"></i>
                <p className="text-lg font-medium">About Us Image</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-gray-900">
              For the next great business
            </h4>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quo tempora cumque eligendi
              <br />
              in nostrum labore omnis quaerat.
            </p>

            <ul className="space-y-3">
              {[
                'Officia quaerat eaque neque',
                'Possimus aut consequuntur incidunt',
                'Lorem ipsum dolor sit amet',
                'Consectetur adipisicing elit'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
