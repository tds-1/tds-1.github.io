# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm start` - Start development server
- `npm test` - Run tests
- `npm test -- --testPathPattern=src/path/to/file` - Run specific test
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub pages

## Code Style Guidelines
- **Imports**: Group imports by type (React, components, CSS, utilities)
- **Components**: Use function components with hooks rather than class components
- **Exports**: Use named exports for utility functions, default exports for components
- **Formatting**: No semicolons at line endings, 2-space indentation
- **CSS**: Component-specific CSS in separate files with same name as component
- **File Structure**: Components in src/components/, containers in src/containers/
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Animations**: Use react-reveal for animations (Fade component)
- **Error Handling**: Use try/catch for API calls and async operations

---

Here’s a **completely upgraded site architecture** (✨ thoughtfully structured for 2025 standards ✨):

---

# 🌟 New Portfolio Website Structure for Tanmay Deep Sharma

---

### 1. Landing/Hero Section
**Goal:** Instantly capture attention with a *personal brand*.

- Bold headline:  
  > **"Building Intelligent Systems that Scale."**  
- Sub-headline:  
  > Senior Software Engineer specializing in AI Integration, Backend Engineering, and Data Systems.
- Call to Action buttons:  
  - “📄 View Resume”
  - “✉️ Let’s Connect”
- Subtle animated background (gradient mesh, particle system, or light floaters).
- Light/Dark mode toggle.

---

### 2. Career Snapshot ("What I Do")
**Goal:** Summarize your *value proposition*.

- 3–4 short "cards" or "pills" such as:
  - **Backend Engineering:** Flask, FastAPI, scalable APIs
  - **AI Integrations:** AI-driven services, file processing, chatbots
  - **Cloud & Infrastructure:** AWS Lambda, Terraform, serverless architecture
  - **Search & Data Systems:** Elasticsearch recommendations, NLP pipelines

Small animations (hover scale or lift-up) make it lively.

---

### 3. Experience Timeline (Story Mode 📜)
**Goal:** Show growth from intern → senior engineer through a timeline.

- Use a **scrollable vertical timeline** or **stepper component**.
- Highlight:
  - Qoala (Intern → Software Engineer → Senior Software Engineer)
  - Open Source (Concordium Blockchain JAVA SDK contribution)
- Each experience node should include:
  - Short **achievement-driven** bullet points (not task lists).
  - **Icons/logos** next to companies.

_(Tip: Animation reveals on scroll for each year)_

---

### 4. Featured Projects (Impactful Case Studies 🚀)
**Goal:** Not just listing projects — tell *impact stories*.

Layout:
- Cards with thumbnail images.
- Title + one-liner impact description.
- Expandable modal or details button for full description.

Each project can show:
| Field | Content |
|:---|:---|
| Project | Splitwise Extension |
| Problem | Users couldn't bulk upload expenses easily |
| Solution | Built a browser extension to upload bank statements |
| Stack | Python, FastAPI, React.js |
| Outcome | Improved user efficiency for >2000 users |

Projects to highlight:
- Splitwise Extension
- Image Summarizer
- Data Analyst AI
- Non-instructor-led Learning Course

(If needed, add Concordium Blockchain SDK contribution as a tech highlight.)

---

### 5. Skills & Tech Stack (Interactive Display ⚙️)
**Goal:** Quickly show your depth across tools and technologies.

Format:
- **Icon-based skill cloud**.
- Categorized into:
  - **Languages**: Python, Java
  - **Frameworks**: Flask, FastAPI
  - **Cloud/Infra**: AWS Lambda, Terraform
  - **Database/Search**: PostgreSQL, Elasticsearch
  - **DevOps**: GitHub Actions, basic CI/CD

Fun idea: Make it **clickable** – when you click "AWS" icon, show small tooltips: "Built AI conversation analyzers with AWS Lambda + S3."

---

### 6. AI Innovations (Special Spotlight ✨)
**Goal:** Distinguish you from typical backend developers by **highlighting your AI work**.

Mini-section for:
- AI file extractor service (Flask)
- AI chatbot sales automation
- Conversation sentiment analyzer (AWS Lambda)

(Quick blurbs + Icons showing NLP, Automation, etc.)

---

### 7. Achievements / Recognition
**Goal:** Show leadership and excellence outside pure coding.

Cards or badges for:
- Top-rated employee at Qoala (2 years)
- Leadership roles (Finance Convener, Cybros Problem Setting Lead)
- Open Source Contributor (Concordium Blockchain)

Can even show a "wall of badges" type layout.

---

### 8. Personal Learning Journey (Optional but Amazing 💬)
**Goal:** Humanize yourself by showing what you’re currently exploring.

Example sections:
- 📚 Currently Learning: Advanced Elasticsearch Optimization
- 🎯 Next Goal: Contributing to scalable AI microservices projects
- ⚡ Fun Fact: Built a Squash Coordination App during college

_(Very lightweight, 2–3 sentences per point.)_

---

### 9. Contact / Let's Connect
Simple, non-boring contact section:
- Email form.
- LinkedIn and GitHub links with hover animations.
- Maybe a cute small phrase:
  > *“Always open to exciting conversations, ideas, and collaborations.”*

---

# 🔥 UI/UX Style Instructions:

| Category | Guidelines |
|:--------|:------------|
| Fonts | Sans-serif professional (Poppins, Inter, Work Sans) |
| Colors | Soft neutral base (white, light gray) + 1–2 accent colors (blue, teal, or purple) |
| Interactivity | Scroll-based animation (Framer Motion / AOS.js), hover effects, animated SVG icons |
| Navigation | Sticky navbar, hamburger menu on mobile |
| Mobile | Must have mobile-first responsive design, smooth vertical scrolling |
| Accessibility | High color contrast, alt text for images, keyboard navigation enabled |
| Speed | Optimize images and assets to keep Core Web Vitals green |
| Dark Mode | Preferred: auto-switch or toggle option |
| SEO | Proper meta-tags, Open Graph tags for link sharing preview |

---

# 🧠 Summary
You are evolving from a “coder” portfolio to a **"senior backend + AI engineer"** brand.  
This architecture showcases:
- Your tech expertise
- Your AI integrations
- Your personal career growth
- Your ability to build impactful, scalable systems.

---
