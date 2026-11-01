## Context and role

FMS is my individual final project at Politeknik Elektronika Negeri Surabaya (PENS), with an official project period of June 2025–June 2026. It explores an electric-vehicle operational-management frontend using a Progressive Web App and modular-monolith architecture. The application covers fleet visibility, route planning, drivers, vehicles, schedules, stops, and access control.

My work covered frontend architecture, host integration, variant automation, shared API boundaries, live-state handling, PWA caching, runtime theming, tests, architecture experiments, and Docker/Nginx packaging. This case study describes that scope, not ownership of the connected backend.

## Modular development, one production host

I separated the workspace into a host, seven domain packages, and a shared package. Development uses Webpack Module Federation so enabled domain applications can run separately or within the host. Production aliases enabled domain source into one host build, without runtime `remoteEntry.js` dependencies.

I also built configuration-driven variant tooling. Validation checks module dependencies and required configuration before generators synchronize navigation, registries, provider gates, production aliases, and PWA assets. Disabled modules are excluded from build and PWA wiring, rather than simply hidden in the interface.

## Shared integration and live state

I centralized REST and SSE transport, response normalization, fallbacks, services, and cross-domain facades in a shared frontend layer. Screens consume stable frontend models instead of parsing backend payloads themselves.

For live fleet state, I implemented snapshot hydration before streaming, identifier-based update merging, abort/cleanup, bounded reconnect behavior, and explicit connection states. IndexedDB preserves last-known vehicle data. The host's service worker provides an offline shell, navigation fallback, and selective caching; it does not provide full offline CRUD or background synchronization.

Runtime theme tokens use validation and baseline/cached fallbacks. Docker packages the static production host for Nginx delivery.

## Results and validation

The final-project assessment was completed and passed. Scoped integration tests, builds, and manual smoke checks were recorded. I also designed, ran, and analyzed repeatable architecture experiments across three variants, checking development-process readiness, production source consolidation, excluded modules, and generated-asset consistency.

Those results support the tested architecture behavior; they do not establish universal performance superiority, all-route coverage, or production-fleet reliability.

## Status and learning

The application was deployed for an internal academic demonstration and pitching, not direct-user industrial operation. The central engineering lesson was to keep module boundaries, shared data contracts, and generated build artifacts consistent across development and production.
