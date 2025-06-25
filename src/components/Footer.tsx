import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="text-red-400" size={16} />
            <span className="text-gray-400">and</span>
            <Code className="text-blue-400" size={16} />
            <span className="text-gray-400">by Shrestha Behera</span>
          </div>
          
          <p className="text-gray-500 text-sm mb-4">
            © 2025 Shrestha Behera. All rights reserved.
          </p>
          
          <div className="text-xs text-gray-600">
            <p>Cybersecurity Expert • Software Engineer • Cloud Solutions Architect</p>
            <p className="mt-1">Passionate about securing digital infrastructures and building scalable solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;