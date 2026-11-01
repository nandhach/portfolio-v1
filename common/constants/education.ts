import { Localized, getContentLocale } from "@/common/types/content";

interface Education {
  id: string;
  school: string;
  logo?: string;
  link?: string;
  location?: string;
  start_year?: number;
  end_year: number;
  graduation_date: string;
  GPA?: string;
  translations: Localized<{ degree: string; major: string }>;
}

export const EDUCATION: Education[] = [
  {
    id: "pens-informatics",
    school: "Politeknik Elektronika Negeri Surabaya (PENS)",
    logo: "/images/education/logo-pens.png",
    link: "https://www.pens.ac.id/",
    location: "Surabaya, Indonesia",
    start_year: 2022,
    end_year: 2026,
    graduation_date: "2026-07-24",
    GPA: "3.43 / 4.00",
    translations: {
      en: {
        degree: "Applied Bachelor's Degree (D4)",
        major: "Informatics Engineering",
      },
      id: { degree: "Sarjana Terapan (D4)", major: "Teknik Informatika" },
    },
  },
];

export const getEducation = (locale: string) =>
  EDUCATION.map(({ translations, ...item }) => ({
    ...item,
    ...translations[getContentLocale(locale)],
  }));
export type EducationItem = ReturnType<typeof getEducation>[number];
