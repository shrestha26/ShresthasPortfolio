import React from 'react';
import { MapPin, GraduationCap, Shield, Code, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-gray-300">
            <MapPin size={20} />
            <span>New Delhi, India</span>
          </div>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            I’m a dedicated cybersecurity enthusiast and software developer with a strong interest in defence and security, supported by a solid foundation in cybersecurity, software engineering, cloud computing, and data analytics. 
            I’ve been fortunate to gain hands-on experience at esteemed organizations like DRDO and JP Morgan Chase & Co. , where I learned to build secure, scalable systems and contribute to meaningful projects. 
            I’m always eager to learn, grow, and help create safer and more resilient technologies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-400">
                Specialized in threat detection, vulnerability assessment, and secure software development
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
              <p className="text-gray-400">
                Full-stack development with expertise in Java, Python, React, and microservices architecture
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-gray-400">
                AWS certified with experience in designing scalable, resilient cloud infrastructures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
