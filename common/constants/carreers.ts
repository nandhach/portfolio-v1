import { Localized, getContentLocale } from "@/common/types/content";

interface ExperienceCopy {
  type: string;
  location_type: string;
  period?: string;
  responsibilities: string[];
  lessons_learned: string[];
  impact: string[];
}

interface Experience {
  id: string;
  position: string;
  company: string;
  logo?: string;
  link?: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  translations: Localized<ExperienceCopy>;
}

export const CAREERS: Experience[] = [
  {
    id: "piramida-internship",
    position: "Frontend Developer",
    company: "PT. Piramida Teknologi Informasi",
    logo: "/images/careers/piramida-teknologi-informasi.jpg",
    link: "https://www.piramidasoft.com/",
    location: "Surabaya, Indonesia",
    start_date: "2025-08",
    end_date: "2025-12",
    translations: {
      en: {
        type: "Internship",
        location_type: "Remote",
        responsibilities: [
          "Owned the web frontend in a four-person ride-hailing team; backend/API and mobile development were separate responsibilities.",
          "Built typed REST services, JWT session handling, query/cache flows, driver forms, ride views, and map interfaces.",
          "Integrated Socket.IO location and notification events with frontend state.",
        ],
        lessons_learned: [
          "Learned to organize typed API services, session handling, and query/cache flows around frontend needs.",
          "Developed experience synchronizing map interfaces and application state with real-time location and notification events.",
        ],
        impact: [
          "Delivered the web frontend for a local ride-hailing monitoring MVP in collaboration with backend and mobile teammates.",
          "REST and Socket.IO flows ran against the backend during internal testing. The application was never deployed.",
        ],
      },
      id: {
        type: "Magang",
        location_type: "Jarak jauh",
        responsibilities: [
          "Menangani seluruh frontend web dalam tim ride-hailing beranggotakan empat orang; backend/API dan mobile menjadi tanggung jawab anggota lain.",
          "Membangun service REST typed, penanganan sesi JWT, alur query/cache, form pengemudi, tampilan perjalanan, dan antarmuka peta.",
          "Mengintegrasikan event lokasi dan notifikasi Socket.IO dengan state frontend.",
        ],
        lessons_learned: [
          "Mempelajari penataan service API typed, penanganan sesi, serta alur query/cache sesuai kebutuhan frontend.",
          "Mengembangkan pengalaman menyelaraskan antarmuka peta dan state aplikasi dengan event lokasi serta notifikasi real-time.",
        ],
        impact: [
          "Menghasilkan frontend web untuk MVP lokal pemantauan ride-hailing bersama rekan tim backend dan mobile.",
          "Alur REST dan Socket.IO berjalan dengan backend saat pengujian internal. Aplikasi tidak pernah di-deploy.",
        ],
      },
    },
  },
  {
    id: "mitra-internship",
    position: "Frontend Developer",
    company: "PT. Mitra Informatika",
    logo: "/images/careers/mitra-informatika.jpg",
    link: "https://blog.mit.id/",
    location: "Surabaya, Indonesia",
    start_date: "2025-01",
    end_date: "2025-06",
    translations: {
      en: {
        type: "Internship",
        location_type: "On-site",
        responsibilities: [
          "Continued the NKRI internal prototype with the team, implementing a Style Dictionary design-token pipeline and semantic UI migration.",
          "Implemented OTP/authentication UX, temporary cookie handling, webcam capture, image cropping/preview, contacts, and group-profile interfaces.",
          "Contributed to IndexedDB and media-upload modules; discussed logic and pair-programmed connection-status and related chat changes.",
        ],
        lessons_learned: [
          "Learned to apply design tokens consistently while migrating an existing interface to semantic styling.",
          "Developed experience connecting authentication UX, browser media, and local persistence while coordinating integration boundaries through pair programming.",
        ],
        impact: [
          "Connected authentication, media preparation, and conversation-management flows in an internal research prototype for testing.",
          "Contributed frontend and browser-data modules alongside teammates responsible for WebRTC, the socket protocol, and FCM.",
        ],
      },
      id: {
        type: "Magang",
        location_type: "Di kantor",
        responsibilities: [
          "Melanjutkan prototype internal NKRI bersama tim, membangun pipeline design token Style Dictionary serta migrasi UI semantik.",
          "Mengimplementasikan UX OTP/autentikasi, penanganan cookie sementara, pengambilan gambar webcam, cropping/preview, kontak, dan profil grup.",
          "Berkontribusi pada modul IndexedDB dan upload media; berdiskusi tentang logika serta pair programming untuk status koneksi dan perubahan chat terkait.",
        ],
        lessons_learned: [
          "Mempelajari penerapan design token secara konsisten saat memigrasikan antarmuka yang sudah ada ke styling semantik.",
          "Mengembangkan pengalaman menghubungkan UX autentikasi, media browser, dan penyimpanan lokal sambil menyelaraskan batas integrasi melalui pair programming.",
        ],
        impact: [
          "Menghubungkan alur autentikasi, persiapan media, dan pengelolaan percakapan pada prototype riset internal untuk pengujian.",
          "Berkontribusi pada modul frontend dan data browser bersama rekan tim yang menangani WebRTC, protokol socket, dan FCM.",
        ],
      },
    },
  },
  {
    id: "spectra-freelance",
    position: "Frontend Developer",
    company: "Spectra",
    logo: "/images/careers/spectra.jpg",
    link: "https://www.instagram.com/spectra2026_/",
    location: "Bandung, Indonesia",
    translations: {
      en: {
        type: "Freelance",
        location_type: "Remote",
        period: "Used at Spectra 2025 and 2026",
        responsibilities: [
          "Owned frontend UI and frontend-side logic in a two-person team; a teammate owned backend/server implementation.",
          "Built participant quiz, login/registration, question-bank, monitoring, and scores interfaces, including event-specific redesigns.",
          "Implemented browser-persisted quiz progress, countdown/submission UX, and participant-side Realtime handling.",
        ],
        lessons_learned: [
          "Learned to translate event-specific client needs into participant and administrator workflows through iterative UI changes.",
          "Developed experience designing timed quiz interactions, browser-persisted progress, and Realtime updates across frontend/backend boundaries.",
        ],
        impact: [
          "The deployed platform was accepted by the client and used at two annual events for approximately 100 participants.",
          "The platform helped the committee manage questions and scores, replacing manual score ordering. My contribution covered the frontend; backend and scoring implementation belonged to my teammate.",
        ],
      },
      id: {
        type: "Freelance",
        location_type: "Jarak jauh",
        period: "Digunakan pada Spectra 2025 dan 2026",
        responsibilities: [
          "Menangani seluruh UI dan logika sisi frontend dalam tim dua orang; rekan tim menangani implementasi backend/server.",
          "Membangun antarmuka ujian peserta, login/registrasi, bank soal, monitoring, dan nilai, termasuk penyesuaian desain tiap event.",
          "Mengimplementasikan progres ujian tersimpan di browser, UX hitung mundur/pengiriman, serta penanganan Realtime sisi peserta.",
        ],
        lessons_learned: [
          "Mempelajari penerjemahan kebutuhan khusus tiap event menjadi alur peserta dan administrator melalui iterasi antarmuka.",
          "Mengembangkan pengalaman merancang interaksi ujian berbatas waktu, progres tersimpan di browser, dan pembaruan Realtime dengan batas frontend/backend yang jelas.",
        ],
        impact: [
          "Platform yang di-deploy diterima klien dan digunakan pada dua event tahunan untuk sekitar 100 peserta.",
          "Platform membantu panitia mengelola soal dan nilai, menggantikan pengurutan nilai manual. Kontribusi saya mencakup frontend; implementasi backend dan penilaian menjadi tanggung jawab rekan tim.",
        ],
      },
    },
  },
];

export const getCareers = (locale: string) =>
  CAREERS.map(({ translations, ...item }) => ({
    ...item,
    ...translations[getContentLocale(locale)],
  }));

export type CareerItem = ReturnType<typeof getCareers>[number];
