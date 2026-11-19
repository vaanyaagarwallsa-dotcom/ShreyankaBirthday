// Web Audio API cinematic ambient synthesizer & sound effects
// Allows the birthday website to have ambient audio without requiring external music files,
// while gracefully playing /music/bg.mp3 if provided.

class SoundtrackManager {
  private audioCtx: AudioContext | null = null;
  private isSynthesizing: boolean = false;
  private synthGain: GainNode | null = null;
  private activeOscillators: OscillatorNode[] = [];
  private intervalId: number | null = null;
  private customAudio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;

  constructor() {
    // Try to load custom audio if present
    if (typeof window !== "undefined") {
      this.customAudio = new Audio("/music/bg.mp3");
      this.customAudio.loop = true;
    }
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  // Play a Spider-Man web "THWIP!" sound effect
  public playThwip() {
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1800, this.audioCtx.currentTime);
      filter.Q.setValueAtTime(3.0, this.audioCtx.currentTime);

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.audioCtx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.22);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.25);
    } catch {
      // Audio not permitted or supported yet
    }
  }

  // Start or stop background music
  public async toggleMusic(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      this.isPlaying = false;
      return false;
    } else {
      await this.play();
      this.isPlaying = true;
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private async play() {
    this.initAudioContext();

    // Check if custom audio file works
    if (this.customAudio) {
      try {
        await this.customAudio.play();
        return;
      } catch {
        // Fall back to synth ambient
      }
    }

    this.startAmbientSynth();
  }

  private stop() {
    if (this.customAudio) {
      try {
        this.customAudio.pause();
      } catch {
        // ignore
      }
    }
    this.stopAmbientSynth();
  }

  // Cinematic ambient chord generator (Spider-Verse emotional tones: Dm9 -> Bbmaj7 -> F -> C/E)
  private startAmbientSynth() {
    if (this.isSynthesizing || !this.audioCtx) return;
    this.isSynthesizing = true;

    const masterGain = this.audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.12, this.audioCtx.currentTime + 2.5);
    masterGain.connect(this.audioCtx.destination);
    this.synthGain = masterGain;

    // Chords: frequencies in Hz (Dm, Bb, F, C)
    const chords = [
      [146.83, 220.00, 261.63, 329.63], // Dm9
      [116.54, 174.61, 233.08, 293.66], // Bbmaj7
      [174.61, 220.00, 261.63, 349.23], // Fmaj
      [130.81, 196.00, 246.94, 329.63], // C/E
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.audioCtx || !this.synthGain || !this.isSynthesizing) return;
      const currentNotes = chords[chordIndex];
      chordIndex = (chordIndex + 1) % chords.length;

      // Stop previous oscs smoothly
      const oldOscs = [...this.activeOscillators];
      this.activeOscillators = [];
      const now = this.audioCtx.currentTime;

      oldOscs.forEach(o => {
        try {
          o.stop(now + 1.2);
        } catch {
          // ignore
        }
      });

      // Spawn warm pad oscillators
      currentNotes.forEach((freq, i) => {
        if (!this.audioCtx || !this.synthGain) return;
        const osc = this.audioCtx.createOscillator();
        const noteGain = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(550 + i * 80, now);

        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.linearRampToValueAtTime(0.045, now + 1.5);
        noteGain.gain.linearRampToValueAtTime(0.02, now + 5.0);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(this.synthGain);

        osc.start(now);
        this.activeOscillators.push(osc);
      });
    };

    playChord();
    this.intervalId = window.setInterval(playChord, 5500);
  }

  private stopAmbientSynth() {
    this.isSynthesizing = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.synthGain && this.audioCtx) {
      try {
        this.synthGain.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 1.0);
      } catch {
        // ignore
      }
    }
    setTimeout(() => {
      this.activeOscillators.forEach(o => {
        try { o.stop(); } catch { /* ignore */ }
      });
      this.activeOscillators = [];
    }, 1100);
  }
}

export const soundtrack = new SoundtrackManager();
