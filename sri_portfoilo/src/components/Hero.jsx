export default function Hero() {
  return (
    <section id="home" className="hero">


      {/* Background particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="particles glow">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Hero Content */}
      <div className="hero-inner">
        <div className="cursor-bubble"></div>

        <h1>
          Hi, I'm <span className="gradient-text">Srinadh</span>
        </h1>

        <h2>AI/ML Engineer & Full Stack Developer</h2>

        <p className="location">📍 Singarayakonda, Andhra Pradesh, India</p>

        <p className="hero-desc">
       Passionate about building intelligent solutions that connect artificial intelligence with seamless user experiences.
I focus on developing scalable, real-world applications using modern web technologies.
Driven to turn complex problems into practical, impactful software.
        </p>

        {/* Social links */}
        <div className="hero-socials">
          <a
            href="https://github.com/sudisrinadh"
            target="_blank"
            rel="noreferrer"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com/in/sudisrinadh"
            target="_blank"
            rel="noreferrer"
          >
            💼
          </a>
          <a href="mailto:sudisrinadh@gmail.com">✉️</a>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#about" className="hero-btn-outline">
            About Me
          </a>

          <a href="#projects" className="hero-btn-primary hover-soft">
            View My Work
          </a>

          <a href="#contact" className="hero-btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
