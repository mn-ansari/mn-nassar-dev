'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="z-10 order-last sm:order-first"
        >
          <motion.div variants={item}>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            Hi, I am <br />
            <span className="gradient-text">Muhammad Nassar</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed"
          >
            Full Stack Developer building AI-powered business systems and scalable SaaS platforms. Specialized in modern web technologies and intelligent automation.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-blue-400 font-semibold mb-8"
          >
            React • Next.js • Node.js • Python • TypeScript • N8N
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <a href="#projects" className="flex items-center">
                View My Projects
                <FiArrowRight />
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <a href="#contact">Get In Touch</a>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex gap-6">
            {[
              { icon: FiMail, href: 'mailto:nassaransari@gmail.com', label: 'Email' },
              { icon: FiGithub, href: 'https://github.com/mn-ansari', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-nassar-538b781a5/', label: 'LinkedIn' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-500/40 transition-smooth"
                title={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative order-first sm:order-last"
        >
          <div className="relative w-full h-full">
            {/* Animated background glow - enhanced */}
            <motion.div 
              animate={{ 
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 -z-10 rounded-3xl shadow-2xl"
            ></motion.div>

            {/* Main image container with elegant frame */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-3xl shadow-2xl group"
            >
              {/* Premium gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/20 to-blue-600/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated overlay shine effect */}
              <motion.div
                animate={{ 
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent"
              ></motion.div>
              
              {/* Profile image - showing upper body/face with animations */}
              <motion.img
                src="/main.png"
                alt="Muhammad Nassar - Full Stack Developer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover object-top scale-125 group-hover:grayscale-0 transition-all duration-300"
                style={{
                  maxHeight: '600px',
                  filter: 'brightness(1.05) contrast(1.1)',
                  transition: 'filter 0.3s ease'
                } as React.CSSProperties}
              />
              
              {/* Elegant overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary/70 to-transparent z-20"></div>
              
              {/* Premium animated border effect */}
              <motion.div 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl border-2 border-blue-400/50 z-10 group-hover:border-blue-400/80 transition-all duration-300"
              ></motion.div>

              {/* Corner accent lines - animated */}
              <motion.div 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-blue-400 rounded-tl-xl z-10"
              ></motion.div>
              <motion.div 
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-purple-400 rounded-br-xl z-10"
              ></motion.div>
            </motion.div>
            
            {/* Enhanced decorative corner elements with more movement */}
            <motion.div
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-32 h-32 border-2 border-blue-400/30 rounded-3xl pointer-events-none"
            ></motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0], 
                rotate: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-purple-400/30 rounded-full pointer-events-none"
            ></motion.div>

            {/* Floating particles */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-20 w-3 h-3 bg-blue-400 rounded-full z-5 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 left-10 w-2 h-2 bg-purple-400 rounded-full z-5 blur-sm"
            ></motion.div>

            {/* Enhanced glow effect background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-blue-600/15 rounded-3xl blur-3xl scale-125 group-hover:from-blue-600/25 group-hover:to-blue-600/25 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
