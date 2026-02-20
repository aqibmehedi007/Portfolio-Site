# Website Functionality & Features Roadmap

## Overview of Missing Features
While the frontend interface is visually striking and effectively displays your portfolio statically, it currently lacks the interactive, data-driven systems required to make it a "fully functional" business ecosystem. 

To bridge the gap between a static portfolio and the dynamic backend/mobile app detailed in the `IMPLEMENTATION_PLAN.md`, the following operational features must be established.

---

## 1. Feature Breakdown & Required Functionality

### A. Contact & Lead Generation Engine
**What happens when a client clicks "Hire Me", "Start a Consultation", or submits a contact form?**
- **Trigger:** Clicking a CTA smooth-scrolls the user to a dedicated Contact Section or routes them to a secure `/contact` page.
- **Data Capture:** The user fills out a polished form containing: Name, Email, Service Type (AI, Flutter, Enterprise), Budget Range, and a custom Message.
- **Frontend Validation:** Next.js uses client-side validation (e.g., Zod) to ensure the email is valid and required fields are populated before submission.
- **Backend Processing:** The form POSTs the payload safely to your Phase 2 Backend API (`/api/contact`).
- **Database Storage:** The lead is securely saved in a `Leads` table within your database.
- **Email Automation:** Complete integration with an email service (Resend or SendGrid). The system immediately emails the prospect a professional confirmation, and emails you (the admin) all lead details.
- **Flutter Push Notification (Phase 3):** The backend triggers a Firebase Cloud Messaging (FCM) ping. Your phone buzzes instantly: *"New Enterprise AI Lead via Portfolio: Target $5k+"*.

### B. Direct Booking & Consultation Architecture
- **Calendar UI Integration:** A modern calendar picker replacing back-and-forth emails. 
- **Timezone Localization:** International clients can browse your available consulting slots mapped perfectly to their local timezone.

### C. Dynamic Content System (CMS)
- **Current State:** Projects, site configurations, and SEO text are hardcoded inside `src/database/` and `src/core/`.
- **Target State:** A secure Web Admin Panel allowing you to add, edit, or hide projects, adjust your hero title, and modify SEO tags via a database UI without doing a source code commit.

### D. Analytics & Conversion Tracking
- Action tracking that monitors how many people clicked "Download Resume" or visited the "Enterprise AI" page.
- Proper pixel and event triggers to observe what paths high-paying clients take through your site.

---

## 2. Order of Execution (Task Sequence)

To build this functionality efficiently without breaking the current site, we must execute the following sequential plan mapping back to your phases.

### Step 1: Frontend Pre-wiring (Finishing Phase 1)
- [x] Build the physical UI for the Contact Form and place it on the homepage (or `/contact`).
- [x] Build UI states for the form: *Idle, Formatting, Sending, Success (Toast Notification), Error*.
- [x] Prepare the API endpoint skeleton inside the Next.js `/app/api/` directory.

### Step 2: Database & Backend Implementation (Phase 2 Start)
- [x] Provision the database architecture (e.g., PostgreSQL via Prisma).
- [x] Create the structural database schemas: `Leads`, `Projects`, `Settings`, `AdminUser`.
- [x] Wire the backend lead capture API to the database.
- [x] Hook up transactional email dispatchers on successful API submissions.

### Step 3: Web Admin Dashboards (Phase 2 Completion)
- [x] Implement secure JWT Authentication (e.g., NextAuth/Auth.js) to lock the admin routes.
- [x] Build the visual Admin Dashboard UI to list, read, tag, and delete incoming `Leads`.
- [x] Build the visual CMS UI to perform CRUD operations on `Projects`.

### Step 4: Mobile App Ecosystem (Phase 3)
- [ ] Secure the REST APIs so the mobile app can authenticate.
- [ ] Configure Firebase for server-side push notifications.
- [ ] Develop the Flutter mobile app.
- [ ] Embed the API fetch logic and Push Notification listener inside the Flutter app.

---

## 3. SEO Strategy: The Power of a Blogging System

**Question:** *Will having a blogging system make the website trend on Google even more?*

**Answer: Yes, drastically.** It is one of the most powerful strategies you can deploy to boost your search presence. 

Currently, your site ranks well for extremely targeted, specific queries (e.g., *"Best AI Engineer in Bangladesh"*). However, the search volume for those exact phrases has a statistical ceiling. Adding a native Blogging system (where you write technical Markdown articles rendered seamlessly into your UI) provides the following massive advantages:

1. **Capturing Long-Tail Global Traffic:** By publishing technical deep-dives (e.g., *"How to build offline LLMs for Android using Gemini Nano"* or *"Scaling Flutter Apps with AES-256 Encryption"*), you start capturing thousands of developers and tech recruiters globally who are typing those specific technical problems into Google entirely independent of the keyword "Bangladesh".
2. **Skyrocketing Domain Authority:** High-quality, original technical blogs organically earn backlinks from Reddit, HackerNews, Medium, and other developer blogs. Google interprets these backlinks as "Domain Authority", which lifts the ranking weight of your entire website (including your primary "Hire Me" pages).
3. **The "Freshness" Algorithm Factor:** Google's crawling algorithms heavily reward active domains. A static portfolio gets crawled rarely. A portfolio that publishes a new blog post every two weeks signals to Google that the entity is highly active, prominent, and relevant, leading to much faster indexing and preferred placement.
4. **The Conversion Funnel:** A blog post allows perfectly contextual internal linking. *E.g., "See how I solved this scaling issue? [Hire my Enterprise AI Consultation Services to scale yours]." *

**Recommendation:** We should add *"Build Markdown Blog Engine"* to the end of the Phase 2 Task List. It will be an absolute game-changer for your organic inbound lead flow.
