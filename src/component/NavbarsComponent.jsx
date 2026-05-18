import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

const NavbarsComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // highlight active section
      const offsets = NAV_LINKS.map((id) => {
        const el = document.getElementById(id);
        return el
          ? { id, top: el.getBoundingClientRect().top }
          : { id, top: 9999 };
      });
      const current = offsets.filter((o) => o.top <= 120).at(-1);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`navbar-fixed ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            <div className="nav-logo-circle">SJ</div>
            <span className="nav-logo-name">Satish Jawarkar</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {NAV_LINKS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className={active === s ? "active" : ""}
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

          {/* Hire Me + Toggle */}
          <a
            href="#contact"
            className="nav-hire-btn"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            Hire Me 🚀
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
          {NAV_LINKS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(s);
              }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            className="hire-mobile"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            Hire Me 🚀
          </a>
        </div>
      </nav>
    </>
  );
};
export default NavbarsComponent;
