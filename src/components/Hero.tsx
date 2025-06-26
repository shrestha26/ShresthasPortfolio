import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Section */}
          <div className="mt-6 mb-2 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-2 relative">
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 p-1 animate-pulse delay-500">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>

                {/* Profile image */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center backdrop-blur-sm border border-gray-600/30">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                    <img
                      src="/profile.jpeg"
                      alt="Shrestha Behera"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Shrestha Behera
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
            Cybersecurity Expert • Software Engineer • Cloud Solutions Architect
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Passionate about securing digital infrastructures and building scalable solutions. 
            Experience with DRDO, JPMorgan Chase, AWS, and Deloitte.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up delay-300">
            <a
              href="mailto:shrestha26kld@gmail.com"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="tel:+918260707741"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
            <a
              href="https://linkedin.com/in/shrestha-behera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/shrestha26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-400">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>

            <a
              href="/ShresthaBeheraResumelatest.pdf"
              download="ShresthaBeheraResumelatest.pdf"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-6 animate-bounce">
            <ChevronDown size={28} className="text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
