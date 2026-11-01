## Context and role

Chat App is an individual learning project I built for my portfolio. I implemented the application myself, including Convex schemas/functions, Clerk/Svix synchronization, friend requests, direct messaging, and UI/provider integration. It uses Next.js, React, and TypeScript.

## Data model and identity synchronization

I modeled users, requests, friendships, conversations, memberships, and messages in Convex, with indexes for identity and relationship lookups. Conversation previews reference the latest message.

I integrated Clerk authentication with Convex providers. A Convex HTTP action verifies raw identity lifecycle events using Svix signatures, then creates or updates application-owned user records through internal persistence functions. The flow handles creation and updates, not a complete deletion lifecycle.

## Friend requests and reactive messages

Friend-request logic rejects self-requests, duplicates, existing friendships, and other invalid request states. Acceptance checks the receiver and creates the direct conversation, friendship, and two memberships within one Convex mutation.

Direct-message reads and sends resolve the authenticated user and check conversation membership. Reactive Convex queries update messages and conversation data without custom polling or WebSocket code. The UI includes pending-send controls, mutation feedback, and keyboard submission behavior.

## Result and limitations

I consider the learning project complete, but it ran only locally and was never deployed. The implementation demonstrates relationship transitions, identity synchronization, and reactive direct messaging; it is not a production-readiness claim.

The retained checkout has TypeScript/lint issues, no automated application tests, and unfinished group/read-state flows. Message history is not paginated, and authorization is not comprehensive across all mutations. These boundaries remain relevant even where the main messaging path is implemented.

## Learning

The project connects managed authentication, verified identity events, indexed data, server mutations, and reactive UI. It also highlights the difference between implementing the main workflow and validating every lifecycle, authorization, and reliability edge case.
