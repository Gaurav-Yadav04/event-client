import { motion, useAnimation } from "framer-motion";
import { FaTools, FaBolt, FaUserCog } from "react-icons/fa";
import { useEffect } from "react";

export default function Loader() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { repeat: Infinity, duration: 4, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white animate-gradientBackground">

      {/* Orbiting Icons */}
      <motion.div
        className="relative w-32 h-32 mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaTools />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        >
          <FaBolt />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <FaUserCog />
        </motion.div>
      </motion.div>

      {/* Typing Text Animation */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
        className="text-3xl font-bold mb-2"
      >
        FixIt is Loading...
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="text-sm"
      >
        Connecting you with trusted workers ⚡
      </motion.p>

      {/* Gradient Shimmer Progress Bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full mt-6 overflow-hidden relative">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-white/80 via-white to-white/80 rounded-full absolute left-0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>

    </div>
  );
}