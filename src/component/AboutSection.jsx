import React from "react";
import profileImg from "../assets/Photos.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* LEFT - Image */}
        <div className="about-img-side">
          <div className="about-img-frame">
            <div className="about-decor-circle"></div>
            {/* Replace with real image when available: */}
            <div className="about-img-main">
              <img src={profileImg} alt="Satish Jawarkar" />
            </div>

            {/* Floating experience card */}
            <div className="about-float-card">
              <div className="big-num">4.7+</div>
              <div className="big-lbl">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Text */}
        <div className="about-text-side">
          <div
            className="section-header"
            style={{ textAlign: "left", marginBottom: 24 }}
          >
            <span className="section-badge">About Me</span>
            <h2 className="section-title">Who I Am 👋</h2>
          </div>

          <p className="about-label">Software Developer & UI Enthusiast</p>

          <p className="about-desc">
            Hello! I'm <span className="hl">Satish Jawarkar</span>, a passionate{" "}
            <span className="hl">Software Developer</span> from India who loves
            building elegant, performant web applications that deliver real
            impact.
          </p>

          <p className="about-desc">
            I specialize in{" "}
            <span className="hl2">React, Angular, JavaScript, TypeScript</span>{" "}
            and modern UI libraries like{" "}
            <span className="hl">Tailwind CSS, Bootstrap & MUI</span>. My goal
            is to blend clean design with cutting-edge technologies — and I
            never stop learning!
          </p>

          {/* Quick Stats */}
          <div className="about-stats-row">
            <div className="mini-stat">
              <div className="mn">15+</div>
              <div className="ml">Projects Done</div>
            </div>
            <div className="mini-stat">
              <div className="mn">10+</div>
              <div className="ml">Happy Clients</div>
            </div>
            <div className="mini-stat">
              <div className="mn">4.7+</div>
              <div className="ml">Years Exp.</div>
            </div>
          </div>

          {/* Info List */}
          <div className="about-meta">
            <div className="meta-row">
              <div className="meta-icon">📍</div>
              <span>
                <strong>Location:</strong>&nbsp; New Delhi (India)
              </span>
            </div>
            <div className="meta-row">
              <div className="meta-icon">✉️</div>
              <span>
                <strong>Email:</strong>&nbsp; satish.jawarkar@example.com
              </span>
            </div>
            <div className="meta-row">
              <div className="meta-icon">💼</div>
              <span>
                <strong>Role:</strong>&nbsp; Software Developer
              </span>
            </div>
            <div className="meta-row">
              <div className="meta-icon">🎓</div>
              <span>
                <strong>Education:</strong>&nbsp; B.E. Computer Science &
                Engineering
              </span>
            </div>
            <div className="meta-row">
              <div className="meta-icon">🌐</div>
              <span>
                <strong>Languages:</strong>&nbsp; English, Hindi, Marathi
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="about-btns">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
