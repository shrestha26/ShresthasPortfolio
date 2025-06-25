import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2025',
      status: 'Current',
      description: 'Advanced cybersecurity certification focusing on ethical hacking methodologies and penetration testing.',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'CompTIA Cybersecurity Analyst (CySA+ CS0003)',
      issuer: 'CompTIA',
      year: '2025',
      status: 'Completed',
      description: 'Professional certification in cybersecurity analytics and threat detection.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2025',
      status: 'Completed',
      description: 'Cloud architecture certification covering AWS services and best practices.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Database Management Essentials',
      issuer: 'Coursera',
      year: '2024',
      status: 'Completed',
      description: 'Comprehensive course covering database design, SQL, and data management principles.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JPMorgan Chase Software Engineering Simulation',
      issuer: 'JPMorgan Chase & Co.',
      year: '2024',
      status: 'Completed',
      description: 'Virtual internship program focusing on backend development and financial technology.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Deloitte Data Analytics Simulation',
      issuer: 'Deloitte',
      year: '2025',
      status: 'Completed',
      description: 'Virtual program covering data analysis and forensic technology applications.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-700/50 w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="text-yellow-400" size={24} />
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-sm text-gray-400">{cert.status}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <div className={`text-sm font-semibold mb-2 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                  {cert.issuer}
                </div>
                <div className="text-sm text-gray-400 mb-3">{cert.year}</div>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

                <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer">
                  <ExternalLink size={16} />
                  <span className="text-sm">View Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;