import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'UI/UX Designer', 'React Specialist', 'Node.js Developer'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <img 
          src="/assets/profile-img.png" 
          alt="Philip Venje" 
          className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl"
        />
      </motion.div>
      
      <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Philip Venje
        <img src="/assets/hand-icon.png" alt="wave" className="w-6" />
      </motion.h3>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight"
      >
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {text}
        </span>
        <Cursor cursorColor="#8b5cf6" />
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-300"
      >
        I'm a passionate developer who loves building beautiful, functional, and user-friendly applications.
      </motion.p>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <a 
          href="#contact" 
          className="px-10 py-3 border border-white rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white flex items-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
        >
          Contact me 
          <img src="/assets/arrow-icon.png" alt="arrow" className="w-4" />
        </a>
        <a 
          href="/resume.pdf" 
          download 
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          My resume 
          <img src="/assets/download-icon.png" alt="download" className="w-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
