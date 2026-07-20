import useReveal from "../hooks/useReveal";

export default function Projects() {
  const projectsRef = useReveal();

  return (
    <section
      id="projects"
      className="projects reveal"
      ref={projectsRef}
    >
      <h2 className="section-title">Projects</h2>
<div className="particles glow">
  <span></span><span></span><span></span><span></span><span></span>
</div>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
            <div className="project-card hover-soft">...</div>

          <img src="/images.png" alt="Detection of Suicidal ideaction from Anonymous student responses using NLP" />
          <div className="project-overlay">
            <h3>Detection of Suicidal ideaction from Anonymous student responses using NLP</h3>
          <p>Python, Flask, OpenCV, MediaPipe, Machine Learning, NLP</p>

            <a
              href="https://github.com/sudisrinadh/Detection-of-Suicidal-Ideation"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        {/* Project 1 */}
        <div className="project-card">
            <div className="project-card hover-soft">...</div>

          <img src="/project1.jpg" alt="Smart Voting System" />
          <div className="project-overlay">
            <h3>Smart Voting System</h3>
           <p>Python, Flask, OpenCV (Face Authentication), Machine Learning, SQLite</p>
            <a
              href="https://github.com/sudisrinadh/Smart_voting_system"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/project2.jpg" alt="Smart Parking System" />
          <div className="project-overlay">
            <h3>Smart Parking System</h3>
           <p>Python, OpenCV (Vehicle Detection), IoT Sensors, Machine Learning, Web Application</p>

            <a
              href="https://github.com/sudisrinadh/Smart_Parking_Slot_Booking_System"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/project3.jpg" alt="Speech Emotion Recognition" />
          <div className="project-overlay">
            <h3>Speech Emotion Recognition</h3>
            <p>Python, TensorFlow, LSTM</p>
            <a
              href="https://github.com/sudisrinadh/Speech_to_emotion_recognition_system"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
