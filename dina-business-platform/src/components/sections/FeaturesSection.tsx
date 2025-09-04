import Link from 'next/link';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h6 className="text-4xl font-bold text-blue-600 mb-4">
            Our Features
          </h6>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
            <br />
            neque tempora reiciendis.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="w-full h-[400px] bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-green-600">
                <i className="fas fa-heart text-6xl mb-4"></i>
                <p className="text-lg font-medium">Features Image</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h6 className="text-4xl font-bold text-blue-600">
              Do Things With Love
            </h6>
            
            <p className="text-gray-800 text-lg font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Optio et
              <br />
              accusantium quidem porro officiis ipsum maiores minus magni
              <br />
              nostrum tenetur!
            </p>

            <Link
              href="#services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
