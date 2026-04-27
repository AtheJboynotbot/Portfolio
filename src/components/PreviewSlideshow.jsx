import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

function PlaceholderBox() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1a1a1a", position: "relative" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#333" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#333" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function PreviewSlideshow({ media = [] }) {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [errors, setErrors] = useState({});

  const delay = media[current]?.type === "video" ? 10000 : 4000;

  const next = useCallback(() => setCurrent((i) => (i + 1) % media.length), [media.length]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + media.length) % media.length), [media.length]);

  useEffect(() => {
    if (media.length <= 1) return;
    const id = setInterval(next, delay);
    return () => clearInterval(id);
  }, [current, delay, next, media.length]);

  const handleError = (idx) => setErrors((e) => ({ ...e, [idx]: true }));

  if (media.length === 0) return (
    <div style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: "10px", border: "1px solid #2a2a2a", overflow: "hidden", boxShadow: "0 0 18px 6px rgba(0, 255, 204, 0.25)" }}>
      <PlaceholderBox />
    </div>
  );

  const item = media[current];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: "10px",
        border: "1px solid #2a2a2a",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        boxShadow: "0 0 20px 6px rgba(215, 223, 250, 0.42)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute", inset: 0 }}
        >
          {errors[current] ? (
            <PlaceholderBox />
          ) : item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              onError={() => handleError(current)}
              style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", inset: 0 }}
            />
          ) : (
            <img
              src={item.src}
              alt={`Preview ${current + 1}`}
              onError={() => handleError(current)}
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", top: "50%", left: "8px",
              transform: "translateY(-50%)", zIndex: 10,
              background: "rgba(0,0,0,0.5)", color: "white", border: "none",
              borderRadius: "50%", width: "32px", height: "32px",
              cursor: "pointer", fontSize: "1.2rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: isMobile || isHovered ? 1 : 0, transition: "opacity 0.2s ease",
              fontFamily: "'Jersey 10', monospace",
            }}
          >‹</button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", top: "50%", right: "8px",
              transform: "translateY(-50%)", zIndex: 10,
              background: "rgba(0,0,0,0.5)", color: "white", border: "none",
              borderRadius: "50%", width: "32px", height: "32px",
              cursor: "pointer", fontSize: "1.2rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: isMobile || isHovered ? 1 : 0, transition: "opacity 0.2s ease",
              fontFamily: "'Jersey 10', monospace",
            }}
          >›</button>
        </>
      )}

      {/* Dots */}
      {media.length > 1 && (
        <div style={{
          position: "absolute", bottom: "10px", left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
          display: "flex", gap: "6px",
        }}>
          {media.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              style={{
                width: "8px", height: "8px", borderRadius: "50%", border: "none",
                cursor: "pointer", transition: "all 0.2s ease", padding: 0,
                background: i === current ? "#f1f1f1" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
