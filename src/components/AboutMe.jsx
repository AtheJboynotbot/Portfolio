import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUpWrapper from "./FadeUpWrapper";
import { useIsMobile } from "../hooks/useIsMobile";

const techSkills = [
  { category: "Frontend", items: "React, TailwindCSS, HTML, CSS, JavaScript" },
  { category: "Backend", items: "Django, Django REST" },
  { category: "Framework Mobile/Web", items: "Flutter" },
  { category: "Databases", items: "Firebase, PostgreSQL" },
  { category: "Tools", items: "Git, GitHub, Vite, Pygame" },
];

const softSkills = [
  "Problem-solving",
  "Adaptability",
  "Team Collaboration",
  "Communication",
];

const fontDisplay = "'Pixelify Sans', cursive";
const fontBody = "'VT323', monospace";
const fontMono = "'Silkscreen', cursive";

export default function AboutMe() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
        padding: isMobile ? "2rem 1rem 3rem" : "3.5rem 2rem 6rem",
        maxWidth: isMobile ? "100%" : "1500px",
        margin: "0 auto",
        fontFamily: fontBody,
      }}
    >
      {/* Hello! + Welcome — LEFT aligned */}
      <FadeUpWrapper delay={0}>
        <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: isMobile ? "2.5rem" : "6rem",
              fontFamily: fontDisplay,
              fontWeight: 700,
              color: "#f1f1f1",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Hello!
          </h1>
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "3rem",
              fontFamily: fontDisplay,
              fontWeight: 700,
              color: "#f1f1f1",
              margin: "0.2rem 0 0",
              lineHeight: 1.6,
            }}
          >
            Welcome to my<br />portfolio!
          </h2>
        </div>
      </FadeUpWrapper>

      {/* My Name is — RIGHT aligned */}
      <FadeUpWrapper delay={0.15}>
        <div style={{ textAlign: "right", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.4rem" : "3.6rem",
              fontFamily: fontDisplay,
              fontWeight: 700,
              color: "#f1f1f1",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            My Name is<br />Albert John A. Judaya
          </h2>
        </div>
      </FadeUpWrapper>

      {/* University — CENTER */}
      <FadeUpWrapper delay={0.2}>
        <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
        <p
          style={{
            textAlign: "left",
            color: "#f1f1f1",
            fontFamily: fontBody,
            fontSize: isMobile ? "1.2rem" : "4rem",
            lineHeight: 2.0,
            margin: "0 0 1.5rem",
            fontWeight: 400,
          }}
        >
          I am currently taking<br />Computer Science in Ateneo<br />de Davao University
        </p>
        </div>
      </FadeUpWrapper>

      {/* Year — RIGHT aligned */}
      <FadeUpWrapper delay={0.25}>
        <p
          style={{
            textAlign: "right",
            color: "#f1f1f1",
            fontFamily: fontBody,
            fontSize: isMobile ? "1.1rem" : "2.8rem",
            lineHeight: 2.0,
            margin: "0 0 3rem",
            fontWeight: 400,
          }}
        >
          I am currently a 3rd Year student and<br />is expected to graduate in 2027
        </p>
      </FadeUpWrapper>

      {/* Skills — LEFT aligned */}
      <FadeUpWrapper delay={0.3}>
        <div style={{ textAlign: "left", marginBottom: "3rem" }}>
          <p
            style={{
              color: "#f1f1f1",
              fontFamily: fontDisplay,
              fontWeight: 700,
              fontSize: isMobile ? "1.1rem" : "2.6rem",
              margin: "0 0 0.6rem",
            }}
          >
            Here are my current skillset:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.1rem",
              fontFamily: fontBody,
            }}
          >
            {techSkills.map((skill) => (
              <li
                key={skill.category}
                style={{
                  color: "#f1f1f1",
                  fontSize: isMobile ? "0.9rem" : "1.7rem",
                  marginBottom: "0.25rem",
                  lineHeight: 2.0,
                }}
              >
                <span style={{ fontWeight: 700 }}>{skill.category}:</span>{" "}
                {skill.items}
              </li>
            ))}
          </ul>
        </div>
      </FadeUpWrapper>

      {/* Soft skills — RIGHT aligned */}
      <FadeUpWrapper delay={0.35}>
        <div style={{ textAlign: "right", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "#f1f1f1",
              fontFamily: fontDisplay,
              fontWeight: 700,
              fontSize: isMobile ? "1.1rem" : "2.6rem",
              margin: "0 0 0.5rem",
            }}
          >
            I&apos;m also good at
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {softSkills.map((skill) => (
              <li
                key={skill}
                style={{
                  color: "#f1f1f1",
                  fontSize: isMobile ? "0.9rem" : "1.7rem",
                  marginBottom: "0.2rem",
                  lineHeight: 2.0,
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </FadeUpWrapper>

      {/* Projects link — LEFT aligned */}
      <FadeUpWrapper delay={0.4}>
        <p
          style={{
            textAlign: "left",
            color: "#f1f1f1",
            fontSize: isMobile ? "1.2rem" : "3.6rem",
            fontFamily: fontDisplay,
            lineHeight: 1.6,
            fontWeight: 700,
          }}
        >
          You can also check<br />out some projects I<br />made{" "}
          <button
            onClick={() => navigate("/projects")}
            onMouseEnter={(e) => {
              e.target.style.backgroundSize = "100% 8px";
              e.target.style.color = "#4e00cc";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundSize = "0% 8px";
              e.target.style.color = "#ffffff";
            }}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              fontFamily: fontDisplay,
              fontSize: "inherit",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
              backgroundImage: "linear-gradient(#4e00cc, #4e00cc)",
              backgroundSize: "0% 2px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom left",
              transition: "background-size 0.3s ease, color 0.3s ease",
            }}
          >
            here
          </button>
        </p>
      </FadeUpWrapper>
    </motion.div>
  );
}
