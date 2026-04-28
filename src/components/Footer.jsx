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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.2rem",
          marginBottom: "0.75rem",
          fontFamily: "'Silkscreen', cursive",
          fontSize: "1rem",
        }}
      >
        <a
          href="mailto:ajajudaya@addu.edu.ph"
          style={{ color: "#aaaaaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffcc")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaaaaa")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          ajajudaya@addu.edu.ph
        </a>

        <span
          style={{ color: "#aaaaaa", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/>
          </svg>
          09263489197
        </span>

        <a
          href="https://github.com/AtheJboynotbot"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaaaaa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00ffcc")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaaaaa")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          github.com/AtheJboynotbot
        </a>
      </div>

      <p style={{ color: "#aaaaaa", fontSize: "1.2rem", margin: 0, fontFamily: "'Silkscreen', cursive" }}>
        Made with{" "}
        <span style={{ color: "#f1f1f1" }}>
          React, Vite, TailwindCSS & Framer Motion
        </span>
      </p>
    </footer>
  );
}