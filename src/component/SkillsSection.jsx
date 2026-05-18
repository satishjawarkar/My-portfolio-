import React, { useState } from "react";

const ALL_SKILLS = [
  // Frontend
  {
    name: "React",
    icon: "⚛️",
    bg: "#dbeafe",
    ic: "#1d4ed8",
    lvl: "Expert",
    cat: "Frontend",
  },
  {
    name: "Angular",
    icon: "🅰️",
    bg: "#fee2e2",
    ic: "#b91c1c",
    lvl: "Expert",
    cat: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "🟨",
    bg: "#fef9c3",
    ic: "#854d0e",
    lvl: "Expert",
    cat: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    bg: "#dbeafe",
    ic: "#1e40af",
    lvl: "Advanced",
    cat: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "🌊",
    bg: "#cffafe",
    ic: "#0e7490",
    lvl: "Expert",
    cat: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: "🅱️",
    bg: "#ede9fe",
    ic: "#5b21b6",
    lvl: "Expert",
    cat: "Frontend",
  },
  {
    name: "MUI",
    icon: "🎨",
    bg: "#e0f2fe",
    ic: "#0369a1",
    lvl: "Advanced",
    cat: "Frontend",
  },
  {
    name: "HTML5",
    icon: "🌐",
    bg: "#ffedd5",
    ic: "#c2410c",
    lvl: "Expert",
    cat: "Frontend",
  },
  {
    name: "CSS3",
    icon: "💅",
    bg: "#ede9fe",
    ic: "#5b21b6",
    lvl: "Expert",
    cat: "Frontend",
  },
  // Backend
  {
    name: "Node.js",
    icon: "🟩",
    bg: "#dcfce7",
    ic: "#15803d",
    lvl: "Intermediate",
    cat: "Backend",
  },
  {
    name: "Express.js",
    icon: "🚂",
    bg: "#f1f5f9",
    ic: "#334155",
    lvl: "Intermediate",
    cat: "Backend",
  },
  {
    name: "Java",
    icon: "☕",
    bg: "#ffedd5",
    ic: "#c2410c",
    lvl: "Intermediate",
    cat: "Backend",
  },
  {
    name: "Spring Boot",
    icon: "☕",
    bg: "#ffedd5",
    ic: "#c2410c",
    lvl: "Intermediate",
    cat: "Backend",
  },
  {
    name: "REST API",
    icon: "🔗",
    bg: "#dcfce7",
    ic: "#166534",
    lvl: "Advanced",
    cat: "Backend",
  },
  // Database
  {
    name: "MongoDB",
    icon: "🍃",
    bg: "#dcfce7",
    ic: "#166534",
    lvl: "Intermediate",
    cat: "Database",
  },
  {
    name: "MySQL",
    icon: "🐬",
    bg: "#dbeafe",
    ic: "#1e40af",
    lvl: "Intermediate",
    cat: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "🐬",
    bg: "#dbeafe",
    ic: "#1e40af",
    lvl: "Intermediate",
    cat: "Database",
  },
  // Tools
  {
    name: "Git",
    icon: "🔴",
    bg: "#fee2e2",
    ic: "#b91c1c",
    lvl: "Advanced",
    cat: "Tools",
  },
  {
    name: "GitHub",
    icon: "🐙",
    bg: "#f1f5f9",
    ic: "#1e293b",
    lvl: "Advanced",
    cat: "Tools",
  },
  {
    name: "VS Code",
    icon: "💙",
    bg: "#dbeafe",
    ic: "#1d4ed8",
    lvl: "Expert",
    cat: "Tools",
  },
  {
    name: "Figma",
    icon: "🎯",
    bg: "#fce7f3",
    ic: "#be185d",
    lvl: "Intermediate",
    cat: "Tools",
  },
  {
    name: "Postman",
    icon: "📮",
    bg: "#ffedd5",
    ic: "#c2410c",
    lvl: "Advanced",
    cat: "Tools",
  },
];

const TABS = ["All", "Frontend", "Backend", "Database", "Tools"];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.cat === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-header">
          <span className="section-badge">What I Know</span>
          <h2 className="section-title">My Skills</h2>
          <p className="section-sub">
            Technologies and tools I work with regularly
          </p>
        </div>

        {/* Tabs */}
        <div className="skill-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`skill-tab-btn ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon-box" style={{ background: skill.bg }}>
                <span>{skill.icon}</span>
              </div>
              <span className="skill-label">{skill.name}</span>
              <span className="skill-lvl">{skill.lvl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
