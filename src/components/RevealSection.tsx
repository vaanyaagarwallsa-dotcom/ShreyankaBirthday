import { motion } from "framer-motion";

const RevealSection = () => {
  return (
    <section className="reveal-section" id="reveal">
      {/* Background dramatic lighting */}
      <div className="reveal-atmosphere-glow" />
      <div className="reveal-halftone-pattern" />

      {/* Spider-Man symbol silhouette background */}
      <div className="reveal-spider-bg" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" stroke="#dc2626" strokeWidth="1.2" opacity="0.12">
          <polygon points="50,15 42,32 50,45 58,32" fill="#991b1b" opacity="0.3" />
          <polygon points="50,48 40,65 50,88 60,65" fill="#991b1b" opacity="0.3" />
          <path d="M42,32 L20,12 M58,32 L80,12" />
          <path d="M42,38 L12,35 M58,38 L88,35" />
          <path d="M40,65 L10,75 M60,65 L90,75" />
          <path d="M43,75 L22,95 M57,75 L78,95" />
        </svg>
      </div>

      <motion.div
        className="reveal-content-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="superhero-tag-wrap"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span className="comic-star-accent">★</span>
          <p className="reveal-label">TO OUR FAVOURITE SUPERHERO...</p>
          <span className="comic-star-accent">★</span>
        </motion.div>

        <motion.div
          className="reveal-name-block"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="reveal-heading">SHREYANKA</h2>
        </motion.div>

        {/* Comic Energy Red Divider */}
        <motion.div
          className="comic-divider-wrap"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="divider-line left" />
          <div className="divider-icon">
            <svg viewBox="0 0 24 24" fill="#dc2626" width="20" height="20">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="divider-line right" />
        </motion.div>

        <motion.p
          className="reveal-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Your next chapter begins today.
        </motion.p>
      </motion.div>

      {/* Skyline silhouette at bottom of section */}
      <div className="city-skyline-silhouette" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,120 L0,90 L40,90 L40,65 L80,65 L80,95 L110,95 L110,40 L150,40 L150,90 L190,90 L190,75 L230,75 L230,100 L270,100 L270,30 L290,15 L310,30 L310,100 L350,100 L350,55 L390,55 L390,90 L430,90 L430,70 L480,70 L480,100 L530,100 L530,45 L570,45 L570,95 L610,95 L610,25 L625,10 L640,25 L640,95 L690,95 L690,60 L730,60 L730,100 L780,100 L780,50 L830,50 L830,95 L870,95 L870,35 L910,35 L910,85 L960,85 L960,65 L1010,65 L1010,100 L1050,100 L1050,40 L1090,40 L1090,80 L1140,80 L1140,55 L1200,55 L1200,120 Z"
            fill="#050505"
          />
        </svg>
      </div>
    </section>
  );
};

export default RevealSection;
