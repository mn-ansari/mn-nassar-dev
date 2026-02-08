'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'UI/UX Design'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      category: 'Backend',
      skills: ['Node.js','TypeScript', 'Express.js', 'PHP', 'Laravel', 'Python'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB', 'SQLite'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      category: 'AI & Automation',
      skills: ['N8n', 'OpenAI APIs', 'Agent Systems', 'Prompt Engineering', 'Vector Databases'],
      color: 'from-orange-600 to-red-600',
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'VS Code'],
      color: 'from-indigo-600 to-blue-600',
    },
    {
      category: 'Other',
      skills: ['React Native', 'Responsive Design', 'Agile'],
      color: 'from-rose-600 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            A comprehensive set of technical skills developed through real-world projects and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-lg p-6 overflow-hidden group"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${category.color} bg-opacity-20 text-gray-200 border border-gray-600 hover:border-gray-400 transition-smooth`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>

          <div className="space-y-6">
            {[
                { skill: 'Node.js & Backend Development', level: 85 },
                { skill: 'Python ', level: 80 },
                //   { skill: 'AI & LangChain Integration', level: 75 },
                { skill: 'React & Next.js', level: 60 },
              { skill: 'Database Design & SQL', level: 75 },
              { skill: 'Frontend Design & UI/UX', level: 80 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span className="text-blue-400 font-bold">{item.level}%</span>
                </div>
                <motion.div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
