import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Award, Users, TrendingUp, Zap } from 'lucide-react';
import { realProjects, projectCategories, portfolioStats } from '../data/projects';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState(projectCategories.ALL);

  const filteredProjects = selectedCategory === projectCategories.ALL
    ? realProjects
    : realProjects.filter(project => project.category.includes(selectedCategory));

  const categories = [
    { id: projectCategories.ALL, label: 'All Projects', count: realProjects.length },
    { id: projectCategories.MERN, label: 'MERN Stack', count: realProjects.filter(p => p.category.includes(projectCategories.MERN)).length },
    { id: projectCategories.DOTNET, label: '.NET', count: realProjects.filter(p => p.category.includes(projectCategories.DOTNET)).length },
    { id: projectCategories.LARAVEL, label: 'Laravel', count: realProjects.filter(p => p.category.includes(projectCategories.LARAVEL)).length },
    { id: projectCategories.ENTERPRISE, label: 'Enterprise', count: realProjects.filter(p => p.category.includes(projectCategories.ENTERPRISE)).length },
    { id: projectCategories.ECOMMERCE, label: 'E-commerce', count: realProjects.filter(p => p.category.includes(projectCategories.ECOMMERCE)).length },
  ];

  const getComplexityColor = (complexity) => {
    const colors = {
      yellow: 'bg-yellow-500',
      orange: 'bg-orange-500',
      purple: 'bg-purple-500',
    };
    return colors[complexity.color] || 'bg-gray-500';
  };

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

          {/* Portfolio Stats */}
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">{portfolioStats.totalProjects}</div>
              <div className="text-sm opacity-90">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">{portfolioStats.totalUsers}</div>
              <div className="text-sm opacity-90">Total Users</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">{portfolioStats.technologiesMastered.length}+</div>
              <div className="text-sm opacity-90">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">{portfolioStats.domains.length}</div>
              <div className="text-sm opacity-90">Domains</div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            variants={cardVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6">
                  {/* Complexity Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getComplexityColor(project.complexity)}`}>
                      {project.complexity.label}
                    </span>
                    {project.subtitle && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {project.category.includes('enterprise') && '🏢 '}
                        {project.category.includes('ecommerce') && '🛍️ '}
                        {project.category.includes('social') && '👥 '}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Subtitle */}
                  {project.subtitle && (
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4 text-sm">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4">
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
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
