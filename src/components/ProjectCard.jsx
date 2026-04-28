import PreviewSlideshow from "./PreviewSlideshow";
import { useIsMobile } from "../hooks/useIsMobile";

function GitHubIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// the container for the slideshow
function PlaceholderBox() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundColor: "#1a1a1a",
        borderRadius: "10px",
        border: "1px solid #2a2a2a",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 0 24px 6px rgba(93, 143, 219, 0.32)",
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#333" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#333" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// everything that's described in the projects will be drawn here including the slideshow
export default function ProjectCard({
  title,
  description,
  techStack = [],
  githubUrl,
  media = [],
  reverse = false,
}) {
  const isMobile = useIsMobile();
  const previewBlock = (
    <div style={{ flex: "0 0 auto", width: "100%", maxWidth: isMobile ? "100%" : "700px", marginLeft: isMobile ? "0" : (reverse ? "auto" : "0"), marginRight: isMobile ? "0" : (reverse ? "0" : "auto") }}>
      {media.length === 0 ? (
        <PlaceholderBox />
      ) : media.length === 1 ? (
        media[0].type === "video" ? (
          <video
            src={media[0].src}
            autoPlay muted loop playsInline
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "contain", borderRadius: "10px", border: "1px solid #2a2a2a", display: "block", boxShadow: "0 0 18px 6px rgba(0, 255, 204, 0.25)" }}
          />
        ) : (
          <img
            src={media[0].src}
            alt={title}
            onError={(e) => { e.currentTarget.replaceWith(document.createElement("div")); }}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: "10px", border: "1px solid #2a2a2a", display: "block", boxShadow: "0 0 18px 6px rgba(0, 255, 204, 0.25)" }}
          />
        )
      ) : (
        <PreviewSlideshow media={media} />
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.2rem",
          marginTop: "0.75rem",
          justifyContent: isMobile ? "flex-start" : (reverse ? "flex-end" : "flex-start"),
        }}
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            style={{
              border: "1px solid #333",
              borderRadius: "9999px",
              fontSize: isMobile ? "1rem" : "1.5rem",
              padding: "0.2rem 0.6rem",
              color: "#aaaaaa",
              fontFamily: "'Silkscreen', cursive",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const infoBlock = (
    <div
      style={{
        flex: "1 1 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: isMobile ? "flex-start" : (reverse ? "flex-end" : "flex-start"),
        gap: "0rem",
        textAlign: isMobile ? "left" : (reverse ? "right" : "left"),
      }}
    >
    {/* Title project */}
      <h3
        style={{
          fontSize: isMobile ? "1.5rem" : "3rem",
          fontFamily: "'Pixelify Sans', cursive",
          fontWeight: 700,
          color: "#f1f1f1",
          textTransform: "uppercase",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {title}
      </h3>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
        }}
      >
    {/* Description project */}
        {description.map((item, idx) => (
          <li
            key={idx}
            style={{
              color: "#aaaaaa",
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? "0.95rem" : "1.4rem",
              lineHeight: isMobile ? 1.8 : 2.0,
              paddingLeft: isMobile ? "1rem" : (reverse ? 0 : "1rem"),
              paddingRight: isMobile ? 0 : (reverse ? "1rem" : 0),
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: isMobile ? 0 : (reverse ? "auto" : 0),
                right: isMobile ? "auto" : (reverse ? 0 : "auto"),
                color: "#00ffcc",
              }}
            >
              ▸
            </span>
            {item}
          </li>
        ))}
      </ul>
      {/* GitHub link */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          color: "#aaaaaa",
          fontSize: isMobile ? "1rem" : "1.54rem",
          fontFamily: "'Silkscreen', cursive",
          textDecoration: "none",
          border: "1px solid #2a2a2a",
          borderRadius: "9999px",
          padding: "0.35rem 0.9rem",
          width: "fit-content",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#00ffcc";
          e.currentTarget.style.color = "#00ffcc";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#2a2a2a";
          e.currentTarget.style.color = "#aaaaaa";
        }}
      >
        <GitHubIcon size={13} />
        View on GitHub
      </a>
    </div>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        alignItems: "start",
      }}
      className="project-row"
    >
      {!isMobile && reverse ? (
        <>
          {infoBlock}
          {previewBlock}
        </>
      ) : (
        <>
          {previewBlock}
          {infoBlock}
        </>
      )}
    </div>
  );
}
