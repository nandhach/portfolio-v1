import { LocalProject } from "@/common/types/projects";

// Public summaries; detailed bilingual case studies live in projects/{en,id}/.
export const projects: LocalProject[] = [
  {
    id: 1,
    slug: "fms",
    order: 1,
    is_show: true,
    is_featured: true,
    stacks: [
      "JavaScript",
      "React.js",
      "Webpack",
      "TailwindCSS",
      "Axios",
      "Vitest",
      "Docker",
    ],
    translations: {
      en: {
        title: "FMS — Fleet Management System",
        description:
          "Individual final project: modular fleet-management frontend, shared API integration, SSE, and limited-connectivity PWA support. Internal academic demonstration.",
      },
      id: {
        title: "FMS — Fleet Management System",
        description:
          "Tugas akhir individual: frontend manajemen armada modular, integrasi API bersama, SSE, dan dukungan PWA untuk koneksi terbatas. Demo akademik internal.",
      },
    },
  },
  {
    id: 2,
    slug: "spectra",
    order: 2,
    is_show: true,
    is_featured: true,
    stacks: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Supabase"],
    translations: {
      en: {
        title: "Spectra",
        description:
          "Sole frontend developer in a two-person freelance team. Deployed assessment platform accepted by the client, used at two annual events for approximately 100 participants.",
      },
      id: {
        title: "Spectra",
        description:
          "Satu-satunya frontend developer dalam tim freelance dua orang. Platform ujian di-deploy, diterima klien, digunakan pada dua event tahunan untuk sekitar 100 peserta.",
      },
    },
  },
  {
    id: 3,
    slug: "ride-hailing",
    order: 3,
    is_show: true,
    is_featured: false,
    stacks: [
      "React.js",
      "TypeScript",
      "Vite",
      "TanStack",
      "Axios",
      "Socket.IO",
      "Leaflet",
    ],
    translations: {
      en: {
        title: "Ride-hailing",
        description:
          "Sole web-frontend contribution in a four-person internship team: typed REST workflows, ride maps, and Socket.IO integration. Local internal-testing MVP.",
      },
      id: {
        title: "Ride-hailing",
        description:
          "Kontribusi sebagai satu-satunya frontend web dalam tim magang empat orang: alur REST typed, peta perjalanan, dan integrasi Socket.IO. MVP pengujian internal lokal.",
      },
    },
  },
  {
    id: 4,
    slug: "nkri",
    order: 4,
    is_show: true,
    is_featured: false,
    stacks: [
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "NextAuth.js",
      "Style Dictionary",
      "IndexedDB",
    ],
    translations: {
      en: {
        title: "NKRI",
        description:
          "Internship contributions to an internal communication prototype: design tokens, OTP/authentication UX, browser media, and conversation management.",
      },
      id: {
        title: "NKRI",
        description:
          "Kontribusi magang pada prototype komunikasi internal: design token, UX OTP/autentikasi, media browser, dan pengelolaan percakapan.",
      },
    },
  },
  {
    id: 5,
    slug: "chat-app",
    order: 5,
    is_show: true,
    is_featured: false,
    stacks: ["Next.js", "React.js", "TypeScript", "Convex", "Clerk", "Svix"],
    translations: {
      en: {
        title: "Chat App",
        description:
          "Individual learning project with Convex data/functions, Clerk/Svix identity synchronization, friend requests, and reactive direct messaging. Local-only.",
      },
      id: {
        title: "Chat App",
        description:
          "Proyek belajar individual dengan data/function Convex, sinkronisasi identitas Clerk/Svix, permintaan pertemanan, dan pesan langsung reaktif. Lokal saja.",
      },
    },
  },
];
