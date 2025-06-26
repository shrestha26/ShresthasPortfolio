import React from 'react';
import { Code, Database, Shield, Cloud, Terminal, Cpu, Download } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={24} />,
      skills: ['C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'SQL', 'HTML/CSS']
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Cpu className="text-purple-400" size={24} />,
      skills: ['Spring Boot', 'React.js', 'Kafka', 'REST APIs', 'NLP Libraries', 'MongoDB']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="text-green-400" size={24} />,
      skills: ['AWS (EC2, S3, VPC)', 'Route 53', 'Load Balancer', 'Auto Scaling', 'CloudFront']
    },
    {
      title: 'Cybersecurity Tools',
      icon: <Shield className="text-red-400" size={24} />,
      skills: ['Burp Suite', 'Nmap', 'Metasploit', 'VAPT', 'GRC', 'Penetration Testing']
    },
    {
      title: 'Databases & Analytics',
      icon: <Database className="text-yellow-400" size={24} />,
      skills: ['MySQL', 'H2 Database', 'Data Visualization', 'Forensic Analytics', 'Excel']
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="text-cyan-400" size={24} />,
      skills: ['Linux', 'Git', 'IntelliJ', 'Shell Scripting', 'FFmpeg', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-gray-600 transition-colors duration-200"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

         </div>
      </div>
    </section>
  );
};

export default Skills;
