import { motion } from "framer-motion";
import type { Memory } from "../data/memories";

interface Props {
  memory: Memory;
  index: number;
  onSelect: (memory: Memory) => void;
}

const ComicWebDivider = ({ issueNumber }: { issueNumber: number }) => (
  <div className="comic-web-divider" aria-hidden="true">
    <div className="web-divider-line"></div>
    <div className="web-divider-badge">
      <svg className="web-spider-icon" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.8">
        <circle cx="12" cy="10" r="3" fill="#991b1b" />
        <ellipse cx="12" cy="15" rx="4" ry="5" fill="#991b1b" />
        <path d="M9 9L4 5M15 9L20 5M8 12L3 12M16 12L21 12M8 15L4 19M16 15L20 19" />
      </svg>
      <span className="web-divider-text">CHAPTER {issueNumber} COMPLETE</span>
    </div>
    <div className="web-divider-line"></div>
  </div>
);

const MemoryCard = ({ memory, index, onSelect }: Props) => {
  const layout = memory.layout || "left";
  const layoutClass = `memory-layout-${layout}`;
  const isEven = index % 2 === 0;

  return (
    <>
      <motion.article
        className={`memory-item ${layoutClass}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Memory Image with Comic Frame and Stamp */}
        <motion.div
          className="memory-image-wrap"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={() => onSelect(memory)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(memory);
            }
          }}
          aria-label={`View full size: ${memory.title}`}
        >
          {/* Comic Frame Halftone Accent */}
          <div className="comic-frame-accent">
            <span className="frame-corner tl"></span>
            <span className="frame-corner tr"></span>
            <span className="frame-corner bl"></span>
            <span className="frame-corner br"></span>
          </div>

          {/* Stamp Badge */}
          {memory.stamp && (
            <div className="comic-stamp-badge">
              <span>{memory.stamp}</span>
            </div>
          )}

          {/* Actual Photograph */}
          <div className="img-container">
            <img
              src={memory.image}
              alt={memory.title}
              loading="lazy"
              className="memory-img"
            />
            {/* View Full Size pill on hover */}
            <div className="view-full-overlay">
              <span className="expand-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                VIEW FULL SIZE
              </span>
            </div>
          </div>
        </motion.div>

        {/* Memory Text & Narrative */}
        <motion.div
          className="memory-text-wrap"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Metadata bar */}
          <div className="memory-meta-row">
            <span className="memory-label">{memory.label}</span>
            {memory.location && (
              <span className="memory-location">{memory.location}</span>
            )}
          </div>

          <h3 className="memory-title">{memory.title}</h3>
          
          <div className="memory-note-box">
            <p className="memory-note">{memory.note}</p>
          </div>

          {/* Interactive footer for card */}
          <div className="memory-card-footer">
            <button
              className="view-memory-btn"
              onClick={() => onSelect(memory)}
            >
              <span>INSPECT EVIDENCE</span>
              <span className="btn-chevron">→</span>
            </button>
          </div>
        </motion.div>
      </motion.article>

      {index < 10 && <ComicWebDivider issueNumber={index + 1} />}
    </>
  );
};

export default MemoryCard;
