'use client';

import { useState, useEffect } from 'react';

const stats = [
  {
    number: 150,
    label: 'Happy Clients',
    icon: 'fa-users',
    suffix: '+'
  },
  {
    number: 87,
    label: 'Projects Completed',
    icon: 'fa-project-diagram',
    suffix: '+'
  },
  {
    number: 5,
    label: 'Years Experience',
    icon: 'fa-calendar-alt',
    suffix: '+'
  },
  {
    number: 24,
    label: 'Support Hours',
    icon: 'fa-clock',
    suffix: '/7'
  }
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="mb-4">
                <i className={`fas ${stat.icon} text-4xl text-blue-100`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-lg text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
