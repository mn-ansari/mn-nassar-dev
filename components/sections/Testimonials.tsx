'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Professor, BUITEMS',
      company: 'Department of Computer Science',
      content:
        'Nassar demonstrated exceptional skill in his Final Year Project on Agentic AI. His understanding of modern AI frameworks and ability to implement complex systems is outstanding.',
      rating: 5,
      avatar: '👨‍🏫',
    },
    {
      name: 'Ali Khan',
      role: 'Business Owner',
      company: 'Nafees Bakery',
      content:
        'The inventory system Nassar built transformed our bakery operations. We went from manual tracking to a fully automated system. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Zainab Ahmed',
      role: 'Tech Lead',
      company: 'Developer Community',
      content:
        'Nassar is an excellent developer and community contributor. His passion for AI and SaaS development is inspiring. Great to work with!',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      name: 'Hassan Malik',
      role: 'Startup Founder',
      company: 'RetailTech Solutions',
      content:
        'Working with Nassar on our SaaS platform was a great experience. He delivered a scalable, production-ready system ahead of schedule.',
      rating: 5,
      avatar: '👨‍💼',
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
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            What professors, clients, and collaborators say about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-lg p-8 relative overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass rounded-lg p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Happy Clients', value: '10+' },
              { label: 'Projects Shipped', value: '15+' },
              { label: 'Code Commits', value: '500+' },
              { label: 'Hours Invested', value: '1000+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
