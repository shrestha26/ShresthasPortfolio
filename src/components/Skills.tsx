import React from 'react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Technical Skills
    { name: "Penetration Testing", proficiency: 95, category: "technical" },
    { name: "Network Security", proficiency: 90, category: "technical" },
    { name: "Python", proficiency: 85, category: "technical" },
    { name: "C/C++", proficiency: 80, category: "technical" },
    { name: "JavaScript", proficiency: 85, category: "technical" },
    { name: "PHP", proficiency: 75, category: "technical" },
    { name: "Wireshark", proficiency: 90, category: "technical" },
    { name: "tcpdump", proficiency: 85, category: "technical" },
    { name: "Linux", proficiency: 90, category: "technical" },
    
    // Soft Skills
    { name: "Problem-Solving", proficiency: 95, category: "soft" },
    { name: "Critical Thinking", proficiency: 90, category: "soft" },
    { name: "Communication", proficiency: 85, category: "soft" },
    { name: "Team Leadership", proficiency: 90, category: "soft" },
  ];

  const certifications = [
    "GIAC Certification",
    "Comptia+ Certification",
    "CHFI Certification",
    "GPEN Certification",
    "OSCP Certification",
    "CEH Certification"
  ];

  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const softSkills = skills.filter(skill => skill.category === "soft");

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white inline-block relative">
            Skills & Certifications
            <span className="block h-1 w-24 mx-auto mt-2 bg-teal-500"></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills, along with industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-teal-600 dark:text-teal-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-teal-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        animation: `growWidth-${index} 1.5s ease-out`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-slate-700 rounded-lg p-4 border border-slate-200 dark:border-slate-600 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-800 dark:text-white">{skill.name}</h4>
                      <span className="text-sm text-teal-600 dark:text-teal-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1.5">
                      <div 
                        className="bg-teal-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-slate-700 border border-teal-100 dark:border-teal-900/50 rounded-lg p-3 flex items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-slate-800 dark:text-slate-200">{cert}</span>
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

export default Skills;