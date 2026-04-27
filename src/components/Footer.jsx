export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        borderTop: "1px solid #2a2a2a",
        backgroundColor: "transparent",
        fontFamily: "'Jersey 10', monospace",
      }}
    >
      <p style={{ color: "#aaaaaa", fontSize: "1.2rem", margin: 0 }}>
        Made with{" "}
        <span style={{ color: "#f1f1f1" }}>
          React, Vite, TailwindCSS & Framer Motion
        </span>
      </p>
    </footer>
  );
}