import { useTranslations } from "next-intl";
import { AchievementFilters } from "@/common/libs/content";

interface FilterHeaderProps {
  categoryOptions: string[];
  typeOptions: string[];
  filters: AchievementFilters;
  locale: string;
  totalData: number;
}

const FilterHeader = ({
  categoryOptions,
  typeOptions,
  filters,
  locale,
  totalData,
}: FilterHeaderProps) => {
  const t = useTranslations("AchievementsPage");
  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100";
  return (
    <div className="space-y-4">
      <form
        action={`/${locale}/achievements`}
        method="get"
        className="flex flex-col items-end gap-3"
      >
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
          <label className="space-y-1 text-sm">
            <span>{t("search")}</span>
            <input
              className={inputClass}
              type="search"
              name="search"
              defaultValue={filters.search}
            />
          </label>
          <label className="space-y-1 text-sm">
            <span>{t("type")}</span>
            <select
              className={inputClass}
              name="type"
              defaultValue={filters.type || ""}
            >
              <option value="">{t("all_types")}</option>
              {filters.type && !typeOptions.includes(filters.type) && (
                <option value={filters.type}>{t("unknown_filter")}</option>
              )}
              {typeOptions.map((value) => (
                <option key={value} value={value}>
                  {t.has(`types.${value}`) ? t(`types.${value}`) : value}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm">
            <span>{t("category")}</span>
            <select
              className={inputClass}
              name="category"
              defaultValue={filters.category || ""}
            >
              <option value="">{t("all_categories")}</option>
              {filters.category &&
                !categoryOptions.includes(filters.category) && (
                  <option value={filters.category}>
                    {t("unknown_filter")}
                  </option>
                )}
              {categoryOptions.map((value) => (
                <option key={value} value={value}>
                  {t.has(`categories.${value}`)
                    ? t(`categories.${value}`)
                    : value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a
            href={`/${locale}/achievements`}
            className="underline underline-offset-4"
          >
            {t("reset")}
          </a>
          <button
            type="submit"
            className="rounded-lg bg-neutral-200 px-4 py-2 font-medium dark:bg-neutral-800"
          >
            {t("apply_filters")}
          </button>
        </div>
      </form>
      <p
        className="text-sm text-neutral-500 dark:text-neutral-400"
        aria-live="polite"
      >
        {t("total", { count: totalData })}
      </p>
    </div>
  );
};

export default FilterHeader;
