import { useState } from "react";
import { motion } from "framer-motion";
import { birthdayLetter } from "../data/memories";
import { soundtrack } from "../utils/audio";

interface WebParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  type: "web" | "heart" | "spark";
}

const BirthdayLetter = () => {
  const [particles, setParticles] = useState<WebParticle[]>([]);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const triggerWebConfetti = () => {
    soundtrack.playThwip();
    setHasCelebrated(true);

    const colors = ["#dc2626", "#e11d48", "#f43f5e", "#ffffff", "#ffd700"];
    const newParticles: WebParticle[] = [];

    for (let i = 0; i < 40; i++) {
      const angle = (Math.random() * 360 * Math.PI) / 180;
      const speed = Math.random() * 6 + 3;
      newParticles.push({
        id: Date.now() + i,
        x: 50,
        y: 50,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 12 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        type: i % 3 === 0 ? "web" : i % 3 === 1 ? "heart" : "spark",
      });
    }

    setParticles(newParticles);
    setTimeout(() => {
      setParticles([]);
    }, 2500);
  };

  const handleBackToTop = () => {
    soundtrack.playThwip();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="letter-section" id="letter">
      {/* Background Radial Glow & Distressed Halftone */}
      <div className="letter-glow-backdrop" />
      <div className="letter-web-corner-decor" />

      <motion.div
        className="letter-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {/* Section Heading */}
        <motion.div
          className="letter-header-block"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="comic-issue-stamp">FINAL ISSUE // SPECIAL EPILOGUE</span>
          <h2 className="letter-heading">AND THAT'S ANOTHER CHAPTER...</h2>
          <div className="letter-title-line" />
        </motion.div>

        {/* The Handwritten / Classified Folder Letter Card */}
        <motion.div
          className="letter-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Top Folder Header */}
          <div className="letter-folder-header">
            <div className="folder-label-group">
              <span className="folder-tab-badge">CLASSIFIED DOSSIER</span>
              <span className="folder-case-number">FILE #0616-SHREYANKA</span>
            </div>
            <div className="folder-spider-seal">
              <svg viewBox="0 0 32 32" fill="none" stroke="#dc2626" strokeWidth="2" width="22" height="22">
                <circle cx="16" cy="16" r="14" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="16" cy="14" r="3" fill="#dc2626" />
                <ellipse cx="16" cy="20" rx="4" ry="5" fill="#dc2626" />
                <path d="M12 12l-4-3m12 3l4-3m-13 4l-5 0m14 0l5 0m-13 5l-4 4m12-4l4 4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Letter Body */}
          <div className="letter-body-content">
            <p className="letter-text">{birthdayLetter}</p>
          </div>

          {/* Spider-Man Web Footer Graphic */}
          <div className="letter-spider-accent" aria-hidden="true">
            <svg viewBox="0 0 200 40" fill="none" stroke="#dc2626" strokeWidth="0.8" opacity="0.4">
              <path d="M 0,20 Q 50,38 100,20 T 200,20" />
              <circle cx="100" cy="20" r="3" fill="#dc2626" />
              <line x1="100" y1="0" x2="100" y2="20" stroke="#dc2626" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>

        {/* Emotional Closing Statement */}
        <motion.div
          className="letter-closing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="closing-quote">
            "Some people make every universe a little brighter. You're one of them."
          </p>
          <p className="final-wish">
            Happy Birthday, Shreyanka. ❤️
          </p>
        </motion.div>

        {/* Interactive Web Celebration Button */}
        <motion.div
          className="celebration-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="celebrate-btn"
            onClick={triggerWebConfetti}
            aria-label="Send Spider-Man celebration effect"
          >
            <span className="celebrate-icon">🕷️</span>
            <span>{hasCelebrated ? "TRIGGER WEB BLAST AGAIN 💥" : "TRIGGER WEB BLAST 🕸️"}</span>
          </button>

          {/* Render Confetti Particles */}
          {particles.length > 0 && (
            <div className="particles-canvas-wrap" aria-hidden="true">
              {particles.map((p) => (
                <div
                  key={p.id}
                  className="confetti-particle"
                  style={{
                    left: `calc(50% + ${p.vx * 24}px)`,
                    top: `calc(50% + ${p.vy * 24}px)`,
                    color: p.color,
                    fontSize: `${p.size}px`,
                    transform: `rotate(${p.rotation}deg)`,
                  }}
                >
                  {p.type === "web" ? "🕸️" : p.type === "heart" ? "❤️" : "✨"}
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            className="back-to-top"
            onClick={handleBackToTop}
            aria-label="Scroll back to top of page"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span>RETURN TO STRATOSPHERE // TOP</span>
          </button>
        </motion.div>

        {/* Footer */}
        <footer className="site-footer">
          <p className="footer-title">SHREYANKA'S BIRTHDAY UNIVERSE // EARTH-616</p>
          <p className="footer-sub">Designed with blood red & deep black love across every timeline 🕷️</p>
        </footer>
      </motion.div>
    </section>
  );
};

export default BirthdayLetter;
