export interface Memory {
  id: number;
  image: string;
  title: string;
  label: string;
  note: string;
  layout?: "left" | "right" | "full" | "overlap-left" | "overlap-right";
  stamp?: string;
  location?: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    image: "/images/memory-01.jpg",
    title: "A Little Piece of Chaos",
    label: "ISSUE #001",
    stamp: "CANON EVENT 🕷️",
    location: "SCREENSHOT // MISSION CONTROL",
    note: "Some friendships start with a pose and never stop performing. This was one of those perfectly unplanned moments — two faces on a laptop screen, hands framing faces, and laughter that completely derailed whatever we were supposed to be studying. The kind of memory that makes you smile every single time you see it.",
    layout: "left",
  },
  {
    id: 2,
    image: "/images/memory-02.jpg",
    title: "Thumbs Up to the Multiverse",
    label: "MEMORY UNLOCKED",
    stamp: "DYNAMIC DUO ⚡",
    location: "AUDITORIUM // CONVOCATION ARCHIVES",
    note: "Surrounded by hundreds of seats and endless commotion, but somehow we always manage to tune everything out. Matching glasses, lanyards in place, and a collective thumbs-up to whatever chaos college decided to throw at us next. Having you by my side makes even the longest speeches bearable.",
    layout: "right",
  },
  {
    id: 3,
    image: "/images/memory-03.jpg",
    title: "The Warmest Hug in the Multiverse",
    label: "CLASSIFIED FILE",
    stamp: "CORE MEMORY ❤️",
    location: "BIRTHDAY EVE // SECTOR 7",
    note: "Golden birthday banners in the background, fairy lights casting a warm glow, and a hug so genuine and tight that no camera could ever do it justice. Some moments don't need a thousand words — they just need two best friends celebrating another year of survival, laughter, and unbreakable loyalty.",
    layout: "full",
  },
  {
    id: 4,
    image: "/images/memory-04.jpg",
    title: "Waves, Wind & Wonder",
    label: "ISSUE #004",
    stamp: "EXPEDITION 🌊",
    location: "MARINA SHORES // EARTH-616",
    note: "Sand between our toes, the salty ocean breeze messing up our hair, and two people who couldn't pose normally even if our lives depended on it. Beach trips with you are never just about the view — they're about the endless conversations, the splashed water, and the feeling that time stands still.",
    layout: "overlap-left",
  },
  {
    id: 5,
    image: "/images/memory-05.jpg",
    title: "The Wild Card Strategy",
    label: "EVIDENCE FILE",
    stamp: "UNFILTERED CHAOS 🃏",
    location: "HOSTEL DORM // NIGHT SHIFT",
    note: "Playing cards tucked straight into spectacle frames, phone in hand, and laughing until our stomachs hurt. Only you could take an ordinary deck of cards and turn a random dorm evening into an absolute comedy special. This photograph is pure, unfiltered, peak Shreyanka energy.",
    layout: "right",
  },
  {
    id: 6,
    image: "/images/memory-06.jpg",
    title: "The Ultimate Plot Twist",
    label: "ISSUE #006",
    stamp: "PLOT TWIST 💥",
    location: "COASTAL HORIZON // FILE 06",
    note: "The sky behind us, the wind blowing wild, and expressions straight out of a vintage Marvel comic panel. This is what happens every single time we attempt to take a 'decent, aesthetic picture' and immediately choose chaos instead. Normal is overrated anyway — this is where the real memories live.",
    layout: "left",
  },
  {
    id: 7,
    image: "/images/memory-07.jpg",
    title: "Behind the Lecture Hall",
    label: "CLASSIFIED FILE",
    stamp: "ACADEMIC GRIND 📚",
    location: "ROOM 402 // SURVIVAL LOG",
    note: "Classroom selfies hit completely differently when you're sitting next to your favourite person. Somewhere between dense slideshows, heavy lectures, and clock-watching, we always found a way to share a silent inside joke and a confident thumbs-up. We made the grind genuinely fun.",
    layout: "overlap-right",
  },
  {
    id: 8,
    image: "/images/memory-08.jpg",
    title: "Partners in Campus Crime",
    label: "MEMORY UNLOCKED",
    stamp: "HERO ALLIANCE 🎯",
    location: "CAMPUS GROUNDS // MID-DAY MISSION",
    note: "Backpacks strapped on, campus bustling behind us, and that trademark look that says 'we survived another round.' Walking these paths wouldn't have been half as memorable or half as funny without our daily debriefs, tea runs, and mutual commentary on everything under the sun.",
    layout: "left",
  },
  {
    id: 9,
    image: "/images/memory-09.jpg",
    title: "Platform Chronicles & Ice Cream",
    label: "ISSUE #009",
    stamp: "TRANSIT LOG 🍦",
    location: "PLATFORM 1 // LAZZA DEPOT",
    note: "Standing under the railway shed next to a Lazza ice cream board, one of us mid-call and the other making faces at the camera. Some of our best memories aren't the planned vacations — they're the spontaneous transit waits, train delays, and the little shared laughs along the journey.",
    layout: "right",
  },
  {
    id: 10,
    image: "/images/memory-10.jpg",
    title: "Sleeper Class Symphony",
    label: "SPECIAL EDITION",
    stamp: "TRAVEL ARCHIVE 🚆",
    location: "TRAIN 12623 // MULTIVERSE EXPRESS",
    note: "Tucked inside an Indian Railways berth, earphones plugged in, stretching out after hours on the tracks. Traveling together is always an adventure — from sharing snacks to deep midnight philosophical talks and impromptu photo sessions that capture the quiet comfort of true friendship.",
    layout: "full",
  },
  {
    id: 11,
    image: "/images/memory-11.jpg",
    title: "The Main Character",
    label: "COVER STORY",
    stamp: "CANON FINALE 👑",
    location: "TIMELINE PRIME // THE PROTAGONIST",
    note: "Every epic comic saga has a central hero, and in our story, you are undeniably the main character. Draped in black and silver, radiating elegance, poise, and quiet strength. Behind all the goofy antics and laughter is someone truly exceptional, brilliant, and deeply cherished by everyone lucky enough to know you.",
    layout: "overlap-left",
  },
];

export const birthdayLetter = `Dear Shreyanka,

If the multiverse is real, then I'm pretty sure I got lucky in this one — because I ended up in the timeline where I get to call you my friend.

You're the kind of person who makes the ordinary feel extraordinary. Every conversation with you has a little more colour, every adventure has a little more chaos, and every quiet moment has a little more meaning. You don't just show up — you transform every room you walk into.

This website is a small attempt to freeze some of our best moments in time. The photos, the laughter, the inside jokes, the late-night conversations — they all deserve to be remembered, celebrated, and revisited.

So here's to another year of you being unapologetically, beautifully, wonderfully you.

Happy Birthday, Shreyanka. The multiverse is brighter because you're in it.

With all the love in every timeline,
Your friend`;
