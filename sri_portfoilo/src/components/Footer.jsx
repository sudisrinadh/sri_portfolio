import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
        
      {/* TOP FOOTER CONTENT */}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-col">
          <h3 className="footer-logo">Srinadh</h3>
          
          <p>
            AI/ML Engineer & Full Stack Developer passionate about building
            intelligent, real-world solutions that connect technology with
            meaningful user experiences.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <p>📧 sudisrinadh@gmail.com</p>
          <p>📞 +91 6303806676</p>
          <p>📍 Singarayakonda, Andhra Pradesh, India</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© 2025 Made with ❤️ by Srinadh</span>

        <div className="footer-socials">
          <a
            href="https://github.com/sudisrinadh"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sudisrinadh"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://wa.me/916303806676"
            target="_blank"
            rel="noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
