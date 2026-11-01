# Spectra

> **A digital examination platform for accounting competitions—bringing a structured testing experience together with streamlined progress monitoring and results management.**

**Freelance project** · **Frontend Developer** · **Spectra 2025 & 2026**

`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `Supabase Realtime`

---

## 🎯 Project Overview

Spectra is a computer-based testing (CBT) platform built for accounting competitions. Participants take their exams through a web interface, while organizers use an administrator dashboard to manage questions, monitor progress, and review assessment results.

## 👨‍💻 My Role & Contributions

As the **sole frontend developer** in a two-person team, I owned the frontend interfaces and client-side logic across both the participant experience and administrator dashboard. My teammate built the backend, including answer submission processing, scoring, and data persistence.

## ⚙️ Key Implementations

### 📝 Participant Exam Experience

- **Participant flow:** Built registration, login, and exam-taking interfaces.
- **Session continuity:** Used React Context and browser storage to preserve answers and consistent question ordering. Answers were scoped by user and restored after a refresh or login in the same browser.
- **Time-sensitive interactions:** Implemented countdown behavior and the experience for manual and deadline-triggered submission, integrated with the backend submission flow.

### 🗂️ Administrator Dashboard & Realtime

- **Exam management:** Built interfaces for the question bank, filtered progress monitoring, scores, and participant scorecards.
- **Shared UI:** Developed reusable interfaces for participants and administrators, with event-specific design adjustments requested by the client.
- **Realtime integration:** Handled Supabase Realtime events on the participant side to reflect administrator-triggered exam completion. Server-side enforcement and data updates remained the backend's responsibility.

## 📈 Results & Impact

> **2 competition editions · ~100 participants combined**

The platform was deployed, accepted by the client, and used for **Spectra 2025 and Spectra 2026**. The interfaces supported question management, participant monitoring, and access to assessment results. System-based score ordering also replaced manual sorting. I provided frontend maintenance when the client reported issues.

## 💡 Engineering Takeaways

This project strengthened my understanding of **browser-state coordination, time-sensitive exam interactions, and realtime integration**. Working in a small team also highlighted the importance of clear frontend–backend contracts—especially when submission processing and grading authority must remain on the server.
