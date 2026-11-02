# Ride-Hailing Admin Dashboard

> **A ride-hailing operations dashboard that brings data management, map-based trip visualization, and real-time activity monitoring into a unified web interface.**

**Internship Project** · **Frontend Web Developer** · **August–December 2025**

`TypeScript` · `Axios` · `TanStack Query` · `Zustand` · `Leaflet` · `Socket.IO` · `Zod`

---

## 🎯 Project Overview

Ride-Hailing Admin Dashboard is an administrative web application developed during my internship at **PT. Piramida Teknologi Informasi**. The application was designed to support ride-hailing operations, covering user information, trip monitoring, and driver location visualization.

Development focused on connecting backend services with an informative, interactive interface capable of responding to real-time updates.

## 👨‍💻 My Role & Contributions

I served as the **sole Frontend Web Developer** in a four-person team, collaborating with two Backend/API Developers and one Mobile Frontend Developer.

My responsibilities included building administrative interfaces, managing application state, integrating REST APIs, and implementing interactive maps and real-time communication. Backend services and the mobile application were developed independently by other team members.

## ⚙️ Key Implementations

### 🔗 API Integration & State Management

- **Type-safe API integration:** Defined TypeScript domain and response models to maintain consistent data structures across frontend–backend boundaries.
- **Authentication & sessions:** Built a centralized Axios configuration with JWT injection and automatic session cleanup on `401` responses.
- **Server-state management:** Used TanStack Query for data fetching, pagination, filtering, loading states, and cache invalidation after mutations.
- **Client-state management:** Implemented Zustand to manage local application state independently of server-managed data.

### 📝 Administrative Interfaces & Data Validation

- **Account management:** Developed administrative views for accessing and displaying user account information.
- **Driver forms:** Built interfaces for driver information, identity documents, and vehicle details.
- **Structured validation:** Integrated React Hook Form and Zod to validate form inputs, including Indonesian phone numbers and administrative data fields.

### 🗺️ Trip Visualization & Interactive Maps

- **Trip details:** Developed interfaces presenting trip participants, fares, lifecycle status, and route context.
- **Location mapping:** Used Leaflet to visualize pickup points, destinations, and driver locations on interactive maps.
- **Route handling:** Implemented straight-line fallbacks when road geometry was unavailable and managed map instance cleanup throughout the component lifecycle.

### ⚡ Real-Time Communication

- **Socket.IO integration:** Established authenticated Socket.IO integration to consume backend events.
- **Location updates:** Connected driver-location events to their corresponding trip detail views.
- **Notification synchronization:** Mapped server events into frontend notification state to support updates without manual refreshes.

## 📈 Results & Development Status

> **Rider & Passenger Monitoring MVP · Local Internal Testing**

The completed MVP focused on **rider and passenger monitoring**. REST API workflows and Socket.IO-based location and notification updates were successfully exercised end-to-end with the backend during local internal testing.

Additional administrative interfaces were also implemented on the frontend, although not all were part of the completed MVP scope.

**Project status:** The application ran in a local development environment and was never deployed to production. Some chart visualizations still used sample data, notification presentation remained limited, and comprehensive automated test coverage was not established.

## 💡 Engineering Takeaways

This project strengthened my ability to **design type-safe API integrations, manage server and client state, and coordinate REST workflows with real-time events**.

Implementing trip maps also provided hands-on experience with geospatial data, component lifecycle management, and event-driven location updates.

Working across dedicated web, mobile, and backend responsibilities reinforced the importance of consistent API contracts, explicit loading/error handling, and cross-platform integration.
