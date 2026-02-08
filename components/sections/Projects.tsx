'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Business Management Hub',
      description: 'Comprehensive business management suite with integrated modules for inventory, finance, HR, and operations management.',
      image: '/bmh.png',
      imageType: 'img',
      tech: ['React 18.2.0', 'Next.js 14.1.0', 'TypeScript 5.3.3', 'Tailwind CSS 3.4.1', 'MySQL', 'Node.js'],
      problem: 'Businesses needed a unified platform to manage multiple operations without scattered tools and manual processes.',
      solution: 'Built an all-in-one business management hub integrating inventory tracking, financial analytics, HR management, and operational dashboards.',
      github: 'https://github.com/mn-ansari/business-management-hub',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Distribution Management System - HANS Enterprises',
      description: 'Advanced distribution network management platform for logistics optimization, real-time tracking, and supply chain analytics.',
      image: '/dms.png',
      imageType: 'img',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Real-time Tracking', 'Analytics'],
      problem: 'HANS Enterprises struggled with inefficient distribution logistics, manual tracking, and limited visibility across their supply chain.',
      solution: 'Built a comprehensive distribution management system with real-time tracking, route optimization, inventory management, and detailed analytics dashboards.',
      github: 'https://github.com/mn-ansari/Distribution-Management-System',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Java Swing Server Chat System',
      description: 'Multi-client chat application with real-time messaging and user management capabilities.',
      image: '💬',
      tech: ['Java', 'Swing', 'Socket Programming', 'Multithreading'],
      problem: 'Need for a lightweight desktop chat application for local network communication.',
      solution: 'Built a robust chat system using Java networking with real-time message delivery.',
      github: '#',
      live: '#',
      featured: false,
    },
//     {
//       id: 4,
//       title: 'E-Commerce Dashboard',
//       description: 'Modern dashboard for e-commerce analytics with real-time sales tracking and product management.',
//       image: '📊',
//       tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration', 'Chart.js'],
//       problem: 'Business owners needed a clear view of sales metrics and inventory status.',
//       solution: 'Designed an intuitive dashboard with real-time analytics and interactive charts.',
//       github: '#',
//       live: '#',
//       featured: false,
//     },
//     {
//       id: 5,
//       title: 'AI Content Generator',
//       description: 'Application leveraging LangChain and OpenAI APIs to generate optimized content for various use cases.',
//       image: '✨',
//       tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'React', 'PostgreSQL'],
//       problem: 'Content creation was time-consuming and required multiple revisions.',
//       solution: 'Built an AI-powered system that generates, refines, and optimizes content using advanced AI models.',
//       github: '#',
//       live: '#',
//       featured: false,
//     },
//     {
//       id: 6,
//       title: 'Task Management App',
//       description: 'Collaborative task management application with real-time updates and team collaboration features.',
//       image: '✅',
//       tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
//       problem: 'Teams needed better task coordination and collaboration tools.',
//       solution: 'Created a real-time task management platform with beautiful UI and smooth animations.',
//       github: '#',
//       live: '#',
//       featured: false,
//     },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            A selection of projects showcasing my ability to build scalable, user-centric solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-12 mb-16"
        >
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`glass rounded-lg overflow-hidden grid md:grid-cols-2 gap-8 p-8 hover:border-blue-400/50 transition-smooth group`}
              >
                {/* Image/Icon */}
                <motion.div
                  className={`flex items-center justify-center rounded-lg overflow-hidden glass-md bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-smooth ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.imageType === 'img' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center aspect-square"
                    />
                  ) : (
                    <div className="text-8xl">{project.image}</div>
                  )}
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
                    Featured Project
                  </span>

                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-300 mb-2">Problem Solved:</p>
                    <p className="text-gray-400 text-sm">{project.problem}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-300 mb-2">Solution:</p>
                    <p className="text-gray-400 text-sm">{project.solution}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 btn-primary"
                    >
                      <FiGithub /> GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 btn-secondary"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-lg p-6 flex flex-col h-full hover:border-blue-400/50 transition-smooth group"
              >
                <div className="text-6xl mb-4">{project.image}</div>

                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-blue-400 hover:text-blue-300 transition-smooth"
                  >
                    <FiGithub size={18} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-blue-400 hover:text-blue-300 transition-smooth"
                  >
                    <FiExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
