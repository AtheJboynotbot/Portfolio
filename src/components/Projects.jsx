import { motion } from "framer-motion";
import FadeUpWrapper from "./FadeUpWrapper";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "KAPITAN SISIG DIGITAL MANAGER",
    githubUrl: "https://github.com/ChimpanzEatingGrades/DigitalMenuManagementSystem",
    techStack: ["React", "Vite", "TailwindCSS", "Django", "Django REST Framework", "PostgreSQL"],
    media: [
      { type: "video", src: "/media/kapitan-sisig/demo.mp4" },
      { type: "image", src: "/media/kapitan-sisig/preview-1.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-2.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-3.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-4.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-5.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-6.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-7.png" },
      { type: "image", src: "/media/kapitan-sisig/preview-8.png" },
    ],
    description: [
      "Developed a full-stack web application for managing a multi-branch restaurant's menu, inventory, and orders.",
      "Implemented a QR-based digital menu system enabling contactless ordering and improving customer accessibility.",
      "Developed a role-based dashboard to streamline staff workflows and centralize restaurant operations.",
      "Designed a real-time stock tracking system with ingredient-aware menu availability.",
      "Automated sales reporting to provide actionable business insights.",
    ],
  },
  {
    title: "FACULTY CONSULTATION PORTAL",
    githubUrl: "https://github.com/AtheJboynotbot/juciflut2",
    techStack: ["Flutter", "Dart", "Firebase"],
    media: [
      { type: "video", src: "/media/faculty-consultation/demo.mp4" },
      { type: "image", src: "/media/faculty-consultation/preview-1.png" },
      { type: "image", src: "/media/faculty-consultation/preview-2.png" },
      { type: "image", src: "/media/faculty-consultation/preview-3.png" },
      { type: "image", src: "/media/faculty-consultation/preview-4.png" },
      { type: "image", src: "/media/faculty-consultation/preview-5.png" },
    ],
    description: [
      "Built a web-based scheduling system for faculty-student consultations.",
      "Developed 5 core modules including Dashboard, Schedule Management, Bookings, Profile Management, and Authentication.",
      "Implemented real-time booking approval and conflict detection for concurrent scheduling scenarios.",
      "Integrated Google Sign-In authentication and an interactive calendar system.",
    ],
  },
  {
    title: "TESDA WEBSITE REDESIGN",
    githubUrl: "https://github.com/AtheJboynotbot/TESDAproject",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    media: [
      { type: "video", src: "/media/tesda-redesign/demo.mp4" },
      { type: "image", src: "/media/tesda-redesign/preview-1.png" },
      { type: "image", src: "/media/tesda-redesign/preview-2.png" },
      { type: "image", src: "/media/tesda-redesign/preview-3.png" },
      { type: "image", src: "/media/tesda-redesign/preview-4.png" },
      { type: "image", src: "/media/tesda-redesign/preview-5.png" },
    ],
    description: [
      "Designed and developed a responsive multi-page website redesign.",
      "Created 5 functional pages including Homepage, Services, Gallery, Scheduling, and Contact.",
      "Implemented an interactive appointment scheduling system with dynamic calendar and region-based forms.",
    ],
  },
  {
    title: "PSEUDO 3D RAYCASTING ENGINE",
    githubUrl: "https://github.com/AtheJboynotbot/Raycasting-Project",
    techStack: ["Python", "Pygame"],
    media: [
      { type: "video", src: "/media/raycasting-engine/demo.mp4" },
      { type: "image", src: "/media/raycasting-engine/preview-1.png" },
      { type: "image", src: "/media/raycasting-engine/preview-2.png" },
      { type: "image", src: "/media/raycasting-engine/preview-3.png" },
    ],
    description: [
      "Built a pseudo-3D first-person rendering engine using raycasting techniques.",
      "Implemented wall, floor, and ceiling texture mapping with distance-based shading.",
      "Developed real-time player movement, rotation, and collision detection using a grid-based system.",
      "Designed UI features including a start menu, pause system, and toggleable 2D map view.",
    ],
  },
];

export default function Projects() {
  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
        padding: "4rem 5rem",
        maxWidth: "100%",
        margin: "0 auto",
        fontFamily: "'Jersey 10', monospace",
      }}
    >
      <FadeUpWrapper delay={0}>
        <h1
          style={{
            fontSize: "clamp(5rem, 4vw, 2rem)",
            fontWeight: 700,
            color: "#f1f1f1",
            textAlign: "center",
            marginBottom: "3rem",
            letterSpacing: "0.05em",
          }}
        >
          Projects
        </h1>
      </FadeUpWrapper>

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {projects.map((project, index) => (
          <FadeUpWrapper key={project.title} delay={index * 0.1}>
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              media={project.media}
              reverse={index % 2 !== 0}
            />
          </FadeUpWrapper>
        ))}
      </div>
    </motion.div>
  );
}
