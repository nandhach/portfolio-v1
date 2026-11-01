import { achievements } from "@/contents/achievements";
import { getContentLocale } from "@/common/types/content";
import {
  AchievementFilters,
  filterAchievements,
  getPublicUrl,
} from "@/common/libs/content";

export const getAchievementsData = async (
  filters: AchievementFilters = {},
  locale: string = "en",
) =>
  filterAchievements(
    achievements.map(({ translations, ...item }) => ({
      ...item,
      ...translations[getContentLocale(locale)],
      url_credential: getPublicUrl(item.url_credential),
    })),
    filters,
  );

export const getAchivementTypes = async () =>
  Array.from(
    new Set(
      achievements.filter((item) => item.is_show).map((item) => item.type),
    ),
  ).sort();

export const getAchivementCategories = async () =>
  Array.from(
    new Set(
      achievements
        .filter((item) => item.is_show)
        .flatMap((item) => item.categories),
    ),
  ).sort();
