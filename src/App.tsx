import "./styles/global.css";
import OpeningScreen from "./components/OpeningScreen";
import RevealSection from "./components/RevealSection";
import FriendshipArchive from "./components/FriendshipArchive";
import BirthdayLetter from "./components/BirthdayLetter";
import MusicToggle from "./components/MusicToggle";

function App() {
  const handleEnter = () => {
    document.getElementById("reveal")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="halftone-overlay" />
      <OpeningScreen onEnter={handleEnter} />
      <RevealSection />
      <FriendshipArchive />
      <BirthdayLetter />
      <MusicToggle />
    </>
  );
}

export default App;
