import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="footer-logo"
        >
          <h2>Satish Jawarkar</h2>
          <p>Software Developer </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="footer-socials"
        >
          <a
            href="https://github.com/satishjawarkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/satish-jawarkar-097a68141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="footer-copy"
        >
          &copy; {new Date().getFullYear()} Satish Jawarkar. All rights
          reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
