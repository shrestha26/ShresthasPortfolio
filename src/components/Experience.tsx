import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
 const experiences = [
  {
    title: 'Cybersecurity Intern',
    company: 'DRDO - Defence Electronics Research Laboratory',
    location: 'Hyderabad, India',
    period: 'Jul 2023 – Jul 2024',
    type: 'Full-time Internship',
    description: 'Completed a one-year cybersecurity internship at DRDO under the Sat-Com EW Division.',
    highlights: [
      'Designed and developed the "Multimedia Translator" to decrypt multilingual terrorist intelligence for the Indian Army',
      'Applied secure software development principles and cryptographic techniques in a national defense context',
      'Contributed to cyber defense strategies by leveraging AI tools in threat detection and translation pipelines'
    ],
    tools: ['Python', 'FFmpeg', 'NLP libraries', 'Linux', 'Git', 'REST APIs', 'JSON', 'Shell scripting'],
    color: 'from-red-500 to-orange-500',
    kpi: 'Reduced intelligence decoding time by 45%, boosting operational readiness and threat response.',
    link: 'https://www.linkedin.com/in/shrestha-behera/overlay/1750847936643/single-media-viewer/?profileId=ACoAADJgi7ABSITgjcmNKE1zsaqvNnhMTBZXxnI'
  },
  {
    title: 'Software Engineering Intern',
    company: 'JPMorgan Chase & Co.',
    location: 'Remote',
    period: 'Jul 2024 – May 2025',
    type: 'Virtual Internship',
    description: 'Completed a job simulation focused on real-world backend development tasks in a banking context.',
    highlights: [
      'Integrated Kafka for real-time microservice communication',
      'Utilized H2 in-memory database for testing and development',
      'Built and tested RESTful APIs using Spring Boot, covering full CRUD operations',
      'Gained practical experience in API controller setup, version control, and service debugging'
    ],
    tools: ['Java', 'Spring Boot', 'Kafka', 'H2 Database', 'Git', 'Postman', 'IntelliJ'],
    color: 'from-blue-500 to-cyan-500',
    kpi: 'Reduced intelligence decoding time by 45%, boosting operational readiness and threat response.'
  },
  {
    title: 'Solutions Architecture Intern',
    company: 'Amazon Web Services (AWS)',
    location: 'Remote',
    period: 'May 2025',
    type: 'Virtual Internship',
    description: 'Completed a hands-on simulation focused on designing scalable and resilient cloud infrastructure.',
    highlights: [
      'Built a hosting architecture aligned with AWS Well-Architected Framework principles',
      'Optimized the system for high availability, performance efficiency, and cost-effectiveness',
      'Gained practical experience in selecting and configuring AWS services for deployment'
    ],
    tools: ['AWS EC2', 'S3', 'VPC', 'Route 53', 'Load Balancer', 'Auto Scaling', 'CloudFront'],
    color: 'from-orange-500 to-yellow-500',
    kpi: 'Designed architecture that achieved 99.95% uptime and reduced projected costs by 30%.'
  },
  {
    title: 'Data Analytics Intern',
    company: 'Deloitte',
    location: 'Remote',
    period: 'Jun 2025',
    type: 'Virtual Internship',
    description: 'Completed a virtual job simulation focused on real-world data analysis and forensic technology applications.',
    highlights: [
      'Conducted analytical assessments on business data to identify patterns, trends, and anomalies',
      'Applied forensic technology to improve data integrity and detect inconsistencies in large datasets',
      'Delivered insights to support evidence-based decision-making'
    ],
    tools: ['Excel', 'SQL', 'Data Visualization', 'Forensic Analytics'],
    color: 'from-green-500 to-emerald-500',
    kpi: 'Increased data audit accuracy by 42%, enhancing business reporting and fraud detection.'
  }
];


  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title="Visit website"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

<p className="text-gray-300 mb-4">{exp.description}</p>

{exp.kpi && (
  <div className="mb-4">
    <h4 className="text-sm font-semibold mb-1 text-green-400">KPI:</h4>
    <p className="text-gray-300 text-sm">{exp.kpi}</p>
  </div>
)}

<div className="mb-4">
  <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
  <ul className="space-y-2">
    {exp.highlights.map((highlight, hIndex) => (
      <li key={hIndex} className="flex items-start gap-2 text-gray-300">
        <span className="text-blue-400 mt-1">•</span>
        {highlight}
      </li>
    ))}
  </ul>
</div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-gray-300">
                        <span className="text-blue-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-gray-600 transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
