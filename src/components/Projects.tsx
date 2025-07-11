import React from 'react';
import { ExternalLink, Github, Calendar, Code, Shield, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multimedia Translator',
      organization: 'DRDO',
      period: '2023-2024',
      description: 'Advanced multilingual intelligence decryption system designed for national defense applications.',
      longDescription: 'Designed and developed a sophisticated multimedia translator to decrypt multilingual terrorist intelligence for the Indian Army. The system integrates AI-powered translation with secure communication protocols.',
      features: [
        'AI-powered multilingual translation',
        'Secure cryptographic protocols',
        'Real-time processing capabilities',
        'Military-grade security standards'
      ],
      technologies: ['Python', 'FFmpeg', 'NLP libraries', 'Linux', 'REST APIs'],
      githubUrl: 'https://github.com/shrestha26/Multimedia-Translator',
      liveUrl: 'https://shrestha26.github.io/Multimedia-Translator/',
      icon: <Shield className="text-red-400" size={24} />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Space Scientific Calculator',
      organization: 'ISRO',
      period: '2023',
      description: 'Specialized calculator for aerospace calculations and orbital mechanics computations.',
      longDescription: 'Developed a space-scientific calculator tailored for ISRO scientists to assist in orbital mechanics and mission planning with advanced aerospace metrics computation.',
      features: [
        'Advanced aerospace metrics calculation',
        'Delta-V and escape velocity computation',
        'Payload-to-thrust ratio analysis',
        'Re-entry speed calculations'
      ],
      technologies: ['React.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/shrestha26/Space-Scientific-Calculator',
      liveUrl: 'https://astounding-cendol-d4f12b.netlify.app/', // Ensure this URL is valid
      icon: <Code className="text-blue-400" size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'ATM Software Machine',
      organization: 'Personal Project',
      period: '2025',
      description: 'Full-featured ATM simulation with security testing capabilities and vulnerability assessment.',
      longDescription: 'Comprehensive web-based ATM simulation system that replicates core banking operations with integrated security testing for penetration testing practice.',
      features: [
        'Complete banking operations simulation',
        'Security vulnerability testing',
        'Session handling and role-based access',
        'Real ATM interface emulation'
      ],
      technologies: ['PHP', 'TypeScript', 'MySQL', 'JavaScript', 'Burp Suite'],
      githubUrl: 'https://github.com/shrestha26/ATM-software',
      liveUrl: 'https://vocal-gumdrop-b800ec.netlify.app/',
      icon: <Shield className="text-green-400" size={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ML Stock Predictor',
      organization: 'Personal Project',
      period: '2025',
      description: 'Production-ready stock prediction application with multiple ML algorithms and real-time analysis.',
      longDescription: 'Built a comprehensive stock prediction web application featuring interactive ML model selection, real-time predictions, and professional financial dashboard.',
      features: [
        'LSTM, Linear Regression, Random Forest models',
        'Real-time stock predictions',
        'Interactive financial dashboard',
        'Model performance comparisons'
      ],
      technologies: ['React', 'TailwindCSS', 'Chart.js', 'Python', 'Netlify'],
      githubUrl: 'https://github.com/shrestha26/Machine-Learning-Stock-Prediction',
      liveUrl: 'https://illustrious-lolly-fc90d9.netlify.app',
      icon: <TrendingUp className="text-purple-400" size={24} />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className={text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent}>
                        {project.organization}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{project.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 text-sm mb-4">{project.longDescription}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 bg-gray-700 text-xs rounded-full hover:bg-gray-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
