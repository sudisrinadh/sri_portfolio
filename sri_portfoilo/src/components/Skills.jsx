import useReveal from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="skills reveal" ref={ref}>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        <div className="particles glow">
            <div className="skill-card hover-soft">...</div>

  <span></span><span></span><span></span><span></span><span></span>
</div>


        {/* Programming Languages */}
        <SkillBox title="💻 Programming Languages">
          <Skill name="Python" percent={85} />
          <Skill name="Java" percent={80} />
          <Skill name="SQL" percent={85} />
        </SkillBox>

        {/* Web Development */}
        <SkillBox title="🌐 Web Development">
          <Skill name="HTML & CSS" percent={80} />
          <Skill name="Flask" percent={80} />
        </SkillBox>

        {/* AI / ML */}
        <SkillBox title="🤖 AI / Machine Learning">
          <Skill name="TensorFlow" percent={85} />
          <Skill name="PyTorch" percent={80} />
          <Skill name="NLP" percent={90} />
          <Skill name="Hugging Face" percent={75} />
          <Skill name="OpenCV" percent={90} />
        </SkillBox>

        {/* Databases & Tools */}
        <SkillBox title="🗄️ Databases & Tools">
          <Skill name="MySQL" percent={85} />
          <Skill name="MongoDB & Atlas" percent={70} />
          <Skill name="Git & GitHub" percent={90} />
        </SkillBox>

      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SkillBox({ title, children }) {
  return (
    <div className="skill-box">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Skill({ name, percent }) {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ "--percent": `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}


