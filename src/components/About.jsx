import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoList = [
    { icon: "assets/code-icon.png", title: "Languages", description: "HTML5, CSS3, JavaScript, React Js, Tailwind CSS" },
    { icon: "assets/edu-icon.png", title: "Education", description: "BS in Computer Science (Expected June 2025)" },
    { icon: "assets/project-icon.png", title: "Projects", description: "Built more than 5 projects" }
  ];

  const tools = [
    { name: "VSCode", icon: "assets/vscode.png", color: "#007ACC" },
    { name: "Node.js", icon: "assets/node.png", color: "#339933" },
    { name: "MongoDB", icon: "assets/mongodb.png", color: "#47A248" },
    { name: "Figma", icon: "assets/figma.png", color: "#F24E1E" },
    { name: "Git", icon: "assets/git.png", color: "#F05032" }
  ];

  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "JavaScript/TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "MongoDB/PostgreSQL", level: 80 }
  ];

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-400">Introduction</h4>
        <h2 className="text-center text-5xl font-Ovo bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">About me</h2>
      </motion.div>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-64 sm:w-80 rounded-3xl max-w-none group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img 
            src="/assets/user-image.png" 
            alt="User" 
            className="relative w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-gray-300 leading-relaxed text-lg">
            I am an aspiring Full-Stack Developer with a passion for building scalable and user-friendly applications. My technical skills span front-end and back-end development, including expertise in the MERN stack (MongoDB, Express.js, React, Node.js).
          </p>

          {/* Animated Skill Bars */}
          <div className="mb-10" ref={ref}>
            <h3 className="text-xl font-semibold mb-6 text-white/90">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">{skill.name}</span>
                    <span className="text-sm text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative border border-white/10 rounded-xl px-6 py-6 hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer bg-white/5 backdrop-blur-sm">
                  <img src={info.icon} alt={info.title} className="w-7 mt-3 mb-3" />
                  <h3 className="my-4 font-semibold text-gray-200">{info.title}</h3>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h4 className="my-6 text-gray-400">Tools I use</h4>
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="relative group"
              >
                <div 
                  className="absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-300"
                  style={{ backgroundColor: tool.color }}
                ></div>
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="relative w-10 sm:w-14 cursor-pointer transition duration-300 hover:-translate-y-1"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
