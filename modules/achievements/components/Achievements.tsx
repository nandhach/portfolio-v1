import { useTranslations } from "next-intl";

import { AchievementItem } from "@/common/types/achievements";
import { AchievementFilters } from "@/common/libs/content";
import EmptyState from "@/common/components/elements/EmptyState";
import AchievementCard from "./AchievementCard";
import FilterHeader from "./FilterHeader";

interface AchievementsProps {
  items: AchievementItem[];
  types: string[];
  categories: string[];
  filters: AchievementFilters;
  locale: string;
}

const Achievements = ({
  items,
  types,
  categories,
  filters,
  locale,
}: AchievementsProps) => {
  const t = useTranslations("AchievementsPage");
  return (
    <section className="space-y-4">
      <FilterHeader
        typeOptions={types}
        categoryOptions={categories}
        filters={filters}
        locale={locale}
        totalData={items.length}
      />
      {items.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <AchievementCard key={item.slug} {...item} />
          ))}
        </div>
      ) : (
        <EmptyState message={t("no_data")} />
      )}
    </section>
  );
};

export default Achievements;
