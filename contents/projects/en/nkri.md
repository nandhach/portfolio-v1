## Context and role

NKRI is an internal prototype for Indonesian community communication, including neighborhood contexts. I contributed as a Frontend Developer during my January–June 2025 internship at PT. Mitra Informatika, continuing an existing team project. That work period is not the application's inception date.

My individual contributions covered design tokens, OTP/authentication UX and temporary cookies, webcam capture/cropping/preview, contacts, group-profile interfaces, and room filtering.

## Design-token pipeline

I built a Style Dictionary pipeline from JSON tokens to CSS custom properties and semantic Tailwind utilities, then migrated authentication and communication interfaces to token-backed styling. This provides a repeatable path from shared visual primitives to application components.

## Authentication and browser media

I implemented the frontend/server-action portion of passwordless onboarding: API-integrated login/registration, OTP verification states, resend/error handling, temporary HTTP-only cookies, NextAuth session hydration, and profile-completion routing. The backend OTP service was outside my implementation scope.

For image messages, I connected webcam capture to canvas-based cropping and preview state. I also built contact-management, group-profile, and room-filtering interfaces around the conversation surface.

## Collaboration boundaries

I contributed to IndexedDB and voice/video/document-upload modules at a broad module level; this is not a claim of sole ownership of every subfeature or the generic upload engine. Connection-status indicators and related chat changes involved logic discussions and pair programming.

WebRTC, the socket protocol, and Firebase Cloud Messaging were implemented by another team member. They are application capabilities, not my personal implementation claims.

## Status and learning

The prototype was used only for research and internal testing, with no production or external-user claim. This work brought together semantic styling, API-backed session flows, browser media, and collaborative state changes. A key lesson was to distinguish a complete user interaction from the multiple independently owned layers supporting it.
