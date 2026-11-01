import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AchievementFilters } from "@/common/libs/content";
import { withBasePath } from "@/common/libs/site";

interface FilterHeaderProps {
  categoryOptions: string[];
  typeOptions: string[];
  filters: AchievementFilters;
  locale: string;
  totalData: number;
  onApply: (filters: AchievementFilters) => void;
}

const FilterHeader = ({
  categoryOptions,
  typeOptions,
  filters,
  locale,
  totalData,
  onApply,
}: FilterHeaderProps) => {
  const t = useTranslations("AchievementsPage");
  const [draft, setDraft] = useState(filters);
  useEffect(() => setDraft(filters), [filters]);
  const inputClass =
    "w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100";
  return (
    <div className="space-y-4">
      <form
        action={withBasePath(`/${locale}/achievements/`)}
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
          onApply(draft);
        }}
        className="flex flex-col items-end gap-3"
      >
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
          <label className="space-y-1 text-sm">
            <span>{t("search")}</span>
            <input
              className={inputClass}
              type="search"
              name="search"
              value={draft.search || ""}
              onChange={(event) =>
                setDraft({ ...draft, search: event.target.value })
              }
            />
          </label>
          <label className="space-y-1 text-sm">
            <span>{t("type")}</span>
            <select
              className={inputClass}
              name="type"
              value={draft.type || ""}
              onChange={(event) =>
                setDraft({ ...draft, type: event.target.value })
              }
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
              value={draft.category || ""}
              onChange={(event) =>
                setDraft({ ...draft, category: event.target.value })
              }
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
          <button
            type="button"
            onClick={() => onApply({})}
            className="underline underline-offset-4"
          >
            {t("reset")}
          </button>
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
