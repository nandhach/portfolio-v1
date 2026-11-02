# Chat App

> **A web-based instant messaging application combining modern authentication, friendship management, and real-time conversations through a reactive backend architecture.**

**Personal Project** · **Full-stack Developer** · **Learning Project**

`Next.js` · `React` · `TypeScript` · `Convex` · `Clerk` · `Svix`

---

## 🎯 Project Overview

**Chat App** is a personal project I developed to explore real-time communication applications using a modern full-stack technology stack.

The application enables users to **manage friendships, exchange friend requests, and communicate through direct messages** within a web interface powered by a reactive backend.

Beyond messaging functionality, the project focuses on **relationship modeling, user identity synchronization, conversation access control, and consistent data mutations**.

## 👨‍💻 My Role & Contributions

As the **sole developer**, I designed and implemented the application's core workflows, from database schemas and backend functions to authentication and frontend integration.

My responsibilities included:

- **Database architecture:** Designing application schemas and data relationships using Convex.
- **Authentication integration:** Connecting Clerk authentication with Convex and implementing webhook-based identity synchronization.
- **Friendship workflows:** Building friend-request validation, acceptance, and relationship creation.
- **Real-time messaging:** Implementing direct conversations through reactive queries and Convex mutations.
- **Frontend integration:** Connecting authentication state, conversation data, and user interactions across the application.

## ⚙️ Key Implementations

### 🗃️ Data Modeling & Relationship Management

I designed the application's data structure using **Convex**, establishing relationships between user identities and communication entities.

- **Relational data modeling:** Modeled users, friend requests, friendships, conversations, conversation memberships, and messages.
- **Indexed queries:** Defined indexes to support structured identity lookups and relationship queries.
- **Conversation previews:** Linked conversation previews to their latest messages to provide recent communication context.
- **Server-side mutations:** Managed application data changes and relationship transitions through Convex backend functions.

This structure keeps business rules separate from presentation components while supporting consistent data operations.

### 🔐 Authentication & Identity Synchronization

I integrated **Clerk as the authentication provider** with Convex as the application's reactive backend and data layer.

- **Authentication providers:** Connected Clerk authentication sessions with Convex providers to establish authenticated application context.
- **Webhook verification:** Implemented a Convex HTTP action that validates incoming identity lifecycle events using Svix signatures.
- **User synchronization:** Created or updated application-owned user records based on verified identity events.
- **Controlled persistence:** Routed user data changes through internal backend persistence functions.

The synchronization flow supports user creation and updates, while a complete identity-deletion lifecycle remains outside the implemented scope.

### 🤝 Friend Requests & Relationship Workflows

I implemented server-side friendship workflows with validation rules designed to preserve relationship consistency.

- **Request validation:** Rejected self-requests, duplicate requests, existing friendships, and other invalid request states.
- **Authorized acceptance:** Verified that only the intended recipient could accept a friend request.
- **Atomic relationship creation:** Created the friendship, direct conversation, and two membership records within a single Convex mutation.
- **Consistent transitions:** Managed the transition from a pending friend request into an established relationship with an accessible conversation.

Grouping related changes into one mutation helps ensure consistent relationship data during request acceptance.

### 💬 Reactive Direct Messaging

> **Reactive Queries · Membership Validation · No Custom Polling**

I built direct-messaging workflows using **Convex reactive queries**, allowing conversation interfaces to respond automatically to backend data changes.

- **Reactive data fetching:** Used reactive queries to update messages and conversation information without implementing custom polling or WebSocket handling.
- **Conversation authorization:** Resolved authenticated users and verified conversation membership before allowing direct-message reads or sends.
- **Message interactions:** Built sending interfaces with pending states, mutation feedback, and keyboard submission support.
- **Conversation synchronization:** Connected backend data changes to conversation views without requiring manual page refreshes.

This implementation demonstrates how backend mutations and reactive data subscriptions can support the core messaging experience.

## 📈 Results & Development Status

> **Core Direct Messaging Completed · Reactive Backend · Local Testing**

The project successfully implemented its primary direct-communication workflows, including **authentication, identity synchronization, friend requests, conversation creation, and reactive messaging**.

Integrating Clerk, Svix, and Convex provided hands-on experience connecting external identity services with application-owned data and building interfaces driven by backend changes.

**Project status:** I consider the project complete within its intended learning scope. The application was developed and tested locally and has never been deployed to production.

### 🔍 Areas for Future Improvement

Several areas require further development before the application could be considered production-ready:

- **Quality assurance:** Resolve remaining TypeScript/lint issues in the retained checkout and introduce automated application tests.
- **Message scalability:** Add pagination for conversation history.
- **Authorization hardening:** Expand authorization checks across all relevant mutations.
- **Feature completion:** Complete group messaging, read-state workflows, and the identity-deletion lifecycle.

## 💡 Engineering Takeaways

Chat App strengthened my understanding of **managed authentication integration, verified webhooks, relational data modeling, and reactive frontend development**.

A key lesson was the importance of **maintaining consistent server-side business rules and data transitions**, especially when a single user action affects multiple related entities.

The project also highlighted the distinction between completing a functional core workflow and establishing production readiness through comprehensive testing, authorization coverage, and edge-case handling.
