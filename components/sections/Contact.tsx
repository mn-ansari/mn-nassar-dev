'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'nassaransari@gmail.com',
      href: 'mailto:nassaransari@gmail.com',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Quetta Balochistan, Pakistan',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: FiMail, href: 'mailto:nassaransari@gmail.com', label: 'Email' },
    { icon: FiGithub, href: 'https://github.com/mn-ansari', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-nassar-538b781a5/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/nassar', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always excited to discuss new ideas and opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-lg p-8 text-center hover:border-blue-400/50 transition-smooth group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center group-hover:from-blue-600/50 group-hover:to-purple-600/50 transition-smooth">
                <method.icon size={28} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.label}</h3>
              <p className="text-gray-400 break-all">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form and Social Links */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center min-h-96"
              >
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-400 text-center">
                  Your message has been sent successfully. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary/50 border border-gray-600 focus:border-blue-400 focus:outline-none transition-smooth text-white placeholder-gray-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary/50 border border-gray-600 focus:border-blue-400 focus:outline-none transition-smooth text-white placeholder-gray-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary/50 border border-gray-600 focus:border-blue-400 focus:outline-none transition-smooth text-white placeholder-gray-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-primary/50 border border-gray-600 focus:border-blue-400 focus:outline-none transition-smooth text-white placeholder-gray-500 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary font-semibold py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Social and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Info */}
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to get in touch!
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Response Time', value: 'Within 24 hours' },
                  { title: 'Availability', value: 'Open to projects & collaboration' },
                  { title: 'Location', value: 'Pakistan (Remote friendly)' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-primary/50 rounded-lg border border-gray-600"
                  >
                    <span className="text-gray-400">{item.title}</span>
                    <span className="font-semibold text-blue-400">{item.value}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-600 pt-8">
                <p className="text-sm text-gray-400 mb-4 font-semibold">Follow Me On</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 hover:bg-blue-500/40 transition-smooth"
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
