import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const tabs = [
    { label: "About Me", path: "/" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#111111",
        borderBottom: "1px solid #2a2a2a",
        padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          color: "#aaaaaa",
          fontSize: isMobile ? "1rem" : "1.5rem",
          fontFamily: "'Silkscreen', cursive",
        }}
      >
        Get to know Me
      </span>

      <div style={{ display: "flex", gap: isMobile ? "0.3rem" : "0.5rem" }}>
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              style={{
                padding: isMobile ? "0.25rem 0.6rem" : "0.35rem 1rem",
                borderRadius: "9999px",
                border: isActive ? "none" : "1px solid #2a2a2a",
                backgroundColor: isActive ? "#f1f1f1" : "transparent",
                color: isActive ? "#0d0d0d" : "#aaaaaa",
                fontFamily: "'Silkscreen', cursive",
                fontSize: isMobile ? "1rem" : "1.5rem",
                cursor: "pointer",
                fontWeight: isActive ? 700 : 400,
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
