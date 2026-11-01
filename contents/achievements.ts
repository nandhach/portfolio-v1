import { LocalAchievement } from "@/common/types/achievements";

// Encode each filename as one URL segment: some originals contain spaces and #.
const certificateImage = (filename: string) =>
  `/images/achievements/${encodeURIComponent(filename)}`;

export const achievements: LocalAchievement[] = [
  {
    id: 1,
    slug: "bnsp-software-quality-control-tester",
    type: "certification",
    categories: ["software-quality"],
    issue_date: "2024-11-25",
    image: certificateImage("sertif-bnsp_page-0001 (1).jpg"),
    is_show: true,
    translations: {
      en: {
        name: "Software Quality Control Tester",
        issuing_organization: "BNSP (Badan Nasional Sertifikasi Profesi)",
        description:
          "Certification in the Information and Communication Technology field. Assessed on November 20, 2024; issued and passed on November 25, 2024. My assessment work covered scenario design, locators, Katalon Studio scripts, test execution, result analysis, defect reporting, and evidence preparation. Some scenarios were demonstrated manually.",
      },
      id: {
        name: "Software Quality Control Tester",
        issuing_organization: "BNSP (Badan Nasional Sertifikasi Profesi)",
        description:
          "Sertifikasi bidang Teknologi Informasi dan Komunikasi. Asesmen pada 20 November 2024; terbit dan dinyatakan lulus pada 25 November 2024. Pekerjaan asesmen saya meliputi desain skenario, locator, script Katalon Studio, eksekusi pengujian, analisis hasil, pelaporan defect, serta persiapan bukti. Sebagian skenario didemonstrasikan secara manual.",
      },
    },
  },
  {
    id: 2,
    slug: "mitra-informatika-internship",
    type: "internship",
    categories: ["internship"],
    issue_date: "2025-06-06",
    image: certificateImage(
      "MIT0198022025#SKPR - Certificate of Intenship - Muhammad Nandha Chrismawan_page-0001 (1).jpg",
    ),
    is_show: true,
    translations: {
      en: {
        name: "Certificate of Internship at PT. Mitra Informatika",
        issuing_organization: "PT. Mitra Informatika",
        description:
          "Completed a frontend development internship from January to June 2025. My contributions to the internal NKRI prototype included design tokens, authentication UX, browser media, and collaboration on browser-data and media-upload modules.",
      },
      id: {
        name: "Sertifikat Magang di PT. Mitra Informatika",
        issuing_organization: "PT. Mitra Informatika",
        description:
          "Menyelesaikan magang pengembangan frontend pada Januari hingga Juni 2025. Kontribusi saya pada prototype internal NKRI mencakup design token, UX autentikasi, media browser, serta kolaborasi pada modul data browser dan upload media.",
      },
    },
  },
  {
    id: 3,
    slug: "pens-english-proficiency-test",
    type: "certification",
    categories: ["toefl", "language"],
    issue_date: "2026-04-16",
    image: certificateImage("sertifikat_TOEFL_Nandha_page-0001 (1).jpg"),
    is_show: true,
    translations: {
      en: {
        name: "PENS English Proficiency Test (PEPT) / TOEFL",
        issuing_organization: "Politeknik Elektronika Negeri Surabaya",
        description:
          "Completed the PENS English Proficiency Test (PEPT) at the PENS Language and Culture Center. The assessment covered listening comprehension, structure and written expression, and reading comprehension. This certificate records the PENS institutional test.",
      },
      id: {
        name: "PENS English Proficiency Test (PEPT) / TOEFL",
        issuing_organization: "Politeknik Elektronika Negeri Surabaya",
        description:
          "Menyelesaikan PENS English Proficiency Test (PEPT) di PENS Language and Culture Center. Asesmen mencakup listening comprehension, structure and written expression, serta reading comprehension. Sertifikat ini mencatat tes institusional PENS.",
      },
    },
  },
  {
    id: 4,
    slug: "copyright-fms-mobile",
    type: "intellectual-property",
    categories: ["research", "software-development"],
    issue_date: "2026-01-02",
    image: certificateImage(
      "Sertifikat Hak Cipta - Ferry - SuratCiptaan_EC002026000295_page-0001.jpg",
    ),
    is_show: true,
    translations: {
      en: {
        name: "Copyright Co-Creator – FMS Mobile Application",
        issuing_organization: "Ministry of Law, Republic of Indonesia",
        description:
          'Registered as one of the co-creators in the copyright record for the computer program "Aplikasi Mobile Layanan Pengguna Kendaraan Listrik pada Ekosistem Fleet Management System Edge-to-Cloud". The copyright holder named in the document is Politeknik Elektronika Negeri Surabaya.',
      },
      id: {
        name: "Pencipta / Co-Creator HKI – Aplikasi Mobile FMS",
        issuing_organization: "Kementerian Hukum Republik Indonesia",
        description:
          'Terdaftar sebagai salah satu pencipta dalam pencatatan hak cipta program komputer "Aplikasi Mobile Layanan Pengguna Kendaraan Listrik pada Ekosistem Fleet Management System Edge-to-Cloud". Pemegang hak cipta yang tercantum pada dokumen adalah Politeknik Elektronika Negeri Surabaya.',
      },
    },
  },
  {
    id: 5,
    slug: "copyright-fms-operator-web",
    type: "intellectual-property",
    categories: ["research", "software-development"],
    issue_date: "2026-09-17",
    image: certificateImage("SuratCiptaan_EC002026175630 (1)_page-0001.jpg"),
    is_show: true,
    translations: {
      en: {
        name: "Copyright Co-Creator – FMS Operator Web Application",
        issuing_organization: "Ministry of Law, Republic of Indonesia",
        description:
          'Registered as one of the co-creators in the copyright record for the computer program "Aplikasi Web Pusat Kendali Operator Kendaraan Listrik pada Ekosistem Fleet Management System Edge-to-Cloud". This records my co-creator status; the copyright holder named in the document is Politeknik Elektronika Negeri Surabaya.',
      },
      id: {
        name: "Pencipta / Co-Creator HKI – Aplikasi Web Operator FMS",
        issuing_organization: "Kementerian Hukum Republik Indonesia",
        description:
          'Tercatat sebagai salah satu pencipta dalam pencatatan hak cipta program komputer "Aplikasi Web Pusat Kendali Operator Kendaraan Listrik pada Ekosistem Fleet Management System Edge-to-Cloud". Pencatatan ini menyatakan status saya sebagai co-creator; pemegang hak cipta yang tercantum pada dokumen adalah Politeknik Elektronika Negeri Surabaya.',
      },
    },
  },
  {
    id: 6,
    slug: "ies-2026-exhibitor",
    type: "exhibition",
    categories: ["exhibition", "research", "symposium"],
    issue_date: "2026-08-03",
    image: certificateImage("sertifikat-exhibitor-IES.jpg"),
    is_show: true,
    translations: {
      en: {
        name: "Exhibitor – International Electronics Symposium (IES)",
        issuing_organization: "Politeknik Elektronika Negeri Surabaya",
        description:
          "Selected as an exhibitor to present the Fleet Management System software platform to international academics and practitioners at IES 2026. Demonstrated its functionality, technical architecture, and practical value interactively, and answered technical questions from symposium participants.",
      },
      id: {
        name: "Eksibitor – International Electronics Symposium (IES)",
        issuing_organization: "Politeknik Elektronika Negeri Surabaya",
        description:
          "Terpilih sebagai eksibitor untuk mempresentasikan platform perangkat lunak Fleet Management System kepada akademisi dan praktisi internasional pada IES 2026. Mendemonstrasikan fungsionalitas, arsitektur teknis, dan nilai guna aplikasi secara interaktif, serta menjawab pertanyaan teknis dari peserta simposium.",
      },
    },
  },
];
