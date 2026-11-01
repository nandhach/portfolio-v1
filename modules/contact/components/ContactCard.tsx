import Link from "next/link";
import { MdArrowOutward as ArrowIcon } from "react-icons/md";
import { useTranslations } from "next-intl";

import { SocialMediaProps } from "@/common/types/socialMedia";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const ContactCard = ({
  name,
  href,
  icon,
  backgroundIcon,
  backgroundGradientColor,
  backgroundColor,
  borderColor,
  textColor,
  colSpan,
}: SocialMediaProps) => {
  const t = useTranslations("ContactPage");

  return (
    <SpotlightCard
      className={`relative grid w-full grid-cols-[minmax(0,1fr)_auto] gap-3 overflow-hidden rounded-md border-2 border-neutral-300 p-6 dark:border-neutral-700 ${colSpan} ${backgroundGradientColor}`}
    >
      <div className="absolute -left-[3.5rem] -top-[3.5rem] rotate-45 text-neutral-50/5">
        {backgroundIcon}
      </div>
      <div
        className={`${textColor} z-10 flex flex-col justify-between gap-y-2`}
      >
        <h3 className="text-lg font-semibold tracking-wide">
          {t(`social_media.${name}.title`)}
        </h3>
        <p className="pb-2 text-xs">{t(`social_media.${name}.description`)}</p>
        <Link
          href={href}
          target={name === "gmail" ? undefined : "_blank"}
          rel={name === "gmail" ? undefined : "noopener noreferrer"}
          className={`${backgroundColor} flex w-fit items-center justify-center gap-x-2 rounded-md px-4 py-2 text-black transition duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4`}
          data-umami-event={`click_contact_${name}`}
        >
          <p className="text-sm font-medium">
            {t(`social_media.${name}.action`)}
          </p>
          <ArrowIcon size={17} />
        </Link>
        <p className="break-all text-xs">
          {href.replace(/^mailto:/, "").replace(/^https:\/\/(www\.)?/, "")}
        </p>
      </div>

      <div className={`flex items-end justify-end`}>
        <div
          className={`rounded-2xl border-4 border-opacity-80 bg-opacity-5 p-2 text-neutral-50 ${backgroundColor} ${borderColor}`}
        >
          {icon}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ContactCard;
