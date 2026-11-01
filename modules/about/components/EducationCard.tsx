import Image from "next/image";
import { useTranslations } from "next-intl";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

import type { EducationItem } from "@/common/constants/education";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { getPublicUrl } from "@/common/libs/content";

const EducationCard = ({
  school,
  logo,
  link,
  location,
  degree,
  major,
  start_year,
  end_year,
  GPA,
}: EducationItem) => {
  const t = useTranslations("AboutPage.education");
  const schoolUrl = getPublicUrl(link);

  return (
    <SpotlightCard className="p-5 sm:p-6">
      <article className="flex items-start gap-3 sm:gap-5">
        {logo ? (
          <Image
            width={70}
            height={70}
            src={logo}
            alt={school}
            className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain sm:h-[70px] sm:w-[70px]"
          />
        ) : (
          <CompanyIcon
            size={65}
            className="h-12 w-12 shrink-0 text-neutral-500 sm:h-[65px] sm:w-[65px]"
            aria-hidden="true"
          />
        )}

        <div className="min-w-0 flex-1 space-y-1">
          <h3 className="font-medium">
            {schoolUrl ? (
              <a
                href={schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {school}
              </a>
            ) : (
              school
            )}
          </h3>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex flex-col gap-1 md:flex-row md:flex-wrap md:gap-2">
              <span>{degree}</span>
              <span
                className="hidden text-neutral-300 dark:text-neutral-700 md:block"
                aria-hidden="true"
              >
                •
              </span>
              <span>{major}</span>
              {GPA && (
                <span className="flex items-center gap-2">
                  <span
                    className="hidden text-neutral-300 dark:text-neutral-700 md:block"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span>
                    {t("gpa")}: {GPA}
                  </span>
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 text-xs md:flex-row md:flex-wrap md:gap-2">
              <span>
                {start_year && (
                  <>
                    <time dateTime={String(start_year)}>{start_year}</time> –{" "}
                  </>
                )}
                <time dateTime={String(end_year)}>{end_year}</time>
              </span>
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
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
};

export default EducationCard;
