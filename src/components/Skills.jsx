import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiAngular, SiReact, SiHtml5, SiCss3, SiJavascript,
  SiNodedotjs, SiLaravel, SiDotnet, SiPhp, SiCsharp,
  SiMysql, SiMongodb, SiFirebase, SiMicrosoftsqlserver
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: SiAngular, color: 'text-red-600', level: 90 },
        { name: 'React', icon: SiReact, color: 'text-blue-500', level: 85 },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-600', level: 95 },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-600', level: 95 },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', level: 88 },
        { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', level: 85 },
        { name: '.NET', icon: SiDotnet, color: 'text-purple-600', level: 80 },
        { name: 'PHP', icon: SiPhp, color: 'text-indigo-600', level: 85 },
        { name: 'C#', icon: SiCsharp, color: 'text-purple-700', level: 82 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-700', level: 90 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 85 },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-600', level: 80 },
        { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: 'text-red-700', level: 88 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-light dark:text-primary-dark">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Stack Expertise Badge */}
          <motion.div
            variants={categoryVariants}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              🚀 Full Stack Expertise: MERN & MEAN
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
