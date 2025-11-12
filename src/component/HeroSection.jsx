import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import profileImg from "../assets/Photos.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" m-16 p-2.5 relative flex flex-col md:flex-row justify-center items-center  p-6 overflow-hidden text-white"
    >
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-gradient bg-[length:200%_200%] -z-10"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-yellow-300">Satish Jawarkar</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
          I’m a passionate Software Developer creating modern, interactive, and
          responsive web applications with a focus on user experience and
          design.
        </p>
        <Button
          variant="contained"
          color="secondary"
          href="#projects"
          className="hero-btn font-bold py-3 px-6 text-lg rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          View My Work
        </Button>
      </motion.div>

      {/* Floating Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
        className="flex-1 mt-10 md:mt-0 flex justify-center z-10"
      >
        <div className="relative mt-3 w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 hover:scale-105 transition-transform">
          <img src={profileImg} alt="Profile" className="about-img" />
          {/* Optional glow effect */}
          <div className="absolute inset-0 rounded-full shadow-xl opacity-20 pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Optional floating shapes / decorative circles */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full opacity-30 animate-pulse -z-10"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse -z-10"></div>
    </section>
  );
};

export default HeroSection;
