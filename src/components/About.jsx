import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Award, Users } from 'lucide-react';
import LazyImage from './LazyImage';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            About Me
          </motion.h2>

          {/* Two Column Layout - Image and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Professional Image with Stats */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <LazyImage
                    src="/uploads/sameer cv.jpg"
                    alt="Muhammad Sameer - Full Stack Developer"
                    className="w-full h-auto"
                    fadeIn={true}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-yellow-500" />
                    <div>
                      <div className="text-2xl font-bold text-white">6+</div>
                      <div className="text-xs text-gray-300">Projects</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-6 -right-6 glass rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-blue-500" />
                    <div>
                      <div className="text-2xl font-bold text-white">23K+</div>
                      <div className="text-xs text-gray-300">Users</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> with expertise in building modern, scalable web applications.
              With a strong foundation in both frontend and backend technologies, I specialize in creating
              seamless user experiences and robust server-side solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              My approach to development combines <span className="font-semibold text-blue-600 dark:text-blue-400">creativity</span> with <span className="font-semibold text-blue-600 dark:text-blue-400">problem-solving</span>, ensuring that every project
              I work on is not only functional but also innovative and user-friendly. I'm constantly learning
              and adapting to new technologies to stay at the forefront of web development.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Whether it's architecting complex systems with <span className="font-semibold text-blue-600 dark:text-blue-400">MERN</span> or <span className="font-semibold text-blue-600 dark:text-blue-400">MEAN</span> stack, building dynamic interfaces
              with Angular and React, or developing robust APIs with Node.js, Laravel, and .NET, I bring
              dedication and technical excellence to every challenge.
            </motion.p>
            </div>
          </div>

          {/* Tech Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Code2 className="w-8 h-8 mx-auto mb-3 text-purple-500" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">MERN</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Stack Expert</div>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">.NET</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Framework</div>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Code2 className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">Laravel</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">PHP Master</div>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Award className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-lg font-bold text-gray-900 dark:text-white">Full Stack</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Developer</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
