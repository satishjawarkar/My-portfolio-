import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    img: "project1.png",
    link: "#",
    desc: "Personal portfolio using React & Tailwind CSS.",
  },
  {
    title: "Chat App",
    img: "project2.png",
    link: "#",
    desc: "Real-time chat application using Socket.io.",
  },
  {
    title: "E-commerce Site",
    img: "project3.png",
    link: "#",
    desc: "Full-stack e-commerce platform with payments.",
  },
  {
    title: "Blog Platform",
    img: "project4.png",
    link: "#",
    desc: "Dynamic blog platform using React and Node.js.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-purple-50 to-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-purple-700">
          Projects
        </h2>

        {/* Flex container */}
        <div className="flex flex-wrap justify-center gap-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-2xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`./assets/images/${project.img}`}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold mb-2 text-purple-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                <a
                  href={project.link}
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
