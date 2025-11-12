import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const projects = [
  {
    title: "Portfolio Website",
    img: "fortpolio.png",
    link: "#",
    desc: "A personal portfolio showcasing projects, skills, and achievements to highlight expertise and attract professional opportunities.",
  },
  {
    title: "Intelli Connect",
    img: "SG.png",
    link: "https://login.monitormygenerator.com",
    desc: "A remote monitoring platform for generators, providing real-time data, performance tracking, and historical analytics securely online.",
  },
  {
    title: "Tracer",
    img: "Tracer.png",
    link: "#",
    desc: "An advanced alcohol measurement system designed for precise detection and quantification, ensuring safety and reliability.",
  },
  {
    title: "PM Internship",
    img: "PMIntership.png",
    link: "https://pminternship.mca.gov.in/login/",
    desc: "A government-backed internship initiative offering practical experience to bridge the gap between academics and industry.",
  },
  {
    title: "PM Gati Shakti",
    img: "GTShakti.png",
    link: "https://pmgatishakti.gov.in/pmgatishakti/login",
    desc: "A national infrastructure initiative to unify logistics and planning, boosting efficiency and economic growth in India.",
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-black">
          My Projects
        </h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="px-3"
            >
              <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={`./assets/images/${project.img}`}
                    alt={project.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-medium transition-colors"
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
