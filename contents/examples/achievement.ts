import { LocalAchievement } from "@/common/types/achievements";

// Not imported by the application. Copy to contents/achievements.ts, replace
// every example value with verified facts, then enable is_show when ready.
export const achievementExample: LocalAchievement = {
  id: 7,
  slug: "replace-with-stable-slug",
  type: "certification",
  categories: ["software-quality"],
  issue_date: "", // Required: real issue date in YYYY-MM-DD format.
  is_show: false,
  translations: {
    en: {
      name: "Replace with verified title",
      issuing_organization: "Replace with verified issuer",
    },
    id: {
      name: "Ganti dengan judul terverifikasi",
      issuing_organization: "Ganti dengan penerbit terverifikasi",
    },
  },
  // image: "/images/achievements/approved-image.webp",
  // credential_id: "Only a real, approved public credential ID",
  // url_credential: "Only a real, approved verification URL",
};
