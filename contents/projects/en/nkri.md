# NKRI

> **A community communication prototype that brings digital conversations, contact management, and interactive messaging experiences into a unified web platform for Indonesian communities.**

**Internship Project** · **Frontend Developer** · **January–June 2025**

`Next.js` · `NextAuth` · `TypeScript` · `Tailwind CSS` · `Style Dictionary` · `IndexedDB` · `Canvas API`

---

## 🎯 Project Overview

**NKRI** is a digital communication prototype designed to support interactions within Indonesian communities, including neighborhood-level environments such as RT/RW. The application brings together messaging, contact management, group communication, and media-sharing capabilities.

Developed as an internal project at **PT. Mitra Informatika**, the platform served as an environment for exploring web-based communication experiences and integrating browser technologies.

## 👨‍💻 My Role & Contributions

I joined the existing development team as a **Frontend Developer Intern**, contributing to an application that was already under development.

My work focused on **design-token architecture, authentication experiences, browser-based media interactions, and communication interface improvements**.

Alongside independently implemented features, I collaborated with teammates through technical discussions and pair programming to integrate additional application capabilities.

## ⚙️ Key Implementations

### 🎨 Design System & Token Architecture

- **Design-token pipeline:** Built a Style Dictionary pipeline to transform JSON-based design tokens into CSS custom properties and semantic Tailwind utilities.
- **Visual consistency:** Migrated authentication and communication interfaces to token-based styling for more consistent visual implementation.
- **Reusable styling foundation:** Established a shared approach to styling that reduces repeated design values across application components.

### 🔐 Passwordless Authentication & Session Flow

- **OTP-based authentication:** Implemented API-integrated passwordless login and registration interfaces.
- **Verification experience:** Developed OTP verification states, resend interactions, and error handling to provide clear feedback throughout authentication.
- **Session management:** Integrated server actions, temporary HTTP-only cookies, and NextAuth session hydration into the authentication flow.
- **Profile completion:** Implemented navigation logic based on profile-completion requirements after authentication.

My responsibilities covered the frontend and supporting server actions, while the backend OTP service was implemented separately.

### 📸 Browser Media & Image Interaction

- **Webcam capture:** Integrated browser camera access to capture images directly from the user's device.
- **Canvas-based cropping:** Implemented image cropping with the Canvas API to prepare captured images for messaging interactions.
- **Image preview:** Managed preview state to let users review captured and cropped images before continuing.

### 💬 Communication Interfaces & Collaboration

- **Contact management:** Built contact-management interfaces to support user navigation and communication workflows.
- **Group profiles:** Developed group-profile interfaces as part of the community messaging experience.
- **Conversation filtering:** Implemented room-filtering functionality to help users navigate relevant conversations.
- **Collaborative development:** Contributed to IndexedDB modules and voice, video, and document-upload functionality alongside teammates.
- **Connection awareness:** Participated in logic discussions and pair programming for connection-status indicators and related chat interface changes.

WebRTC, the socket protocol, and Firebase Cloud Messaging were implemented by other team members as part of the broader application.

## 📈 Results & Development Status

> **Internal Prototype · Feature Exploration · Internal Testing**

My contributions delivered frontend interfaces and integrations supporting the exploration of community communication workflows, including:

- **Token-based styling** for consistent visual implementation across interfaces.
- **API-integrated authentication flows** with OTP verification and session management.
- **Browser-based image interactions** covering capture, cropping, and preview.
- **Communication interfaces** for contacts, group profiles, and conversation filtering.

**Project status:** NKRI remained a research and internal-testing prototype, with no established production deployment or external-user adoption.

## 💡 Engineering Takeaways

This project expanded my experience in **building design-system foundations, integrating API-backed authentication, and leveraging native browser capabilities for multimedia interactions**.

It also deepened my understanding of communication applications, where multiple technologies and interconnected state layers contribute to a single user experience.

Working within an existing codebase reinforced the importance of **understanding established architecture, maintaining implementation consistency, and collaborating across clearly defined responsibilities** to deliver cohesive frontend experiences.
