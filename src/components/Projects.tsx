import React, { useState } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
  classified: boolean;
}

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Multimedia Translator",
      description: "Developed for the Indian Army to decrypt and analyze terrorist data. Features advanced encryption algorithms and automated translation of intelligence data.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Encryption", "Python", "NLP", "Military"],
      classified: true
    },
    {
      title: "Scientific Calculator for Space Scientists",
      description: "Patented application designed for ISRO scientists. Provides specialized calculations for orbital mechanics, propulsion systems, and space mission planning.",
      image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "Physics", "UI/UX", "ISRO"],
      link: "#",
      repo: "#",
      classified: false
    },
    {
      title: "Network Traffic Analyzer",
      description: "Tool used at JP Morgan to monitor and secure network communications. Features real-time analysis, threat detection, and visualization of traffic patterns.",
      image: "https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Wireshark", "Python", "Security", "Data Visualization"],
      repo: "#",
      classified: false
    },
    {
      title: "DHARASHAKTI Project Contribution",
      description: "Contributed to this defense project by developing security algorithms and implementing encryption techniques for sensitive military communications.",
      image: "https://cdn1.img.sputniknews.in/img/07e7/08/0f/3623804_0:75:800:525_1920x0_80_0_0_80bd0f8f84a8edf434a33dbcefa98643.jpg",
      tags: ["C++", "Cryptography", "Defense", "Security"],
      classified: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white inline-block relative">
            Featured Projects
            <span className="block h-1 w-24 mx-auto mt-2 bg-teal-500"></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my work in cybersecurity, software development, and defense technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
                {project.classified && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Lock className="w-3 h-3 mr-1" />
                    Classified
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;