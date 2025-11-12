import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Angular",
  "Node.js",
  "Tailwind",
  "JavaScript",
  "Java",
  "MongoDB",
  "Express",
  "Git",
  "TypeScript",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              // className="bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500
              //            p-6 rounded-2xl shadow-2xl w-40 h-40 flex items-center justify-center
              //            cursor-pointer text-xl font-bold text-white transform transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
