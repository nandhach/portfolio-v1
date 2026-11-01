import { AchievementItem } from "@/common/types/achievements";

export interface AchievementFilters {
  type?: string;
  category?: string;
  search?: string;
}

export const filterAchievements = (
  items: AchievementItem[],
  { type, category, search }: AchievementFilters = {},
) => {
  const query = search?.trim().toLocaleLowerCase();
  return items
    .filter(
      (item) =>
        item.is_show &&
        (!type || item.type === type) &&
        (!category || item.categories.includes(category)) &&
        (!query ||
          `${item.name} ${item.issuing_organization} ${item.description || ""}`
            .toLocaleLowerCase()
            .includes(query)),
    )
    .sort(
      (a, b) =>
        b.issue_date.localeCompare(a.issue_date) ||
        a.slug.localeCompare(b.slug),
    );
};

export const getPublicUrl = (value?: string | null): string | undefined => {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
};
