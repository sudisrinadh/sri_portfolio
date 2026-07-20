import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        {/* LEFT LOGO */}
        <a href="#home" className="logo">Srinadh</a>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* DESKTOP RESUME */}
        <a
          href="/sri_resume.pdf"
          className="resume-btn"
          target="_blank"
          rel="noreferrer"
        >
          ⬇ Resume
        </a>

        {/* MOBILE TOGGLE */}
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FaTimes />
        </button>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        <a href="/sri_resume.pdf" className="mobile-resume">
          ⬇ Download Resume
        </a>
      </div>
    </>
  );
}
