import useReveal from "../hooks/useReveal";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const ref = useReveal();
  

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    // 1️⃣ ADMIN EMAIL (to you)
    emailjs
      .sendForm(
        "service_8kkikg4",       // service ID
        "template_w7tt6kk",      // admin template
        form,
        "C7IGfgvZvreZ_AdW6"      // public key
      )
      .then(() => {
        console.log("Admin email sent");
      })
      .catch((error) => {
        console.error("Admin email error:", error);
      });

    // 2️⃣ AUTO REPLY (to user)
    emailjs
      .send(
        "service_8kkikg4",
        "template_egefqff",     // auto-reply template
        {
          to_name: form.name.value,
          reply_to: form.email.value,
        },
        "C7IGfgvZvreZ_AdW6"
      )
      .then(() => {
        console.log("Auto reply sent");
        form.reset();
        alert("✅ Message sent successfully!");
      })
      .catch((error) => {
        console.error("Auto reply error:", error);
      });
  };

  return (
    <section id="contact" className="contact reveal" ref={ref}>
      {/* HEADER */}
      <div className="contact-header">
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>
          Let's connect! I'm always excited to discuss new opportunities and
          interesting projects.
        </p>
      </div>

      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-left">
          <h3>Let's Start a Conversation</h3>
          <p className="contact-desc">
            I'm currently looking for new opportunities and would love to hear
            from you. Whether you have a question or want to discuss a project,
            I’ll get back to you soon.
          </p>

          <div className="contact-card">
            <span className="icon"><FaEnvelope /></span>
            <div>
              <h4>Email</h4>
              <p>sudisrinadh@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="icon"><FaPhoneAlt /></span>
            <div>
              <h4>Phone</h4>
              <p>+91 6303806676</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="icon"><FaMapMarkerAlt /></span>
            <div>
              <h4>Location</h4>
              <p>Singarayakonda, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="socials">
            <a
              href="https://github.com/sudisrinadh"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sudisrinadh"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <div>
              <label>Full Name</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" name="email" required />
            </div>
          </div>

          <label>Subject</label>
          <input type="text" name="subject" required />

          <label>Message</label>
          <textarea name="message" required />

          <button type="submit">✈️ Send Message</button>
        </form>
      </div>
    </section>
  );
}
