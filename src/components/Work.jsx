import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      title: "Frontend Portfolio",
      category: "Frontend Development",
      image: "assets/work-1.png",
      description: "A modern portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind", "Vite"],
      github: "#",
      demo: "#"
    },
    {
      title: "Academic Archive System",
      category: "Full-Stack Development",
      image: "assets/work-2.png",
      description: "Document management system for academic institutions",
      tech: ["Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "EcoSentry IoT System",
      category: "IoT & Web Development",
      image: "assets/work-3.png",
      description: "Environmental monitoring dashboard with real-time data",
      tech: ["React", "Node.js", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      title: "UI/UX Design System",
      category: "UI/UX Design",
      image: "assets/work-4.png",
      description: "Comprehensive design system and component library",
      tech: ["Figma", "React", "Storybook"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-400">My portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Latest Works
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-4 text-gray-400 font-Ovo">
          Here are some of my recent projects. Each one represents a unique challenge and creative solution.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative group rounded-2xl overflow-hidden"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative rounded-2xl overflow-hidden bg-gray-900">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-purple-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <a 
                      href={project.github}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors flex items-center gap-2"
                    >
                      <img src="assets/github-icon.png" alt="GitHub" className="w-4" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-sm text-white transition-all flex items-center gap-2"
                    >
                      <img src="assets/external-icon.png" alt="Demo" className="w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <a 
          href="https://github.com/Beronio21"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
        >
          <img src="assets/github-icon.png" alt="GitHub" className="w-5 invert" />
          View All Projects
          <img src="assets/arrow-icon.png" alt="arrow" className="w-4 rotate-[-45deg]" />
        </a>
      </motion.div>
    </div>
  );
};

export default Work;
