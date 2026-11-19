import { motion } from "framer-motion";

const SpiderWebBg = () => {
  return (
    <div className="spider-web-bg" aria-hidden="true">
      {/* Corner Spider Web - Top Left */}
      <svg className="corner-web top-left" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="300" y2="0" stroke="#dc2626" strokeWidth="0.8" opacity="0.35" />
        <line x1="0" y1="0" x2="0" y2="300" stroke="#dc2626" strokeWidth="0.8" opacity="0.35" />
        <line x1="0" y1="0" x2="280" y2="70" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        <line x1="0" y1="0" x2="240" y2="150" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        <line x1="0" y1="0" x2="180" y2="220" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        <line x1="0" y1="0" x2="90" y2="280" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        {/* Web Arcs */}
        {[60, 120, 180, 240, 290].map((r, i) => (
          <path
            key={`tl-arc-${i}`}
            d={`M ${r},0 Q ${r * 0.7},${r * 0.7} 0,${r}`}
            stroke="#e11d48"
            strokeWidth="0.6"
            opacity="0.3"
          />
        ))}
      </svg>

      {/* Corner Spider Web - Top Right */}
      <svg className="corner-web top-right" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="300" y1="0" x2="0" y2="0" stroke="#dc2626" strokeWidth="0.8" opacity="0.35" />
        <line x1="300" y1="0" x2="300" y2="300" stroke="#dc2626" strokeWidth="0.8" opacity="0.35" />
        <line x1="300" y1="0" x2="20" y2="70" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        <line x1="300" y1="0" x2="60" y2="150" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        <line x1="300" y1="0" x2="120" y2="220" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        <line x1="300" y1="0" x2="210" y2="280" stroke="#dc2626" strokeWidth="0.5" opacity="0.25" />
        {/* Web Arcs */}
        {[60, 120, 180, 240, 290].map((r, i) => (
          <path
            key={`tr-arc-${i}`}
            d={`M ${300 - r},0 Q ${300 - r * 0.7},${r * 0.7} 300,${r}`}
            stroke="#e11d48"
            strokeWidth="0.6"
            opacity="0.3"
          />
        ))}
      </svg>

      {/* Center Radials and Spirals */}
      <svg className="center-web-svg" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Radial lines */}
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i * 20 * Math.PI) / 180;
          const x2 = 500 + 750 * Math.cos(angle);
          const y2 = 500 + 750 * Math.sin(angle);
          return (
            <line
              key={`r-${i}`}
              x1="500"
              y1="500"
              x2={x2}
              y2={y2}
              stroke="#dc2626"
              strokeWidth="0.6"
              opacity="0.2"
            />
          );
        })}
        {/* Concentric rings */}
        {[100, 200, 320, 460, 620].map((r, ri) => (
          <motion.circle
            key={`c-${ri}`}
            cx="500"
            cy="500"
            r={r}
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.6"
            opacity="0.22"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.22, scale: 1 }}
            transition={{ duration: 1.8, delay: ri * 0.12 }}
          />
        ))}
      </svg>

      {/* Floating Red Dust Particles */}
      <div className="dust-particles">
        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
      </div>
    </div>
  );
};

export default SpiderWebBg;
