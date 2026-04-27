import { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("splashShown", "true");
      onDone();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ textAlign: "center" }}
      >
        <motion.h1
          variants={lineVariants}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 700,
            color: "#f1f1f1",
            margin: 0,
            fontFamily: "'Jersey 10', monospace",
          }}
        >
          Hello
        </motion.h1>
        <motion.h2
          variants={lineVariants}
          style={{
            fontSize: "clamp(1rem, 4vw, 2rem)",
            fontWeight: 700,
            color: "#aaaaaa",
            margin: "1rem 0 0",
            fontFamily: "'Jersey 10', monospace",
          }}
        >
          Welcome to my portfolio
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
