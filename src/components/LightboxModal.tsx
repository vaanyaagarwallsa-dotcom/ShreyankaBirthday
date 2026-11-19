import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { Memory } from "../data/memories";

interface Props {
  memory: Memory | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const LightboxModal = ({ memory, onClose, onNext, onPrev }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!memory) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-dialog"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="lightbox-header">
            <div className="lightbox-badge">
              <span className="lightbox-dot"></span>
              <span>{memory.label}</span>
            </div>
            <button
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close photo"
            >
              ✕
            </button>
          </div>

          {/* Image container */}
          <div className="lightbox-image-container">
            <img
              src={memory.image}
              alt={memory.title}
              className="lightbox-img"
            />
          </div>

          {/* Caption */}
          <div className="lightbox-caption">
            <h3 className="lightbox-title">{memory.title}</h3>
            <p className="lightbox-note">{memory.note}</p>
          </div>

          {/* Navigation Controls */}
          <div className="lightbox-nav-footer">
            {onPrev && (
              <button
                className="lightbox-nav-btn prev"
                onClick={onPrev}
                aria-label="Previous memory"
              >
                ← PREV
              </button>
            )}
            <span className="lightbox-counter">MEMORY #{memory.id} / 11</span>
            {onNext && (
              <button
                className="lightbox-nav-btn next"
                onClick={onNext}
                aria-label="Next memory"
              >
                NEXT →
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LightboxModal;
