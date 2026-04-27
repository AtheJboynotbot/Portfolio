import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import StarsBackground from "./components/StarsBackground";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem("splashShown")
  );

  return (
    <BrowserRouter>
      <StarsBackground />
      <ScrollToTop />
      <div style={{ position: "relative", zIndex: 1 }}>
        <AnimatePresence>
          {showSplash && (
            <SplashScreen onDone={() => setShowSplash(false)} />
          )}
        </AnimatePresence>

        {!showSplash && (
          <>
            <Navbar />
            <AnimatedRoutes />
            <Footer />

          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
