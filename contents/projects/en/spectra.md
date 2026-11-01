## Context and role

Spectra is a freelance computer-based assessment platform for an accounting competition. It provides participant exams and administrator workflows for questions, progress monitoring, and scores.

I was the sole frontend developer in a two-person team, responsible for all frontend UI and frontend-side logic. My teammate implemented the backend and server-side logic, including scoring and persistence. The platform was used for Spectra 2025 and Spectra 2026; those are event editions, not an assumed contract start/end period.

## Participant assessment experience

Using Next.js, React, TypeScript, and Tailwind CSS, I built login/registration and participant quiz interfaces. React Context and browser storage preserve answer state and a stable question order within a browser session. User-scoped answers are hydrated after refresh or login so participants can resume their work.

I implemented countdown and manual/deadline submission UX integrated with the server submission flow. Submission and scoring on the server remain outside my implementation scope.

## Administrator interfaces and integration

I built question-bank, monitoring, scores, and score-card interfaces, plus shared admin/participant UI and event-specific redesigns requested by the client. The monitoring interface supports progress visibility and filtering.

On the participant side, I handled Supabase Realtime events that connect an administrative intervention to the forced-completion UX. This frontend integration does not imply ownership of the database mutation or backend enforcement.

## Results

The deployed platform was accepted by the client and used at two annual events for approximately 100 participants. It helped the committee manage questions and participant scores; system ordering replaced manual score ordering. Maintenance was performed when the client encountered problems.

## Boundaries and learning

This was shared delivery with a clear frontend/backend split. Local integration reports support particular submission and intervention paths, not exhaustive production reliability or personal ownership of test execution. The project reinforced the need to coordinate browser state, timed interactions, and backend contracts without moving grading authority into the client.
