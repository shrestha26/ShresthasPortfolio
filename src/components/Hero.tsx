import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, User } from 'lucide-react';

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
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 relative">
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 p-1 animate-pulse delay-500">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                
                {/* Profile image placeholder with professional styling */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center backdrop-blur-sm border border-gray-600/30">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shadow-inner">
                    <User size={60} className="text-gray-300" />
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              {/* Professional title badge */}
              <div className="inline-block px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/30 mb-4">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Available for Opportunities
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-fade-in">
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

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up delay-400"
          >
            Explore My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;