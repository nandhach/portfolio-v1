## Context and role

During my Frontend Developer internship at PT. Piramida Teknologi Informasi, August–December 2025, I worked on a ride-hailing application's administrative web frontend.

The team had four people: two backend/API developers, one mobile-frontend developer, and me as the sole web-frontend developer. I implemented web pages, frontend behavior, and backend data fetching. Backend/API and mobile implementation were separate responsibilities.

## Typed integration and operational workflows

I built TypeScript domain/response models and a shared Axios transport with JWT injection and `401` session cleanup. Endpoint-specific services feed TanStack Query list/detail flows with loading states, pagination, filters, and mutation-driven cache invalidation. Zustand manages client-side state.

I implemented account views and driver forms using React Hook Form and Zod, including Indonesian phone, identity-document, and vehicle-field validation. These are implemented frontend surfaces; they should not all be read as the completed MVP's scope.

## Ride maps and real-time events

Ride detail interfaces present participants, fare, lifecycle, and route context. Leaflet renders pickup/drop-off and driver locations; road geometry has a straight-line fallback, and map instances are cleaned up through the component lifecycle.

I integrated authenticated Socket.IO events into notification state and matching driver-location updates on ride details. REST workflows and Socket.IO location/notification flows ran end-to-end against the separately developed backend during local internal testing.

## Result and status

The completed MVP was limited to monitoring riders and passenger. It ran locally for internal testing and was never deployed. This does not establish production reliability or delivery of every administrative feature in the repository.

## Limitations and learning

Some chart series remain sample data, and notification presentation is limited. Automated runtime coverage is not established. The work emphasized typed API boundaries, explicit loading/error states, and careful mapping between REST data, event payloads, and interface state.
