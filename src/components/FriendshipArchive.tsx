import { useState } from "react";
import { motion } from "framer-motion";
import { memories, type Memory } from "../data/memories";
import MemoryCard from "./MemoryCard";
import LightboxModal from "./LightboxModal";

const FriendshipArchive = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const handleSelect = (mem: Memory) => {
    setSelectedMemory(mem);
  };

  const handleClose = () => {
    setSelectedMemory(null);
  };

  const currentIndex = selectedMemory ? memories.findIndex((m) => m.id === selectedMemory.id) : -1;

  const handleNext = () => {
    if (currentIndex !== -1 && currentIndex < memories.length - 1) {
      setSelectedMemory(memories[currentIndex + 1]);
    } else {
      setSelectedMemory(memories[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedMemory(memories[currentIndex - 1]);
    } else {
      setSelectedMemory(memories[memories.length - 1]);
    }
  };

  return (
    <section className="archive-section" id="archive">
      {/* Background Ambience */}
      <div className="archive-bg-pattern" />

      {/* Section Header */}
      <motion.div
        className="archive-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="archive-badge-pill">
          <span className="live-dot"></span>
          <span>DATABASE ACCESS GRANTED // 11 DOSSIERS FOUND</span>
        </div>
        <h2 className="archive-main-title">THE FRIENDSHIP ARCHIVE</h2>
        <p className="archive-subtitle">
          Every memory is a canon event. Scroll down to unlock every classified chapter of our story.
        </p>
        <div className="archive-decor-line" />
      </motion.div>

      {/* Vertical Memory Scrapbook */}
      <div className="archive-memories-container">
        {memories.map((memory, index) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            index={index}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        memory={selectedMemory}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default FriendshipArchive;
