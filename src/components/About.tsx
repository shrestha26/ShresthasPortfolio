import React from 'react';
import {
  MapPin,
  Shield,
  Code,
  Cloud,
  Cpu
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mb-8 text-gray-300">
          <MapPin size={20} />
          <span>New Delhi, India</span>
        </div>

        {/* About Description */}
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          I’m a dedicated cybersecurity enthusiast, Quantum AI developer, and
          software engineer with a strong interest in defence, security, and
          emerging technologies. I have a solid foundation in cybersecurity,
          software engineering, quantum computing, cloud computing, and data
          analytics.

          <br />
          <br />

          I’ve been fortunate to gain hands-on experience at esteemed
          organizations like{' '}
          <span className="text-blue-400 font-semibold">
            Cognizant
          </span>
          ,{' '}
          <span className="text-red-400 font-semibold">
            DRDO
          </span>
          , and{' '}
          <span className="text-green-400 font-semibold">
            JPMorgan Chase & Co.
          </span>
          , where I’ve worked on AI-driven and quantum-focused solutions,
          secure and scalable systems, and meaningful technology projects.
          At Cognizant, I contribute to Quantum AI initiatives and
          international client projects, while my experience at DRDO
          strengthened my interest in cybersecurity and defence technology.

          <br />
          <br />

          I’m always eager to learn, grow, and leverage emerging technologies
          to build secure, intelligent, and resilient solutions that create
          meaningful impact.
        </p>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Cybersecurity */}
          <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">

            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield
                className="text-blue-400"
                size={32}
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center">
              Cybersecurity
            </h3>

            <p className="text-gray-400 text-center">
              Specialized in threat detection, vulnerability assessment,
              secure software development, and cyber defence.
            </p>

          </div>

          {/* Quantum AI */}
          <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">

            <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu
                className="text-purple-400"
                size={32}
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center">
              Quantum AI
            </h3>

            <p className="text-gray-400 text-center">
              Exploring quantum computing, quantum machine learning,
              AI-driven solutions, and emerging quantum technologies.
            </p>

          </div>

          {/* Software Engineering */}
          <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">

            <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code
                className="text-cyan-400"
                size={32}
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center">
              Software Engineering
            </h3>

            <p className="text-gray-400 text-center">
              Full-stack development with expertise in Java, Python, React,
              REST APIs, and microservices architecture.
            </p>

          </div>

          {/* Cloud Computing */}
          <div className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">

            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud
                className="text-green-400"
                size={32}
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center">
              Cloud Computing
            </h3>

            <p className="text-gray-400 text-center">
              AWS certified with experience in designing scalable,
              resilient, and cost-effective cloud infrastructures.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
