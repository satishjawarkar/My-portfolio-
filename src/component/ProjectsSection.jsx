import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

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
  {
    title: "Another Project",
    img: "project6.png",
    link: "#",
    desc: "Another awesome project demo.",
  },
];

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-purple-50 to-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-purple-700">
          Projects
        </h2>

        <Slider {...settings} className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="px-3"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-purple-500 hover:shadow-2xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={`./assets/images/${project.img}`}
                    alt={project.title}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-purple-700">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl font-semibold transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsSection;
