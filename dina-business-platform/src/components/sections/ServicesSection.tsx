import Link from 'next/link';

const services = [
  {
    icon: 'fa-truck-fast',
    title: 'Business Consulting',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
  },
  {
    icon: 'fa-plane',
    title: 'Market Analysis',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
  },
  {
    icon: 'fa-comments',
    title: 'User Monitoring',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
  },
  {
    icon: 'fa-truck',
    title: 'Insurance Consulting',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
  },
  {
    icon: 'fa-shopify',
    title: 'Financial Investment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
  },
  {
    icon: 'fa-anchor',
    title: 'Financial Management',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Our Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <i className={`fa-solid ${service.icon} text-4xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300`}></i>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-block text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 border-b border-transparent hover:border-blue-600"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
