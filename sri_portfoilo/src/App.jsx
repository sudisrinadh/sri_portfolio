import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/main.css";

export default function App() {

  // 🎯 Cursor Bubble Effect
  useEffect(() => {
    const cursor = document.querySelector(".cursor-bubble");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Cursor Bubble */}
      <div className="cursor-bubble"></div>

      {/* Main Components */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
