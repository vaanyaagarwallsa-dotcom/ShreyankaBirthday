import { motion } from "framer-motion";
import SpiderWebBg from "./SpiderWebBg";
import { soundtrack } from "../utils/audio";

interface Props {
  onEnter: () => void;
}

const OpeningScreen = ({ onEnter }: Props) => {
  const handleClick = () => {
    soundtrack.playThwip();
    onEnter();
  };

  return (
    <section className="opening-screen" id="top">
      <SpiderWebBg />

      {/* Multiverse HUD Status bar */}
      <motion.div
        className="multiverse-hud-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="hud-status-indicator"></span>
        <span className="hud-text">MULTIVERSE BEACON // TIMELINE EARTH-616 // CANON EVENT DETECTED</span>
      </motion.div>

      {/* Spider-Man Mask Graphic Silhouette with Glowing Lenses */}
      <motion.div
        className="spidey-mask-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 200 240"
          className="spidey-mask-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Glow & Head Contour */}
          <defs>
            <radialGradient id="maskGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
            </radialGradient>
            <filter id="lensGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Mask Head Shape */}
          <path
            d="M 100,10 C 160,10 185,55 185,120 C 185,185 145,230 100,235 C 55,230 15,185 15,120 C 15,55 40,10 100,10 Z"
            fill="#120406"
            stroke="#991b1b"
            strokeWidth="2.5"
          />

          {/* Mask Web Pattern Lines */}
          <g stroke="#7f1d1d" strokeWidth="1" opacity="0.6">
            <line x1="100" y1="10" x2="100" y2="235" />
            <path d="M 100,110 Q 50,70 15,100" fill="none" />
            <path d="M 100,110 Q 150,70 185,100" fill="none" />
            <path d="M 100,110 Q 50,140 25,170" fill="none" />
            <path d="M 100,110 Q 150,140 175,170" fill="none" />
            <path d="M 100,110 Q 60,190 60,225" fill="none" />
            <path d="M 100,110 Q 140,190 140,225" fill="none" />
            <path d="M 100,110 Q 60,35 60,15" fill="none" />
            <path d="M 100,110 Q 140,35 140,15" fill="none" />
          </g>

          {/* Left Eye / Lens - Spider-Man signature pointed lens */}
          <path
            d="M 40,88 C 45,78 72,82 92,104 C 92,118 78,142 45,132 C 34,124 35,98 40,88 Z"
            fill="#050505"
            stroke="#e11d48"
            strokeWidth="3.5"
          />
          <path
            d="M 46,92 C 50,86 70,88 86,106 C 86,116 74,134 50,126 C 42,120 42,100 46,92 Z"
            fill="#f8fafc"
            filter="url(#lensGlow)"
          />

          {/* Right Eye / Lens */}
          <path
            d="M 160,88 C 155,78 128,82 108,104 C 108,118 122,142 155,132 C 166,124 165,98 160,88 Z"
            fill="#050505"
            stroke="#e11d48"
            strokeWidth="3.5"
          />
          <path
            d="M 154,92 C 150,86 130,88 114,106 C 114,116 126,134 150,126 C 158,120 158,100 154,92 Z"
            fill="#f8fafc"
            filter="url(#lensGlow)"
          />
        </svg>
      </motion.div>

      <motion.div
        className="opening-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="transmission-badge-wrap"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="transmission-pill">INCOMING TRANSMISSION</span>
        </motion.div>

        <motion.p
          className="transmission-alert"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          ATTENTION, NEW YORK.
        </motion.p>

        <motion.p
          className="transmission-text"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          An important event has been detected in your universe.
        </motion.p>

        <motion.p
          className="transmission-text secondary"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Someone extraordinary is celebrating another trip around the sun.
        </motion.p>

        <motion.div
          className="hero-reveal-block"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.9, ease: "easeOut" }}
        >
          <span className="comic-caption-label">CANON EVENT PROTOCOL</span>
          <h2 className="hero-subtitle">HAPPY BIRTHDAY</h2>
          <h1 className="hero-name" data-text="SHREYANKA">SHREYANKA</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.7 }}
        >
          <button
            className="enter-btn"
            onClick={handleClick}
            aria-label="Enter Your Universe"
          >
            <span className="btn-glow-layer"></span>
            <span className="btn-text">ENTER YOUR UNIVERSE</span>
            <span className="btn-arrow">→</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom hint */}
      <motion.div
        className="scroll-hint-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span className="scroll-hint-text">SCROLL DOWN TO UNLOCK ARCHIVES</span>
        <div className="scroll-chevron"></div>
      </motion.div>
    </section>
  );
};

export default OpeningScreen;
