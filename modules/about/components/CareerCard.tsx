"use client";

import Image from "next/image";
import { withBasePath } from "@/common/libs/site";
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  BsListCheck as ResponsibilityIcon,
  BsBuildings as CompanyIcon,
  BsLightbulb as LearnIcon,
} from "react-icons/bs";
import { HiChevronRight as ChevronIcon } from "react-icons/hi";
import { HiOutlineRocketLaunch as ImpactIcon } from "react-icons/hi2";
import type { IconType } from "react-icons";

import SpotlightCard from "@/common/components/elements/SpotlightCard";
import type { CareerItem } from "@/common/constants/carreers";
import { getPublicUrl } from "@/common/libs/content";

const DetailSection = ({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: IconType;
  items: string[];
}) => (
  <section className="space-y-2">
    <h4 className="flex items-center gap-2 font-semibold text-primary">
      <Icon size={16} className="shrink-0" aria-hidden="true" />
      <span className="text-xs uppercase tracking-wider">{title}</span>
    </h4>
    <ul className="space-y-2 text-xs leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span
            className="font-bold text-neutral-700 dark:text-neutral-300"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

const CareerCard = ({
  position,
  company,
  logo,
  link,
  location,
  type,
  location_type,
  start_date,
  end_date,
  period,
  responsibilities,
  lessons_learned,
  impact,
}: CareerItem) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const detailsId = useId();
  const toggleId = useId();
  const reduceMotion = useReducedMotion();
  const locale = useLocale();
  const t = useTranslations("AboutPage.career");
  const companyUrl = getPublicUrl(link);
  const date = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${value}-01T00:00:00Z`));

  // Dates have month precision; count both the first and last working months.
  const totalMonths =
    start_date && end_date
      ? (Number(end_date.slice(0, 4)) - Number(start_date.slice(0, 4))) * 12 +
        Number(end_date.slice(5, 7)) -
        Number(start_date.slice(5, 7)) +
        1
      : 0;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const duration = [
    years > 0 ? t("duration_years", { count: years }) : "",
    months > 0 ? t("duration_months", { count: months }) : "",
  ]
    .filter(Boolean)
    .join(" ");
  const hasDetails =
    responsibilities.length > 0 ||
    lessons_learned.length > 0 ||
    impact.length > 0;
  const hasSecondaryDetails = lessons_learned.length > 0 || impact.length > 0;

  return (
    <SpotlightCard className="p-5 sm:p-6">
      <article className="flex items-start gap-3 sm:gap-5">
        {logo ? (
          <Image
            width={60}
            height={60}
            src={withBasePath(logo)}
            alt={company}
            className="h-12 w-12 shrink-0 rounded-lg border-[1.5px] border-neutral-300 bg-white object-contain dark:border-neutral-700 sm:h-[60px] sm:w-[60px]"
          />
        ) : (
          <CompanyIcon
            size={60}
            className="h-12 w-12 shrink-0 text-neutral-500 sm:h-[60px] sm:w-[60px]"
            aria-hidden="true"
          />
        )}

        <div className="min-w-0 flex-1 space-y-1">
          <h3 className="font-medium">{position}</h3>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:gap-2">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded hover:text-neutral-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:hover:text-neutral-50"
                >
                  {company}
                </a>
              ) : (
                <span>{company}</span>
              )}
              {location && (
                <>
                  <span
                    className="hidden text-neutral-300 dark:text-neutral-700 md:block"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span>{location}</span>
                </>
              )}
            </div>

            <div className="flex flex-col gap-1 text-[13px] md:flex-row md:flex-wrap md:gap-2">
              {(start_date && end_date) || period ? (
                <span>
                  {start_date && end_date ? (
                    <>
                      <time dateTime={start_date}>{date(start_date)}</time> –{" "}
                      <time dateTime={end_date}>{date(end_date)}</time>
                    </>
                  ) : (
                    period
                  )}
                </span>
              ) : null}
              {[duration, type, location_type].filter(Boolean).map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span
                    className="hidden text-neutral-300 dark:text-neutral-700 md:block"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span>{item}</span>
                </span>
              ))}
            </div>

            {hasDetails && (
              <div className="pt-2">
                <button
                  type="button"
                  id={toggleId}
                  aria-expanded={isShowDetails}
                  aria-controls={detailsId}
                  onClick={() => setIsShowDetails((value) => !value)}
                  className="-ml-1 flex items-center gap-1 rounded py-1 text-left transition-colors hover:text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:hover:text-neutral-300"
                >
                  <motion.span
                    animate={{ rotate: isShowDetails ? 90 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3 }}
                    className="inline-flex"
                    aria-hidden="true"
                  >
                    <ChevronIcon size={18} />
                  </motion.span>
                  <span className="text-sm font-medium">
                    {t(isShowDetails ? "hide_details" : "show_details")}
                  </span>
                </button>

                <div id={detailsId} role="region" aria-labelledby={toggleId}>
                  <AnimatePresence initial={false}>
                    {isShowDetails && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 py-3 text-neutral-600 dark:text-neutral-400">
                          {responsibilities.length > 0 && (
                            <DetailSection
                              title={t("responsibilities")}
                              icon={ResponsibilityIcon}
                              items={responsibilities}
                            />
                          )}
                          {hasSecondaryDetails && (
                            <div
                              className={`grid grid-cols-1 gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800 ${lessons_learned.length > 0 && impact.length > 0 ? "sm:grid-cols-2" : ""}`}
                            >
                              {lessons_learned.length > 0 && (
                                <DetailSection
                                  title={t("lessons_learned")}
                                  icon={LearnIcon}
                                  items={lessons_learned}
                                />
                              )}
                              {impact.length > 0 && (
                                <DetailSection
                                  title={t("impact")}
                                  icon={ImpactIcon}
                                  items={impact}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
};

export default CareerCard;
