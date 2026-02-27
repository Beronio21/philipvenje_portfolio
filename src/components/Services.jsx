import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Frontend Expertise",
      icon: "assets/frontend-icon.png",
      skills: [
        "React & Next.js Development",
        "Responsive Web Design",
        "Interactive UI/UX",
        "Performance Optimization",
        "Modern CSS/Tailwind"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Full-Stack Solutions",
      icon: "assets/backend-icon.png",
      skills: [
        "Node.js & Express",
        "RESTful API Design",
        "Database Architecture",
        "Authentication Systems",
        "Cloud Deployment"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "UI/UX Design",
      icon: "assets/design-icon.png",
      skills: [
        "Wireframing & Prototyping",
        "Figma Design Systems",
        "User Research",
        "Accessibility (a11y)",
        "Design-to-Code"
      ],
      color: "from-pink-500 to-orange-400"
    },
    {
      title: "Mobile Development",
      icon: "assets/mobile-icon.png",
      skills: [
        "React Native",
        "Progressive Web Apps",
        "Mobile-First Design",
        "Cross-Platform Apps",
        "App Store Deployment"
      ],
      color: "from-green-500 to-emerald-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-400">What I offer</h4>
        <h2 className="text-center text-5xl font-Ovo bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Services
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-4 text-gray-400 font-Ovo">
          I provide end-to-end development solutions, from concept to deployment, ensuring high-quality, scalable applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            {/* Glassmorphism card */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
            
            <div className="relative border border-white/10 rounded-2xl p-8 hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer h-full bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                  <img src={service.icon} alt={service.title} className="w-8 invert" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {service.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 group/item"
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                    <span className="group-hover/item:text-white transition-colors duration-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Hover arrow indicator */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6"
              >
                <img src="assets/arrow-icon.png" alt="arrow" className="w-6 rotate-[-45deg] opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
