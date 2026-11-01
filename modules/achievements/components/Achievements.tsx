"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { AchievementItem } from "@/common/types/achievements";
import { AchievementFilters, filterAchievements } from "@/common/libs/content";
import EmptyState from "@/common/components/elements/EmptyState";
import AchievementCard from "./AchievementCard";
import FilterHeader from "./FilterHeader";

interface AchievementsProps {
  items: AchievementItem[];
  types: string[];
  categories: string[];
  locale: string;
}

const Achievements = ({
  items,
  types,
  categories,
  locale,
}: AchievementsProps) => {
  const t = useTranslations("AchievementsPage");
  const [filters, setFilters] = useState<AchievementFilters>({});
  useEffect(() => {
    const readFilters = () => {
      const params = new URLSearchParams(window.location.search);
      setFilters({
        type: params.get("type") || "",
        category: params.get("category") || "",
        search: params.get("search") || "",
      });
    };
    readFilters();
    window.addEventListener("popstate", readFilters);
    return () => window.removeEventListener("popstate", readFilters);
  }, []);

  const applyFilters = (next: AchievementFilters) => {
    const url = new URL(window.location.href);
    for (const key of ["type", "category", "search"] as const) {
      if (next[key]) url.searchParams.set(key, next[key]!);
      else url.searchParams.delete(key);
    }
    window.history.pushState(null, "", url);
    setFilters(next);
  };
  const visibleItems = filterAchievements(items, filters);
  return (
    <section className="space-y-4">
      <FilterHeader
        typeOptions={types}
        categoryOptions={categories}
        filters={filters}
        locale={locale}
        totalData={visibleItems.length}
        onApply={applyFilters}
      />
      {visibleItems.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {visibleItems.map((item) => (
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
