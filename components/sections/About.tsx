'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiBriefcase } from 'react-icons/fi';

const About: React.FC = () => {
  const stats = [
    { icon: FiBriefcase, label: 'Projects Completed', value: '20+' },
    { icon: FiAward, label: 'Technologies', value: '20+' },
    { icon: FiBook, label: 'Years Learning', value: '4+' },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer specializing in building intelligent business systems and scalable SaaS platforms. Based on my Final Year Project on Agentic AI, I create automation-driven solutions that solve real-world problems.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              My expertise spans across frontend development with React and Next.js, backend systems with Node.js and Python, and AI integration using LangChain and OpenAI APIs. I'm passionate about creating intuitive dashboards and inventory management systems that help businesses operate efficiently.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              During my time at BUITEMS, I developed strong foundations in software architecture, led community initiatives as a Developer Club member, and continuously expanded my skills in modern web technologies and AI automation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-blue-400 text-2xl mb-2 flex justify-center">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                title: 'Education',
                details: 'BUITEMS - Software Engineering Student',
                description: 'Building strong problem solving skills through hands on projects in full stack systems, SaaS platforms, and AI driven applications.',
              },
              {
                title: 'Final Year Project',
                details: 'Agentic AI Systems',
                description: 'Built intelligent agent systems using N8N and modern AI frameworks for business automation.',
              },
              {
                title: 'Experience',
                details: 'Full Stack Development',
                description: 'Created SaaS platforms, inventory management systems, and real-time dashboards.',
              },
              {
                title: 'Community',
                details: 'Developer Club, Head of IT Team',
                description: 'Leading technical initiatives, mentoring members, and managing development workflows for events, projects, and community driven programs across campus.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-lg hover:border-blue-400/50 transition-smooth"
              >
                <h3 className="text-blue-400 font-semibold mb-2">{item.title}</h3>
                <p className="font-semibold mb-2">{item.details}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
