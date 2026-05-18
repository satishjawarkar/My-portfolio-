import React, { useState } from "react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing projects, skills, and achievements with modern animations and responsive design.",
    emoji: "🎨",
    bg: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    tags: ["React", "CSS3", "Framer Motion"],
    cat: "Frontend",
    live: "https://my-portfolio-mocha-nu-70.vercel.app/",
    github: "https://github.com/satishjawarkar",
    featured: true,
  },
  {
    title: "Intelli Connect",
    desc: "Remote monitoring platform for generators with real-time data, performance tracking and historical analytics.",
    emoji: "⚡",
    bg: "linear-gradient(135deg,#0ea5e9,#0284c7)",
    tags: ["Angular", "Node.js", "REST API"],
    cat: "Fullstack",
    live: "https://login.monitormygenerator.com",
    github: "#",
    featured: true,
  },
  {
    title: "Tracer",
    desc: "Advanced alcohol measurement system designed for precise detection and quantification ensuring safety and reliability.",
    emoji: "🔬",
    bg: "linear-gradient(135deg,#f59e0b,#d97706)",
    tags: ["React", "IoT", "Dashboard"],
    cat: "Frontend",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "PM Internship Portal",
    desc: "Government-backed internship initiative platform offering practical experience bridging academics and industry.",
    emoji: "🏛️",
    bg: "linear-gradient(135deg,#10b981,#059669)",
    tags: ["React", "MUI", "TypeScript"],
    cat: "Frontend",
    live: "https://pminternship.mca.gov.in/login/",
    github: "#",
    featured: false,
  },
  {
    title: "PM Gati Shakti",
    desc: "National infrastructure initiative to unify logistics and planning, boosting efficiency and economic growth in India.",
    emoji: "🗺️",
    bg: "linear-gradient(135deg,#ef4444,#dc2626)",
    tags: ["React", "Node.js", "MongoDB"],
    cat: "Fullstack",
    live: "https://pmgatishakti.gov.in/pmgatishakti/login",
    github: "#",
    featured: false,
  },
  {
    title: "E-Commerce Dashboard",
    desc: "Admin dashboard for e-commerce platform with sales analytics, inventory management and order tracking features.",
    emoji: "📊",
    bg: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    cat: "Frontend",
    live: "#",
    github: "#",
    featured: false,
  },
];

const FILTERS = ["All", "Frontend", "Fullstack"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="section-header">
          <span className="section-badge">My Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Some of the things I've built recently</p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="proj-card" key={i}>
              {/* Thumbnail */}
              <div className="proj-thumb">
                <div
                  className="proj-thumb-placeholder"
                  style={{ background: p.bg }}
                >
                  <span style={{ fontSize: 52 }}>{p.emoji}</span>
                </div>

                {/* Hover Overlay */}
                <div className="proj-overlay">
                  {p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-overlay-btn"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                  {p.github !== "#" && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-overlay-btn"
                    >
                      🐙 GitHub
                    </a>
                  )}
                </div>

                {p.featured && (
                  <span className="proj-featured">⭐ Featured</span>
                )}
              </div>

              {/* Body */}
              <div className="proj-body">
                <div className="proj-tags">
                  {p.tags.map((t, j) => (
                    <span className="proj-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>

                <div className="proj-links">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link proj-link-live"
                    style={
                      p.live === "#"
                        ? { opacity: 0.5, pointerEvents: "none" }
                        : {}
                    }
                  >
                    🌐 Live
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link proj-link-code"
                    style={
                      p.github === "#"
                        ? { opacity: 0.5, pointerEvents: "none" }
                        : {}
                    }
                  >
                    🐙 Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
