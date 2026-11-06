# Rajat Katnoria — Personal Developer Portfolio

> **Full-Stack Developer | Software Engineer**  
> Scalable Web Applications • Intelligent Systems • Seamless Digital Experiences

A high-performance personal brand and developer portfolio website built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## ⚡ Features & Architecture

- **Visual Design**: Agency-grade dark mode with deep charcoal/near-black backgrounds (`#06080F`), electric blue, violet, and cyan glows, ambient lighting orbs, and glassmorphism.
- **Hero Section**:
  - Live animated availability badge: *"Available for Opportunities"* with Himachal Pradesh location.
  - Large headline with gradient typography.
  - Interactive developer workspace with syntax highlighting, tabs (`RajatController.ts`, `Architecture.json`, `Runtime.sh`), and 1-click snippet copy.
  - CTA triggers for work exploration and interactive resume viewing.
- **About Me**:
  - Split layout with authentic metrics (`20+ skills`, `4+ core projects`, `6 certifications`, `2027 graduation`).
  - Customizable profile image placeholder with futuristic developer avatar frame.
  - 4 specialized competency cards: *Full-Stack Development*, *REST API Development*, *Database Management*, *AI Integration*.
- **Technical Skills**:
  - 7 categorized sections: Programming Languages, Frontend Engineering, Backend Development, Databases & Storage, Tools & Technologies, Cloud & Deployment, Core Computer Science.
  - Filter pills and clean competency cards without arbitrary percentage bars.
- **Professional Experience**:
  - Freelance Full-Stack Developer at **AVBT Technologies** (October 2026 – Present).
  - Detailed deliverables for *Prajnaa Market* storefront UI and *Meta WhatsApp CRM* solution.
- **Featured Projects**:
  - **AI Learning Platform** (*Next.js, Node.js, MongoDB, Gemini API*).
  - **University Management System** (*React.js, Node.js, Express.js, MySQL, 12+ REST APIs, RBAC*).
  - **Team Task Manager** (*React.js, Node.js, Express.js, MongoDB, Vercel, Render*).
  - **Online Voting System** (*React.js, duplicate-vote prevention*).
  - Interactive project detail modal for deep architectural breakdowns.
  - Authentic placeholder modals for GitHub/Demo links without inventing fake URLs.
- **Education & Accreditations**:
  - B.E. Computer Science & Engineering at **Chitkara University** (2023 – 2027).
  - Certifications from Cisco Networking Academy (Applied AI), Nutanix, Infosys Springboard.
  - Leadership honors: NSS Core Team Fitness Head & Drill Instructor, Ministry of Youth Affairs Appreciation.
- **Interactive Developer CLI Terminal**:
  - Trigger via navbar button, floating trigger, or keyboard shortcut (`Ctrl + /`).
  - Run commands like `help`, `skills`, `projects`, `experience`, `contact`, `resume`, `sudo hire`, `clear`.
- **Contact & Communication**:
  - Form with strict client-side validation.
  - Direct `mailto:` fallback pre-populating subject and body.
  - 1-click email copy to clipboard with toast notification.
  - Resume viewer dialog with browser printing/save as PDF support.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Local Production Preview
```bash
npm run preview
```

---

## 🛠 Customization

All data is centrally configured in:
- [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)
  - Update your GitHub repository URLs (`githubUrl`), live deployment links (`liveUrl`), personal bio, or contact information.
  - To replace the profile picture placeholder with your actual photograph, place your image into `public/avatar.jpg` and reference it in [`src/components/About.tsx`](./src/components/About.tsx).

---

## 📦 Deployment

### Deploy to Vercel
```bash
npm run build
# Deploy 'dist' folder with Vercel CLI or connect your GitHub repository to Vercel
```

### Deploy to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
