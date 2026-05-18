import React from "react";

const EXPERIENCE = [
  {
    role: "Software Developer",
    company:
      "BISAG-N (Bhaskaracharya National Institute for Space Applications and Geo-informatics)",
    period: "Nov 2024 – Present",
    current: true,
    icon: "💻",
    iconBg: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    desc: "Building and maintaining large-scale Angular and React applications. Collaborated with UI/UX team to deliver pixel-perfect interfaces. Optimized app performance by 40% through lazy loading and code splitting.",
    tags: [
      "Angular",
      "React",
      "TypeScript",
      "MUI",
      "Java",
      "Spring Boot",
      "REST API",
      "PostgresSQL",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Vista It Solutions Pvt. Ltd. Indore",
    period: "Nov 2022 – Nov 2024",
    current: false,
    icon: "🚀",
    iconBg: "linear-gradient(135deg,#0ea5e9,#0284c7)",
    desc: "Developed responsive web UIs using React and Bootstrap. Integrated REST APIs and worked closely with backend team. Implemented WhatsApp and email-based contact systems for client projects.",
    tags: ["Angular", "React", "Bootstrap", "JavaScript", "Git"],
  },
  //   {
  //     role: "Web Development Intern",
  //     company: "PM Internship Program (MCA Gov.)",
  //     period: "Jan 2022 – May 2022",
  //     current: false,
  //     icon: "🏛️",
  //     iconBg: "linear-gradient(135deg,#10b981,#059669)",
  //     desc: "Worked on government digital portal pminternship.mca.gov.in. Contributed to front-end development using HTML, CSS, JavaScript and Angular. Delivered features under tight deadlines with government compliance standards.",
  //     tags: ["Angular", "HTML5", "CSS3", "JavaScript"],
  //   },
  {
    role: "Web Development Intern",
    company: "Infoxeron Technologies Pvt. Ltd. Indore",
    period: "2021 – 2022",
    current: false,
    icon: "🎯",
    iconBg: "linear-gradient(135deg,#f59e0b,#d97706)",
    desc: "Designed and developed multiple client websites including portfolios, business landing pages and e-commerce stores. Delivered 10+ projects with high client satisfaction.",
    tags: ["React", "Angular", "Tailwind CSS", "Firebase", "Figma"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <div className="section-header">
          <span className="section-badge">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">
            My professional journey and the roles I've held
          </p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div className="tl-item" key={i}>
              {/* Timeline dot */}
              <div className={`tl-dot ${exp.current ? "active" : ""}`} />

              {/* Card */}
              <div className="tl-card">
                <div className="tl-head">
                  <div className="tl-company-info">
                    <div
                      className="company-icon"
                      style={{ background: exp.iconBg }}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <div className="tl-role">{exp.role}</div>
                      <div className="tl-company-name">{exp.company}</div>
                    </div>
                  </div>

                  <div className="tl-right">
                    {exp.current && (
                      <span className="tl-current-badge">● Current</span>
                    )}
                    <span className="tl-period">📅 {exp.period}</span>
                  </div>
                </div>

                <p className="tl-desc">{exp.desc}</p>

                <div className="tl-tags">
                  {exp.tags.map((t, j) => (
                    <span className="tl-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
