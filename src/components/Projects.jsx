import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, secure payment processing, and advanced search capabilities built with MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveDemo: '#',
      github: 'https://github.com/Konete326/',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management system with drag-and-drop interface, team workspaces, and progress tracking using Angular and .NET.',
      technologies: ['Angular', '.NET', 'SQL Server', 'SignalR'],
      liveDemo: '#',
      github: 'https://github.com/Konete326/',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with rich text editor, comment system, social sharing, and SEO optimization built with Laravel and Vue.js.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      liveDemo: '#',
      github: 'https://github.com/Konete326/',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time metrics, scheduled posting, and multi-platform integration.',
      technologies: ['React', 'Node.js', 'Firebase', 'Chart.js'],
      liveDemo: '#',
      github: 'https://github.com/Konete326/',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Booking System',
      description: 'Comprehensive booking and reservation system with calendar integration, automated notifications, and payment processing.',
      technologies: ['Angular', 'PHP', 'MySQL', 'PayPal API'],
      liveDemo: '#',
      github: 'https://github.com/Konete326/',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and customizable alerts using React and OpenWeather API.',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      liveDemo: '#',
      github: 'https://github.com/Konete326/',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
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
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            variants={cardVariants}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/Konete326/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-lg text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Github className="w-6 h-6" />
              <span>View More Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
