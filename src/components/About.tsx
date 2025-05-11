import React from 'react';
import { Shield, Cpu, Code, Network } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white inline-block relative">
            About Me
            <span className="block h-1 w-24 mx-auto mt-2 bg-teal-500"></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate cybersecurity professional with a knack for identifying vulnerabilities and implementing robust security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-300">
              I'm a dynamic Cybersecurity Engineer and Software Developer Trainee with extensive expertise in penetration testing, secure software development, and financial analysis. As a published researcher under DRDO, I've contributed to critical defense projects like DHARASHAKTI and AGNI-5.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              My academic background includes a BTech in Computer Science Engineering from Lovely Professional University, where I maintained a 9.57 CGPA. I've consistently applied theoretical knowledge to practical scenarios, developing innovative solutions for complex security challenges.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              In my free time, I enjoy staying updated with the latest cybersecurity trends, participating in CTF competitions, and contributing to open-source security projects. I believe in continuous learning and sharing knowledge with the community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { 
                icon: <Shield className="h-8 w-8 text-teal-500" />, 
                title: "Security Analysis", 
                description: "Identifying vulnerabilities and implementing robust security measures to protect systems and data."
              },
              { 
                icon: <Cpu className="h-8 w-8 text-teal-500" />, 
                title: "System Architecture", 
                description: "Designing secure and efficient system architectures that balance performance and security requirements."
              },
              { 
                icon: <Code className="h-8 w-8 text-teal-500" />, 
                title: "Secure Coding", 
                description: "Developing applications with security as a foundational principle, not an afterthought."
              },
              { 
                icon: <Network className="h-8 w-8 text-teal-500" />, 
                title: "Network Security", 
                description: "Protecting network infrastructure from unauthorized access and ensuring data integrity."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;