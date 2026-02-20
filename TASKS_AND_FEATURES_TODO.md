# Actionable Task Sequence

Based on the recent comprehensive site audit, here is the exact sequence of tasks we need to execute to finalize the portfolio's functionality and bridge the gap to the Phase 3 mobile app.

---

## ⏳ Pending Tasks (To Execute in Order)

### 1. Build the Blog CMS (Priority 1)
- **Problem:** Blogs are currently managed via a hardcoded JSON file.
- **Task:** Build the `/admin/blogs` page.
- **Features:** 
  - Rich markdown editor for writing posts directly in the admin panel.
  - Image uploader for blog cover photos.
  - Category manager (create/edit categories).
  - Draft/Publish toggle.

### 2. Build the Site Content CMS (Priority 2)
- **Problem:** Skills, Process Steps, FAQs, and Showcases are hardcoded in JSON files.
- **Task:** Build the `/admin/content` page.
- **Features:**
  - Simple text fields to edit FAQs and Process Steps directly from the dashboard.
  - Ability to reorder items (e.g., drag and drop or order numbers).

### 3. Implement Email Alerts (Priority 3)
- **Problem:** The contact form saves to the database, but does not send an email alert to the admin's phone/inbox.
- **Task:** Configure the email sender via Nodemailer (SMTP) or Resend.
- **Requirements:** User needs to provide SMTP credentials or a Resend API Key.

### 4. Frontend UX Polish
- **Task:** Add a prominent "Download Resume" button to the Hero section and Navbar.
- **Task:** Add category filtering buttons to the Projects grid (e.g., "All", "AI Models", "Flutter").

### 5. Phase 3 API Foundation (Mobile App Prep)
- **Task:** Create secure REST API endpoints (`/api/mobile/leads`, `/api/mobile/stats`, etc.) protected by an API key.
- **Task:** Implement WebSockets/Pusher for real-time mobile push notifications when a new lead arrives.

---

## ✅ Completed Tasks (For Record)
- [x] Web Admin UI & NextAuth Security (`/admin`)
- [x] Database Schema Setup (Prisma + MySQL)
- [x] Lead Capture API & Database Insertion
- [x] Visitor Tracking System (Analytics & Geo-location)
- [x] Dynamic Project Detail Pages (`/projects/[slug]`)
- [x] Markdown & HTML Content Engine for Projects
- [x] Project Image Uploads & Admin Form Integration
- [x] WhatsApp Floating Chat Integration
