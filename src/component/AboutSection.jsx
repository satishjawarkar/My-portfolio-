import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import profileImg from "../assets/Photos.jpg";
const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="about-img-container"
        >
          <img src={profileImg} alt="Satish Jawarkar" className="about-img" />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="about-text"
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-desc">
            Hello! I’m <span className="highlight-blue">Satish Jawarkar</span>,
            a passionate{" "}
            <span className="highlight-purple">Frontend Developer</span> who
            loves crafting elegant and performant web experiences using{" "}
            <span className="highlight-blue">
              Angular, AngularMatrial,React,JavaSecript, Tailwind CSS, Bootsrap
            </span>{" "}
            and <span className="highlight-purple">MUI</span>.
          </p>

          <p className="about-desc">
            I focus on creating smooth, responsive, and interactive interfaces
            that deliver real impact. My aim is to blend clean design with
            cutting-edge technologies — and I never stop learning!
          </p>

          <Button
            variant="contained"
            color="info"
            href="#projects"
            className="about-btn"
          >
            🚀 Check My Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
