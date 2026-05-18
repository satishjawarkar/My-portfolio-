import React from "react";

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Satish Jawarkar</h3>
          <p>
            A passionate Software Developer building modern, responsive and
            interactive web experiences with React, Angular & Tailwind CSS.
          </p>
          <div className="footer-social-row">
            <a
              href="https://github.com/satishjawarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc"
              title="GitHub"
            >
              🐙
            </a>
            <a
              href="https://www.linkedin.com/in/satish-jawarkar-097a68141"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc"
              title="LinkedIn"
            >
              💼
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc"
              title="Twitter"
            >
              🐦
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc"
              title="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "contact",
            ].map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(s);
                  }}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#contact">Frontend Development</a>
            </li>
            <li>
              <a href="#contact">UI/UX Design</a>
            </li>
            <li>
              <a href="#contact">React Development</a>
            </li>
            <li>
              <a href="#contact">Angular Development</a>
            </li>
            <li>
              <a href="#contact">Website Revamp</a>
            </li>
            <li>
              <a href="#contact">Performance Audit</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:satish@example.com">
                ✉️ satishjawarkar1792@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 +91 7828467959
              </a>
            </li>
            <li>
              <a href="#">📍New Delhi (India)</a>
            </li>
            <li>
              <a href="#">⏰ Mon – Sat, 9AM–7PM</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} <span>Satish Jawarkar</span>. All rights
          reserved.
        </div>
        <div className="footer-made">
          Made with <span className="heart">❤️</span> in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
