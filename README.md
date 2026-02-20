# Aqib Mehedi — AI Architect Portfolio & Ecosystem

**Live:** [aqibmehedi.com](https://aqibmehedi.com) · **Stack:** Next.js 16 · Prisma · MySQL · Node.js on CPanel

The most technically advanced personal brand ecosystem by an AI/Flutter Architect in Bangladesh, engineered to dominate search rankings for high-intent keywords.

---

## 🎯 Mission
Rank #1 for these keywords and convert every visitor into a client:
- `Best AI Engineer Bangladesh`
- `Senior Flutter Architect Bangladesh`
- `Enterprise AI Solutions Architect`

---

## 🏗 Current Architecture

```
aqibmehedi.com (Next.js 16 — Node.js on CPanel)
│
├── Frontend (React / Tailwind CSS)
│   ├── Hero, Bento Grid (Arsenal), Project Showcase
│   ├── Blog System (dynamic, DB-powered)
│   ├── SEO Pages (/best-ai-engineer-bangladesh, /krishok-ai, etc.)
│   └── Contact / Hire Me Form
│
├── Admin Panel (/admin)
│   ├── Overview Dashboard (leads, visitors, blog, projects stats)
│   ├── Leads Database (CRM)
│   ├── Project CMS (with image upload)
│   └── Site Visitors (World Map + IP Analytics)
│
├── Backend (Next.js API Routes)
│   ├── /api/contact — Lead capture → MySQL
│   ├── /api/track — Visitor tracking + Geo-IP
│   ├── /api/upload — Image upload to /public/projects
│   └── /api/auth — NextAuth session management
│
└── Database (MySQL via Prisma ORM)
    ├── Lead, AdminUser, Project, BlogPost, BlogCategory
    ├── Skill, ProcessStep, Showcase, Faq, AuthorityStat
    └── Visitor (IP, device, browser, geo-coordinates)
```

---

## 🚀 Getting Started (Local Development)

```bash
npm install
npm run dev        # http://localhost:3000
```

### Environment Files
| File | Purpose |
|---|---|
| `.env.local` | Local dev — points to `localhost:3306` |
| `.env.production` | Live server — points to CPanel MySQL |

---

## 🌐 CPanel Deployment Guide

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

# 6. Seed all data
node scripts/seed-deploy.mjs

# 7. Create admin user
node scripts/create-admin.mjs
```

Then **RESTART** from CPanel "Setup Node.js App" dashboard.

### Updating the Live Site
```bash
# Local: build and push (MUST build locally before pushing)
npm run build
git add -A && git commit -m "feat: ..." && git push origin main

# CPanel Terminal: pull, restore build, and restart server
git pull origin main
git checkout -- .next
kill $(pgrep -f "node server.js")
nohup node server.js > app.log 2>&1 &
```

> **⚠️ Important Notes:**
> - Always run `npm run build` **locally** before pushing. The `.next` build folder is committed to git because cPanel's Turbopack has symlink issues that prevent building on the server.
> - **Never** run `rm -rf .next` on the server. If the `.next` folder gets deleted, restore it with `git checkout -- .next`.
> - To check server logs: `cat app.log`
> - To verify the server is running: `pgrep -f "node server.js"`

### Environment Variables (CPanel Node.js App)
| Key | Value |
|---|---|
| `DATABASE_URL` | `mysql://aqibmeh1_portfolio-site:TP%]g3}.1Tq8V[XQ@localhost:3306/aqibmeh1_portfolio-site` |
| `NEXTAUTH_URL` | `https://aqibmehedi.com` |
| `NEXTAUTH_SECRET` | `A9s8d7f6g5h4j3k2l1m0n9b8v7c6x5z4` |
| `NODE_ENV` | `production` |

---

## 🗄️ Database
- **Host:** `localhost:3306`
- **User:** `aqibmeh1_portfolio-site`
- **Database:** `aqibmeh1_portfolio-site`
- **Password:** `TP%]g3}.1Tq8V[XQ`

---

## 📱 Next Phase: Flutter Mobile Admin App

> **Phase 3** is the next major milestone — connecting this backend to a native Flutter application.

**Goals:**
- Real-time **Pusher notifications** on the phone when a new lead/contact arrives
- Full **Mobile Admin Panel** — manage projects, blogs, and leads from anywhere
- Mirror the web admin in Flutter with a premium mobile-native UI
- On-the-go content management — add/edit projects, reply to leads, view visitor analytics

See **`IMPLEMENTATION_PLAN.md`** for the full technical roadmap.

---

*Architected with precision by Antigravity AI & Aqib Mehedi.*
