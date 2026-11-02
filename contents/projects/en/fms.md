# Fleet Management System (FMS)

> **An electric-vehicle fleet management platform built as a Progressive Web App (PWA), combining a modular-monolith frontend architecture with fleet monitoring, operational workflows, and configurable application capabilities.**

**Individual Final Project** · **Frontend Developer & Architecture** · **June 2025–June 2026**

`PWA` · `Webpack Module Federation` · `REST API` · `Server-Sent Events` · `IndexedDB` · `Docker` · `Nginx`

---

## 🎯 Project Overview

**Fleet Management System (FMS)** is my individual final-year project at **Politeknik Elektronika Negeri Surabaya (PENS)**, exploring the development of a web-based operational management platform for electric-vehicle fleets.

The application covers essential fleet operations, including **vehicle monitoring, route planning, driver and vehicle management, scheduling, stop management, and user access control**.

Beyond implementing application features, the project focuses on designing a **modular frontend architecture** that supports independent domain development, configuration-driven feature selection, and consolidated production delivery.

## 👨‍💻 My Role & Contributions

As the individual developer, I was responsible for the **frontend architecture and implementation**, covering modular application structure, cross-domain integration, real-time data handling, build automation, and deployment packaging.

My primary responsibilities included:

- **Frontend architecture:** Designing modular boundaries and integrating domain applications through a central host.
- **Build automation:** Developing configuration-driven tooling to manage application variants and generate build configuration.
- **Data integration:** Establishing shared REST API and Server-Sent Events (SSE) integration layers.
- **PWA & offline capabilities:** Implementing selective caching, local data persistence, and connectivity fallbacks.
- **Architecture validation:** Designing experiments and tests to evaluate architectural behavior across multiple application configurations.

The connected backend was developed separately and was not part of my individual implementation scope.

## ⚙️ Key Implementations

### 🧩 Modular Monolith & Microfrontend Development

> **1 Host Application · 7 Domain Packages · 1 Shared Package**

I structured the frontend workspace into **one central host, seven domain packages, and a shared package**, establishing clear boundaries between application capabilities.

- **Independent development:** Used Webpack Module Federation to allow enabled domain applications to run independently or within the central host.
- **Unified production build:** Consolidated enabled domain source code into a single production host build.
- **Runtime independence:** Removed production runtime dependencies on `remoteEntry.js` through source-level aliasing.
- **Shared architecture:** Centralized cross-domain functionality within a shared package to maintain consistent integration patterns.

This approach combines modular development flexibility with a consolidated production application.

### 🛠️ Configuration-Driven Variant Automation

I developed configuration-driven tooling to generate application variants based on selected modules and capabilities.

- **Module configuration:** Controlled domain activation through configuration rather than scattered manual changes.
- **Dependency validation:** Verified module dependencies and required configuration before running generation steps.
- **Automated synchronization:** Generated and synchronized navigation, module registries, provider gates, production aliases, and PWA assets.
- **Build-level exclusion:** Excluded disabled modules from build and PWA wiring rather than merely hiding their interfaces.

The resulting workflow helps keep development and production configurations aligned across application variants.

### 🔗 Shared API Integration & Data Contracts

To minimize duplicated integration logic, I established a shared frontend layer responsible for communication with backend services.

- **Centralized transport:** Consolidated REST API and SSE communication.
- **Response normalization:** Transformed backend payloads into consistent frontend models before exposing them to components.
- **Service abstraction:** Organized domain services and cross-domain facades behind structured integration contracts.
- **Fallback handling:** Implemented fallback behavior for supported integration scenarios.

This separation allows UI components to consume stable application models without directly interpreting backend response structures.

### 📡 Real-Time Fleet Monitoring & Offline Support

I implemented vehicle-state management combining **initial snapshots, SSE-driven updates, and local persistence**.

- **Snapshot hydration:** Loaded initial vehicle data before establishing the live update stream.
- **Incremental updates:** Merged incoming vehicle updates by identifier to maintain consistent frontend state.
- **Connection lifecycle:** Managed abort handling, cleanup, bounded reconnection, and explicit connection states.
- **Local persistence:** Used IndexedDB to retain last-known vehicle information.
- **PWA caching:** Implemented a service worker supporting an offline application shell, navigation fallbacks, and selective asset caching.

Offline support was intentionally scoped to the application shell and previously available vehicle data rather than full offline CRUD operations or background synchronization.

### 🎨 Runtime Theming & Production Packaging

Alongside application architecture and data integration, I implemented runtime presentation configuration and deployment packaging.

- **Runtime theme tokens:** Supported theme configuration with validation and baseline or cached fallbacks.
- **Consistent presentation:** Separated visual configuration from individual components for centralized theme management.
- **Containerized delivery:** Packaged the static production host using Docker and Nginx for application delivery.

## 🧪 Architecture Testing & Validation

> **3 Architecture Variants · Repeatable Experiments · Build & Integration Validation**

Beyond application development, I **designed, executed, and analyzed repeatable architecture experiments** across three configuration variants.

The evaluation focused on:

- **Development readiness:** Examining development-process behavior for enabled application modules.
- **Production consolidation:** Verifying the consolidation of domain source code into the production host build.
- **Module exclusion:** Checking that disabled modules were excluded from relevant build configurations.
- **Generated-asset consistency:** Validating alignment between generated assets and application configuration.

Additional validation included scoped integration tests, production builds, and manual smoke checks.

These results support the architecture's behavior within the evaluated scenarios, without implying universal performance superiority or comprehensive production reliability.

## 📈 Results & Project Status

> **Final Project Passed · Academic Demo Deployment · 3 Validated Variants**

FMS successfully completed its **final-project assessment and received a passing result**.

The frontend implementation established a modular application foundation supporting independent domain development, consolidated production builds, real-time fleet data integration, and configuration-driven feature selection.

The application was also deployed for **internal academic demonstrations and pitching**, supported by documented and analyzed architecture experiments.

**Project status:** FMS served research, academic evaluation, and demonstration purposes. It was not deployed as a live industrial fleet operation system for direct end users.

## 💡 Engineering Takeaways

FMS significantly expanded my experience in **designing modular frontend architectures, managing cross-domain integration complexity, and building configuration-driven automation tooling**.

One of the central engineering challenges was maintaining consistency between module boundaries, shared data contracts, and generated build artifacts across different development and production configurations.

The project also strengthened my understanding of **architectural trade-offs, real-time state management, PWA offline strategies, and experiment-driven technical validation**.
