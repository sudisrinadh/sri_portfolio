import useReveal from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="about reveal" ref={ref}>
      <div className="about-wrapper">
        {/* IMAGE */}
        <div className="about-image">
          <img src="/sri.jpg" alt="About Me" />
        </div>

        {/* TEXT */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Srinadh Sudi</strong>, I am a passionate AI/ML Engineer and Full-Stack Developer with hands-on experience in building intelligent, real-world applications. I enjoy solving meaningful problems by combining machine learning, backend development, and clean user interfaces.
          </p>

          <p>
            I have worked on impactful projects such as a Smart Voting System and Detection of Suicidal Ideation, where I applied AI, NLP, and secure system design to address real societal challenges. I am always eager to learn new technologies and transform ideas into scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
