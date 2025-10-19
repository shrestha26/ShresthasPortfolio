import React from 'react';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center">
                <GraduationCap className="text-blue-400" size={40} />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
            <p className="text-xl text-blue-400 font-semibold mb-4">Computer Science</p>
            <p className="text-lg text-gray-300 mb-4">Lovely Professional University</p>

            <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>May 2020 – July 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Punjab, India</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="text-yellow-400" size={20} />
              <span className="text-xl font-semibold">GPA: 7.28/10</span>
            </div>

            <div className="text-left max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold mb-3">Relevant Coursework:</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  'Data Structures and Algorithms',
                  'Operating Systems',
                  'Computer Networks',
                  'Database Management Systems',
                  'Object-Oriented Programming',
                  'Web Technologies',
                  'Artificial Intelligence',
                  'Cloud Computing'
                ].map((course, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="text-blue-400">•</span>
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
