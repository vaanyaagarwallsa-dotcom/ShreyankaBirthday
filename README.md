# 🕷️ Shreyanka's Birthday Universe

A cinematic, Spider-Man/Marvel-inspired birthday experience and interactive digital scrapbook celebrating Shreyanka.

## 🚀 Features

- **The Birthday Transmission**: Dramatic full-screen opening section with multiverse telemetry, glowing Spider-Man mask silhouette, audio feedback, and cinematic typography.
- **The Birthday Reveal**: Superhero announcement with New York skyline silhouette and comic energy effects.
- **The Friendship Archive**: Long, vertically scrollable scrapbook featuring all 11 personal photographs across 5 distinct asymmetric comic layouts (left-aligned, right-aligned, full-width cinema panel, and scrapbook overlap polaroid cards).
- **Lightbox Inspector**: Tap/click any photo to view full-resolution uncropped details with navigation controls and classified dossier notes.
- **Top-Secret Birthday Letter**: Handwritten dossier envelope aesthetic with emotional quote, web-confetti blaster, and back-to-top return.
- **Integrated Ambient Soundtrack & Web Shooter Sound**: Built-in royalty-free Web Audio API superhero ambient synth pads + support for custom audio (`/music/bg.mp3`) with animated equalizer visualizer.
- **Zero Face Cropping**: All photographs retain natural proportions, responsive on all devices from iPhones to ultra-wide displays.

## 🛠️ Tech Stack

- React 19 + TypeScript
- Vite
- Framer Motion
- Web Audio API

---

## 📦 How to Deploy to Vercel

### Option 1: Via GitHub & Vercel Dashboard (Recommended)

1. **Push this folder to a new GitHub repository**:
   ```bash
   cd /Users/user53/.gemini/antigravity/scratch/shreyanka-birthday
   git init
   git add .
   git commit -m "Initial commit: Shreyanka's Birthday Universe"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select your GitHub repository.
   - Framework Preset will auto-detect as **Vite**.
   - Root directory is `./` (or leave default).
   - Click **"Deploy"**.

3. **Enjoy your live site!**
   - Vercel will provide an instant URL (e.g. `shreyanka-birthday.vercel.app`).
   - The included `vercel.json` ensures all SPA routes and static `/images/` cache properly.

---

### Option 2: Deploy directly with Vercel CLI

```bash
cd /Users/user53/.gemini/antigravity/scratch/shreyanka-birthday
npx vercel
```
Follow the quick prompts in your terminal to deploy directly.
