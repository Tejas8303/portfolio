# Tejas Kumar — Flagship Personal Portfolio

A modern, production-ready developer portfolio built for **Tejas Kumar** (Software Engineering Intern @ Vivriti Capital, B.S. in Mathematics and Computing @ IIT Patna). Inspired by the aesthetics of Apple, Linear, Stripe, and Vercel.

---

## 🌟 Key Features

- **Luxury Design System & Aesthetics**: Dark mode `#030712` palette, glassmorphism cards (`rgba(255,255,255,0.06)`), glowing backdrop blur, soft gradients, and Geist font hierarchy.
- **Interactive Aurora Background**: Animated canvas particle stream, multi-layer gradient aurora mesh, SVG noise texture overlay, and real-time cursor spotlight.
- **Hero Interactive Holographic Workspace**: Animated typing subtitle, high-impact typography, quick stats pills, and a real-time glowing code window displaying Codeforces max rating (1638).
- **Command Palette (`Ctrl + K` / `Cmd + K`)**: Fast jump navigation to any section, project search, audio toggle, and resume trigger.
- **Interactive Developer Terminal (CLI)**: Full command-line terminal engine allowing users to execute commands (`help`, `bio`, `skills`, `projects`, `experience`, `education`, `achievements`, `contact`, `resume`, `github`, `codeforces`, `sudo`, `clear`).
- **Featured Projects Showcase**:
  - **Enterprise-Grade Recruitment Platform (2026)**: Role-based matching portal, analytics dashboards, custom high-speed Multer file storage layer replacing cloud dependencies, and Docker Compose setup.
  - **Medicure - Online Doctor Appointment System (2024)**: Scalable doctor appointment system with role-based dashboards for admins, doctors, and patients, secure JWT auth, MongoDB optimization, and Cloudinary media.
- **Skills Matrix (5 Categories)**: Interactive tabs for Programming Languages, Cloud & DevOps, Frameworks & Libraries, Databases, and Developer Tools.
- **Competitive Milestones**: Codeforces Specialist (1638 max rating), 400+ solved problems across LeetCode, GFG, and CodingNinjas, Codeforces Global Round 30 rank 1151st, and JEE Mains 94.59 percentile (AIR 48,505).
- **Lenis Smooth Scroll**: Smooth scroll physics with top progress indicator bar.
- **Web Audio API Synth**: Subtle native browser sound synthesis for click/hover micro-interactions with mute control.
- **Contact Form**: Built with React Hook Form, Zod schema validation, first-party `/api/contact` route, Web3Forms integration, and mailto fallback.
- **SEO & OpenGraph**: Structured JSON-LD schema (Person / SoftwareEngineer), `sitemap.ts`, `robots.ts`, and dynamic OpenGraph metadata.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Glassmorphism, CSS Variables
- **Animations**: Framer Motion, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form, Zod
- **Audio**: Browser Native Web Audio API Synthesizer

---

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone https://github.com/Tejas8303/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
```bash
npm run build
```

---

## 🌐 Deployment to Vercel

1. Push your latest commits to GitHub:
```bash
git add .
git commit -m "feat: portfolio updates"
git push origin main
```
2. Go to [Vercel](https://vercel.com) and import your `Tejas8303/portfolio` repository.
3. Vercel automatically detects Next.js. Click **Deploy**.
4. Every new push to the `main` branch will automatically trigger a new deployment.