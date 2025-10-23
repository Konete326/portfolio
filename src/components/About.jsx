import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
            className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              I'm a passionate <span className="font-semibold text-primary-light dark:text-primary-dark">Full Stack Developer</span> with expertise in building modern, scalable web applications.
              With a strong foundation in both frontend and backend technologies, I specialize in creating
              seamless user experiences and robust server-side solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              My approach to development combines <span className="font-semibold text-primary-light dark:text-primary-dark">creativity</span> with <span className="font-semibold text-primary-light dark:text-primary-dark">problem-solving</span>, ensuring that every project
              I work on is not only functional but also innovative and user-friendly. I'm constantly learning
              and adapting to new technologies to stay at the forefront of web development.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Whether it's architecting complex systems with <span className="font-semibold text-primary-light dark:text-primary-dark">MERN</span> or <span className="font-semibold text-primary-light dark:text-primary-dark">MEAN</span> stack, building dynamic interfaces
              with Angular and React, or developing robust APIs with Node.js, Laravel, and .NET, I bring
              dedication and technical excellence to every challenge.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
