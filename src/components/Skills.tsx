import React from 'react';
import {
  Code,
  Database,
  Shield,
  Cloud,
  Terminal,
  Cpu,
  Atom
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={28} />,
      skills: [
        'C/C++',
        'Java',
        'Python',
        'JavaScript',
        'C#',
        'SQL',
        'HTML/CSS'
      ]
    },

    {
      title: 'Quantum AI & Computing',
      icon: <Atom className="text-purple-400" size={28} />,
      skills: [
        'Quantum Computing',
        'Quantum Machine Learning',
        'Quantum AI',
        'Qiskit',
        'PennyLane',
        'Cirq',
        'TensorFlow Quantum',
        'Variational Quantum Algorithms',
        'Quantum Circuits',
        'Quantum Optimization'
      ]
    },

    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="text-cyan-400" size={28} />,
      skills: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'AI Model Development',
        'Natural Language Processing'
      ]
    },

    {
      title: 'Technologies & Frameworks',
      icon: <Code className="text-green-400" size={28} />,
      skills: [
        'Spring Boot',
        'React.js',
        'Express.js',
        'Node.js',
        'Kafka',
        'REST APIs',
        'NLP Libraries',
        'MongoDB'
      ]
    },

    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="text-orange-400" size={28} />,
      skills: [
        'AWS',
        'EC2',
        'S3',
        'VPC',
        'Route 53',
        'Load Balancer',
        'Auto Scaling',
        'CloudFront',
        'Google Cloud'
      ]
    },

    {
      title: 'Cybersecurity Tools',
      icon: <Shield className="text-red-400" size={28} />,
      skills: [
        'Burp Suite',
        'Nmap',
        'Metasploit',
        'VAPT',
        'GRC',
        'Penetration Testing',
        'Threat Detection',
        'Vulnerability Assessment',
        'Secure Software Development'
      ]
    },

    {
      title: 'Databases & Analytics',
      icon: <Database className="text-yellow-400" size={28} />,
      skills: [
        'MySQL',
        'MongoDB',
        'H2 Database',
        'SQL',
        'Data Visualization',
        'Forensic Analytics',
        'Excel',
        'Data Analysis'
      ]
    },

    {
      title: 'Development & DevOps Tools',
      icon: <Terminal className="text-pink-400" size={28} />,
      skills: [
        'Linux',
        'Git',
        'GitHub',
        'IntelliJ IDEA',
        'Shell Scripting',
        'FFmpeg',
        'Postman',
        'Docker',
        'Kubernetes'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technical Skills
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">

                <div className="p-2 bg-gray-700/50 rounded-lg">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-gray-600 transition-colors duration-200"
                    style={{
                      animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
