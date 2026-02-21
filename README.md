# Aqib Mehedi — AI Architect Portfolio & Ecosystem

**Live:** [aqibmehedi.com](https://aqibmehedi.com) · **Stack:** Next.js 16 · Prisma 5.22 · MySQL · Node.js · Flutter

The most technically advanced personal brand ecosystem by an AI/Flutter Architect in Bangladesh, engineered to dominate search rankings for high-intent keywords.

---

## 🏗 Ecosystem Architecture

```
aqibmehedi.com (Next.js 16 — Node.js)
│
├── Web Frontend (React 19 / Tailwind CSS 4)
│   ├── Hero, Bento Grid (Arsenal), Project Showcase
│   ├── Blog System (dynamic, DB-powered)
│   ├── SEO Pages (/best-ai-engineer-bangladesh, etc.)
│   └── Contact / Hire Me Form
│
├── Web Admin Panel (/admin)
│   ├── Overview Dashboard (leads, visitors, blog, projects stats)
│   ├── Leads Database (CRM)
│   ├── Project CMS
│   └── Site Visitors (Analytics)
│
├── 📱 Mobile Admin (Flutter — Android/iOS)
│   ├── Real-time Pusher Notifications for new leads
│   ├── Full CRUD for Projects, Blogs, and Leads
│   └── Mobile-native Visitor Analytics
│
├── Backend (Next.js API Routes)
│   ├── /api/mobile — Dedicated endpoints for Flutter App
│   ├── /api/pusher/auth — Private channel authorization
│   └── /api/track — Visitor tracking + Geo-IP
│
└── Database (MySQL via Prisma ORM)
    ├── Lead, AdminUser, Project, BlogPost, BlogCategory
    ├── Skill, ProcessStep, Showcase, Faq, AuthorityStat
    └── Visitor (IP, device, browser, geo-coordinates)
```

---

## 🛠 Tech Stack & Versions

### Backend & Web
- **Framework:** Next.js 16.1.6
- **UI & Logic:** React 19.2.3
- **Styling:** Tailwind CSS 4.0
- **Database:** MySQL via Prisma 5.22.0
- **Real-time:** Pusher 5.3.2
- **Auth:** Next-Auth 4.24 & JWT 9.0.3
- **Validation:** Zod 4.3.6

### Mobile (Eidos Admin)
- **Framework:** Flutter 3.24+
- **State:** Riverpod 2.5.1
- **Networking:** Dio 5.4.3 & Http 1.2.2
- **Real-time:** Pusher Channels 2.6.0
- **Notifications:** Flutter Local Notifications 19.5.0

---

## 🚀 Getting Started

### Web Backend
```bash
npm install
npm run build
npm start
```

### Mobile App
```bash
cd portfolio_app
flutter pub get
flutter run
```

---

## 🌐 CPanel Deployment Guide (Backend)

### One-time Setup
```bash
# 1. Inside the CPanel Node.js virtual environment:
source /home/aqibmeh1/nodevenv/portfolio-site/22/bin/activate && cd ~/portfolio-site

# 2. Pull latest code
git fetch origin main && git reset --hard origin/main

# 3. Install dependencies
npm install

# 4. Generate Prisma Client
npx prisma generate

# 5. Create DB tables (first time only)
npx prisma db push
```

### Updating the Live Site
```bash
# Local: build and push (MUST build locally before pushing)
npm run build
git add -A && git commit -m "feat: ..." && git push origin main

# CPanel Terminal: pull and restart server
git pull origin main
kill $(pgrep -f "node server.js")
nohup node server.js > app.log 2>&1 &
```

---

*Architected with precision by Antigravity AI & Aqib Mehedi.*

