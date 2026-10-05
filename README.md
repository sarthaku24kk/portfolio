# Sarthak Kumar — Portfolio

A premium, modern, highly interactive 3D personal portfolio website built with React, TypeScript, Three.js, and Framer Motion.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Utility styles |
| Three.js + React Three Fiber | 3D neural sphere |
| Framer Motion | Animations & transitions |
| @react-three/drei | 3D helpers |

---

## Project Structure

```
src/
├── 3d/
│   ├── NeuralSphere.tsx     # Interactive 3D particle sphere
│   └── Scene3D.tsx          # Three.js canvas wrapper w/ WebGL fallback
├── components/
│   ├── CursorGlow.tsx       # Mouse-following radial glow
│   ├── Loader.tsx           # Cinematic loading screen
│   ├── MagneticButton.tsx   # Spring-based magnetic CTA buttons
│   └── Navbar.tsx           # Floating nav with active section detection
├── data/
│   └── portfolio.ts         # ← EDIT ALL CONTENT HERE
├── hooks/
│   └── usePortfolio.ts      # Mouse parallax, scroll, active section hooks
├── sections/
│   ├── Hero.tsx             # Hero with 3D sphere + CTAs
│   ├── About.tsx            # About + interactive pipeline diagram
│   ├── Skills.tsx           # Interactive skill cards
│   ├── Projects.tsx         # Project showcase cards
│   ├── Achievements.tsx     # Animated achievement timeline
│   ├── SystemThinking.tsx   # Interactive system stages
│   ├── CurrentlyLearning.tsx# Learning status badges
│   ├── Leadership.tsx       # Leadership/collaboration section
│   └── Contact.tsx          # Contact with placeholder-aware links
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── index.css                # Global styles + design tokens
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

```bash
# Navigate to the project directory
cd sarthak-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:5173**

---

## Development

```bash
# Dev server with HMR
npm run dev

# Type checking
npx tsc --noEmit

# Lint
npm run lint
```

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## Updating Portfolio Content

**All portfolio content lives in one file:**

```
src/data/portfolio.ts
```

### What you can update:

| Section | Variable | Notes |
|---|---|---|
| Personal info | `PERSONAL` | Name, title, tagline, GitHub, LinkedIn, email |
| About text | `ABOUT_TEXT` | Multi-paragraph about section |
| Skills | `SKILLS` | Categories, items, levels (`proficient`/`learning`) |
| Projects | `PROJECTS` | Title, description, tags, GitHub link, demo link |
| Achievements | `ACHIEVEMENTS` | Icon, title, description, highlight badge |
| System stages | `SYSTEM_STAGES` | Interactive system thinking section |
| Currently learning | `CURRENTLY_LEARNING` | Skill name + status (`learning`/`active`) |
| Leadership | `LEADERSHIP` | Role, bullet points |
| Hero labels | `HERO_LABELS` | Floating labels around the 3D sphere |
| Nav items | `NAV_ITEMS` | Navigation links |

### Adding your LinkedIn & Email

In `src/data/portfolio.ts`:

```ts
export const PERSONAL = {
  // ...
  linkedin: "https://linkedin.com/in/your-username", // Replace ADD_LINKEDIN_URL
  email: "your@email.com",                           // Replace ADD_EMAIL
}
```

---

## Deployment to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option 2 — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Vercel will auto-detect Vite settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click Deploy

### vercel.json (optional, for SPA routing)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Performance Notes

- **WebGL fallback**: If Three.js / WebGL is unavailable, a CSS animation fallback renders instead
- **Reduced motion**: All animations are disabled when `prefers-reduced-motion: reduce` is set
- **Mobile optimization**: Particle count is halved on viewports < 768px
- **Lazy loading**: Sections use `whileInView` intersection-based animations

---

## Accessibility

- Semantic HTML5 landmarks (`<main>`, `<section>`, `<nav>`)
- ARIA labels on icon-only buttons
- Keyboard navigable navigation
- Visible focus states
- All content is accessible without 3D interaction
- Respects `prefers-reduced-motion`

---

## License

This is a personal portfolio — not for redistribution.
