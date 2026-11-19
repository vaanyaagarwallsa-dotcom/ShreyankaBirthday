import { useState, useEffect } from "react";
import { soundtrack } from "../utils/audio";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a subtle tooltip inviting user to turn on ambient soundtrack
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleToggle = async () => {
    const active = await soundtrack.toggleMusic();
    setIsPlaying(active);
    setShowTooltip(false);
  };

  return (
    <div className="music-toggle-container">
      {showTooltip && !isPlaying && (
        <div className="music-tooltip">
          <span>🎧 Play Soundtrack</span>
        </div>
      )}
      <button
        className={`music-toggle ${isPlaying ? "playing" : ""}`}
        onClick={handleToggle}
        title={isPlaying ? "Mute soundtrack" : "Play cinematic soundtrack"}
        aria-label={isPlaying ? "Mute soundtrack" : "Play cinematic soundtrack"}
      >
        {isPlaying ? (
          <div className="eq-bars">
            <span className="eq-bar bar-1"></span>
            <span className="eq-bar bar-2"></span>
            <span className="eq-bar bar-3"></span>
          </div>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicToggle;
