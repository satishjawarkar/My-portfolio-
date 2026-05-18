import React from "react";

const TESTIMONIALS = [
  {
    text: "Satish delivered an exceptional frontend for our generator monitoring platform. His Angular skills are top-notch and the UI he built is very intuitive and clean.",
    name: "Rahul Mehta",
    role: "Project Manager, Techvista Solutions",
    avatar: "RM",
    avatarBg: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    stars: "★★★★★",
  },
  {
    text: "Working with Satish was a great experience. He delivered our project on time with excellent attention to detail. The responsive design he created works perfectly on all devices.",
    name: "Priya Sharma",
    role: "CEO, Digital Startup",
    avatar: "PS",
    avatarBg: "linear-gradient(135deg,#ec4899,#be185d)",
    stars: "★★★★★",
  },
  {
    text: "Satish has an exceptional eye for design and deep understanding of React. He transformed our outdated website into a modern, fast and beautiful platform.",
    name: "Amit Kulkarni",
    role: "CTO, CodeBridge Infotech",
    avatar: "AK",
    avatarBg: "linear-gradient(135deg,#10b981,#059669)",
    stars: "★★★★★",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="section-header">
          <span className="section-badge">Kind Words</span>
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-sub">What people say about working with me</p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-quote-icon">"</div>
              <div className="testi-stars">{t.stars}</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{ background: t.avatarBg, color: "#fff" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
