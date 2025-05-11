import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("drdo");

  const experiences: ExperienceItem[] = [
    {
      id: "drdo",
      title: "Cybersecurity Intern",
      company: "DLRL, DRDO",
      location: "Hyderabad, Telangana",
      period: "06/2023 - 07/2024",
      description: [
        "Conducted cybersecurity research under DRDO, publishing a thesis on advanced encryption techniques.",
        "Developed the \"Multimedia Translator\" for the Indian Army to decrypt and analyze terrorist data.",
        "Contributed to DHARASHAKTI and AGNI-5 projects, supporting defense export strategies.",
        "Engineered encryption algorithms to secure sensitive military data and enhance threat analysis.",
        "Automated translation of complex intelligence data into actionable insights for military operations."
      ]
    },
    {
      id: "brave",
      title: "Freelance",
      company: "Brave Software",
      location: "India",
      period: "08/2021 - 07/2024",
      description: [
        "Delivered end-to-end website development using React.js and full-stack technologies to meet client requirements.",
        "Leveraged cryptocurrency earnings through web development projects, successfully converting Bitcoins into INR."
      ]
    },
    {
      id: "jpmorgan",
      title: "Intern",
      company: "JP Morgan Chase & Co.",
      location: "Delhi",
      period: "01/2023 - 02/2024",
      description: [
        "Analyzed and mitigated security vulnerabilities such as Buffer Overflows, SQL Injection, and XSS to enhance system security and also analyzed the financial assessments.",
        "Conducted traffic analysis using Wireshark and tcpdump to monitor and secure network communications.",
        "Developed skills in Linux-based system administration for securing servers and implementing security measures."
      ]
    },
    {
      id: "google",
      title: "GDSC Team Leader",
      company: "Google",
      location: "India",
      period: "03/2022 - 02/2024",
      description: [
        "Led a team to design and patent the \"Scientific Calculator for Space Scientists,\" a software application for ISRO.",
        "Received recognition for technical innovation from institutional leaders and ISRO scientists."
      ]
    }
  ];

  const activeExperience = experiences.find(exp => exp.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white inline-block relative">
            My Experience
            <span className="block h-1 w-24 mx-auto mt-2 bg-teal-500"></span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Professional journey through cybersecurity and software development roles.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto scrollbar-hide">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal rounded-lg mb-2 font-medium transition-colors ${
                  activeTab === exp.id
                    ? "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-400 border-l-4 border-teal-500"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="lg:w-3/4 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {activeExperience.title} <span className="text-teal-600 dark:text-teal-400">@ {activeExperience.company}</span>
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 dark:text-slate-400 text-sm mt-2">
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{activeExperience.period}</span>
                </div>
                <div className="flex items-center mt-1 sm:mt-0">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{activeExperience.location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {activeExperience.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-2">▹</span>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;