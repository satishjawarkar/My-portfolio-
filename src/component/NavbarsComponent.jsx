import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import profileImg from "../assets/myLogo.png";
import { motion } from "framer-motion";
export const NavbarsComponent = () => {
  const [scroll, setScroll] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      style={{
        transition: "0.5s",
        background: scroll
          ? "rgba(30, 30, 30, 0.95)"
          : "linear-gradient(90deg, #4f46e5, #9333ea)",
        boxShadow: scroll ? "0 4px 15px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="about-img-container"
          >
            <img src={profileImg} alt="Satish Jawarkar" className="LogoImage" />
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{ borderColor: "#fff" }}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <Nav.Link
                  key={section}
                  href={`#${section}`}
                  style={{
                    margin: "0 10px",
                    color: "#fff",
                    fontWeight: "500",
                    transition: "0.3s",
                  }}
                  className="nav-link-hover"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Inline styles for hover effect */}
      <style jsx>{`
        .nav-link-hover:hover {
          color: #facc15 !important; /* yellow highlight on hover */
          transform: scale(1.05);
          transition: 0.3s;
        }
      `}</style>
    </Navbar>
  );
};
