import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const titles = titleRef.current?.querySelectorAll('span');
    if (titles) {
      titles.forEach((title, index) => {
        setTimeout(() => {
          title.classList.add('translate-y-0', 'opacity-100');
        }, 300 * index);
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
          {/* <p className="text-2xl sm:text-3xl text-teal-600 dark:text-teal-400 font-mono"> Hi, I am </p> */}
            <h1
              ref={titleRef}
              className="text-8xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight overflow-hidden"
            >
              <span className="block transform translate-y-12 opacity-0 transition-all duration-700 ease-out">
  <span className="text-[#0d9488]">Hi, I'm</span>
  <br />
  Shrestha Behera
  <br />
  I secure digital frontiers.
</span>

              <span className="block text-slate-900 transform translate-y-12 opacity-0 transition-all duration-700 ease-out delay-300">
                  I 
              </span>

            </h1>
            <p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-xl animate-fadeIn opacity-0"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              I'm a cybersecurity engineer and software developer specializing in penetration testing,
              secure software development, and network security. Currently focused on advancing
              defense systems and securing critical infrastructure.
            </p>
            <div
              className="pt-4 animate-fadeIn opacity-0"
              style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 rounded-md bg-teal-600 dark:bg-teal-500 text-white font-medium hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-300"
              >
                Get in touch <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT - GIF Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-[370px] h-[300px] relative overflow-hidden rounded-lg border-0 border-indigo-200 dark:border-indigo-900 shadow-xl animate-float">
              <img
                src="hi.gif"
                alt="Animated greeting"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;