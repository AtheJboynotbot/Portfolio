import { useIsMobile } from "../hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer
      style={{
        textAlign: "center",
        padding: isMobile ? "1rem" : "2rem 1rem",
        borderTop: "1px solid #2a2a2a",
        backgroundColor: "transparent",
        fontFamily: "'Silkscreen', cursive",
      }}
    >
      <p style={{ color: "#aaaaaa", fontSize: "1.2rem", margin: 0, fontFamily: "'Silkscreen', cursive" }}>
        Made with{" "}
        <span style={{ color: "#f1f1f1" }}>
          React, Vite, TailwindCSS & Framer Motion
        </span>
      </p>
    </footer>
  );
}