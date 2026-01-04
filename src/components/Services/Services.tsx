import React from 'react';
import { MdDns, MdSecurity, MdArticle } from 'react-icons/md';
import { IconType } from 'react-icons';

interface ServiceItem {
  title: string;
  description: string;
  icon: IconType;
  colorClass: string;
}

const services: ServiceItem[] = [
  {
    title: "Backend Engineering",
    description: "Designing scalable APIs and robust database architectures tailored for high throughput.",
    icon: MdDns,
    colorClass: "bg-purple-100 dark:bg-purple-900/30 text-[#8B5CF6]"
  },
  {
    title: "System Reliability",
    description: "Ensuring uptime, fault tolerance, and security compliance in complex distributed systems.",
    icon: MdSecurity,
    colorClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Technical Writing",
    description: "Documenting complex architectural decisions and sharing knowledge through detailed articles.",
    icon: MdArticle,
    colorClass: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
  }
];

const Services: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.colorClass}`}>
              <service.icon className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-display">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;