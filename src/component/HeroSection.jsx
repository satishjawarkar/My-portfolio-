import React from "react";
import profileImg from "../assets/Photos.png"; // Uncomment when image is available

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Effects */}
      <div className="hero-bg-glow" />
      <div className="hero-grid" />

      <div className="hero-content">
        {/* LEFT TEXT */}
        <div className="hero-left">
          {/* Greeting Badge */}
          <div className="hero-greeting">
            <span className="dot" />
            Available for work
          </div>

          {/* Name */}
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Satish Jawarkar</span>
          </h1>

          {/* Role */}
          <div className="hero-role-row">
            <div className="role-line" />
            <span className="hero-role">Software Developer</span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            I craft modern, responsive and interactive web experiences using{" "}
            <strong style={{ color: "#818cf8" }}>React, Angular</strong>,{" "}
            <strong style={{ color: "#06b6d4" }}>Tailwind CSS & MUI</strong> —
            blending clean design with cutting-edge technology.
          </p>

          {/* Buttons */}
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              🚀 View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1gKHUzR3i4ZVXhqWUs0PhT8eTnjF0mC5i/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              📄 Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-num">4.7+</div>
              <div className="stat-lbl">Years Exp.</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">15+</div>
              <div className="stat-lbl">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">10+</div>
              <div className="stat-lbl">Technologies</div>
            </div>
          </div>
        </div>

        {/* RIGHT AVATAR */}
        <div className="hero-right">
          <div className="avatar-outer">
            <div className="avatar-ring1" />
            <div className="avatar-ring2" />

            {/* Replace avatar-placeholder with <img> when you have the photo:
                <img src={profileImg} alt="Satish Jawarkar" className="avatar-circle" /> */}
            <div className="avatar-placeholder">
              {/* SJ{" "} */}
              <img
                src={profileImg}
                alt="Satish Jawarkar"
                className="avatar-circle"
              />
            </div>

            {/* Floating Badges */}
            <div className="hero-badge badge-top">
              <span className="badge-emoji">💻</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
                  React & Angular
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>
                  Frontend Dev
                </div>
              </div>
            </div>

            <div className="hero-badge badge-bottom">
              <span className="badge-emoji">⭐</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>
                  5.0 Rating
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>
                  Client Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
};

export default HeroSection;
