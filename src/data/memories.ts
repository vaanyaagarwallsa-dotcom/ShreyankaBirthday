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
    note: "Knew it was going to be a goated friendship because this is the first picture we have together",
    layout: "left",
  },
  {
    id: 2,
    image: "/images/memory-02.jpg",
    title: "Thumbs Up to the Multiverse",
    label: "MEMORY UNLOCKED",
    stamp: "DYNAMIC DUO ⚡",
    location: "AUDITORIUM // FEST ARCHIVES",
    note: "Idk its a cutie pic of us at AARUUSH",
    layout: "right",
  },
  {
    id: 3,
    image: "/images/memory-03.jpg",
    title: "The Warmest Hug in the Multiverse",
    label: "CLASSIFIED FILE",
    stamp: "CORE MEMORY ❤️",
    location: "BIRTHDAY EVE // SECTOR 7",
    note: "I just love annoying you and while going through our pics, this one may be my fav",
    layout: "full",
  },
  {
    id: 4,
    image: "/images/memory-04.jpg",
    title: "Waves, Wind & Wonder",
    label: "ISSUE #004",
    stamp: "EXPEDITION 🌊",
    location: "MARINA SHORES // EARTH-616",
    note: "I was giving diva in this one so it shld be here lol",
    layout: "overlap-left",
  },
  {
    id: 5,
    image: "/images/memory-05.jpg",
    title: "The Wild Card Strategy",
    label: "EVIDENCE FILE",
    stamp: "UNFILTERED CHAOS 🃏",
    location: "HOSTEL DORM // NIGHT SHIFT",
    note: "Idk wtf you were trying to do here. But also i miss playing hours and hours of rummy right before endsems",
    layout: "right",
  },
  {
    id: 6,
    image: "/images/memory-06.jpg",
    title: "The Ultimate Plot Twist",
    label: "ISSUE #006",
    stamp: "PLOT TWIST 💥",
    location: "COASTAL HORIZON // FILE 06",
    note: "This is the start of 'we absolutely cannot take a normal pic together' ",
    layout: "left",
  },
  {
    id: 7,
    image: "/images/memory-07.jpg",
    title: "Behind the Lecture Hall",
    label: "CLASSIFIED FILE",
    stamp: "ACADEMIC GRIND 📚",
    location: "ROOM 402 // SURVIVAL LOG",
    note: "We did a hackathon, and won! can we please do more, gotta update the resume",
    layout: "overlap-right",
  },
  {
    id: 8,
    image: "/images/memory-08.jpg",
    title: "Partners in Campus Crime",
    label: "MEMORY UNLOCKED",
    stamp: "HERO ALLIANCE 🎯",
    location: "CAMPUS GROUNDS // MID-DAY MISSION",
    note: "we cannot take a normal pic part 1037267",
    layout: "left",
  },
  {
    id: 9,
    image: "/images/memory-09.jpg",
    title: "Platform Chronicles & Ice Cream",
    label: "ISSUE #009",
    stamp: "TRANSIT LOG 🍦",
    location: "PLATFORM 1 // LAZZA DEPOT",
    note: "Maybe now youll start giving me the attention that i deserve",
    layout: "right",
  },
  {
    id: 10,
    image: "/images/memory-10.jpg",
    title: "Sleeper Class Symphony",
    label: "SPECIAL EDITION",
    stamp: "TRAVEL ARCHIVE 🚆",
    location: "TRAIN 12623 // MULTIVERSE EXPRESS",
    note: "I miss the mozarella sticks, ab treat do itna mehnat kiya hai",
    layout: "full",
  },
  {
    id: 11,
    image: "/images/memory-11.jpg",
    title: "The Main Character",
    label: "COVER STORY",
    stamp: "CANON FINALE 👑",
    location: "TIMELINE PRIME // THE PROTAGONIST",
    note: "Oh but also, you will always be my main diva. idk when this divafication happened but damn.",
    layout: "overlap-left",
  },
];

export const birthdayLetter = `Dear Shreyanka,

If the Marvel universe has taught me anything, it's that every universe has its own heroes. Some can swing between skyscrapers, some can save the world, and some just make life a whole lot better by being in it. You're definitely the last one.

If I could choose any universe in the multiverse, I'd pick the one where I get to know you, make countless memories, laugh at the most ridiculous things and get through all of life's little plot twists together.

I hope this year brings you all the happiness, adventures and main-character moments you deserve. Never stop being your wonderfully chaotic self.

And remember, no matter how many villains or plot twists life throws our way, I'll always be on your team.

Happy Birthday, Shreyanka!

With great friendship comes great responsibility. Unfortunately, you're stuck with me. ❤️🕷️`;
