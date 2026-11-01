"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";
import { IoClose as CloseIcon } from "react-icons/io5";
import { BsAward as CertificateIcon } from "react-icons/bs";

import type { AchievementItem } from "@/common/types/achievements";
import { getPublicUrl } from "@/common/libs/content";
import Image from "@/common/components/elements/Image";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import Portal from "@/common/components/elements/Portal";

// The native modal dialog supplies focus trapping and makes the page inert.
const CertificateDialog = ({
  item,
  issueDate,
  onClose,
  returnFocus,
}: {
  item: AchievementItem;
  issueDate: string;
  onClose: () => void;
  returnFocus: () => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const t = useTranslations("AchievementsPage");
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const credentialUrl = getPublicUrl(item.url_credential);
  const typeLabel = t.has(`types.${item.type}`)
    ? t(`types.${item.type}`)
    : item.type;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      returnFocus();
    };
  }, [returnFocus]);

  return (
    <motion.dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none items-center justify-center overflow-y-auto bg-transparent p-4 text-neutral-900 backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex dark:text-neutral-100 md:p-8"
    >
      <div className="relative my-auto flex max-h-full w-full max-w-6xl flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-neutral-900 md:flex-row">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("close_details")}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <CloseIcon size={22} aria-hidden="true" />
        </button>

        <div className="flex min-w-0 items-center justify-center bg-neutral-100 p-3 dark:bg-neutral-800 md:w-3/5">
          {item.image && !imageFailed ? (
            <Image
              src={item.image}
              alt={t("certificate_alt", { name: item.name })}
              width={1200}
              height={1600}
              onError={() => setImageFailed(true)}
              className="max-h-[60dvh] w-full object-contain md:max-h-[85dvh]"
            />
          ) : (
            <div className="flex min-h-48 flex-col items-center justify-center gap-3 p-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
              <CertificateIcon size={48} aria-hidden="true" />
              <p>{t("certificate_unavailable")}</p>
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-5 p-5 md:w-2/5 md:border-l md:border-neutral-200 md:p-8 md:pt-14 dark:md:border-neutral-800">
          <div className="space-y-2">
            <h2 id={titleId} className="pr-8 text-lg font-semibold md:pr-0">
              {item.name}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {item.issuing_organization}
            </p>
          </div>
          {item.description && (
            <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              {item.description}
            </p>
          )}
          <dl className="space-y-4 text-sm">
            {item.credential_id && (
              <div>
                <dt className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {t("credential_id")}
                </dt>
                <dd className="mt-1 break-words">{item.credential_id}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t("type")}
              </dt>
              <dd className="mt-1">{typeLabel}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t("category")}
              </dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {item.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-neutral-300 px-2 py-1 text-xs dark:border-neutral-700"
                  >
                    {t.has(`categories.${category}`)
                      ? t(`categories.${category}`)
                      : category}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t("issued_on")}
              </dt>
              <dd className="mt-1">
                <time dateTime={item.issue_date}>{issueDate}</time>
              </dd>
            </div>
          </dl>
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t("show_credential")}
              <ViewIcon size={20} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.dialog>
  );
};

const AchievementCard = (item: AchievementItem) => {
  const {
    name,
    issuing_organization,
    issue_date,
    image,
    type,
    categories,
    credential_id,
  } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations("AchievementsPage");
  const locale = useLocale();
  const issueDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${issue_date}T00:00:00Z`));

  // Stable callback prevents reopening the native dialog on parent rerenders.
  const returnFocus = useRef(() => triggerRef.current?.focus()).current;

  return (
    <>
      <article className="h-full">
        <SpotlightCard className="group h-full">
          <div className="relative flex h-full w-full flex-col text-left">
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen(true)}
              aria-haspopup="dialog"
              aria-label={t("view_details_for", { name })}
              className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary"
            />
            <div className="relative w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              {image && !imageFailed ? (
                <Image
                  src={image}
                  alt={t("certificate_alt", { name })}
                  width={600}
                  height={400}
                  onError={() => setImageFailed(true)}
                  className="h-48 w-full object-contain p-2 transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              ) : (
                <div className="flex h-48 items-center justify-center text-neutral-500 dark:text-neutral-400">
                  <CertificateIcon size={56} aria-hidden="true" />
                </div>
              )}
              <div className="absolute inset-0 hidden items-center justify-center gap-2 bg-black/60 text-white opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100 sm:flex">
                <span className="text-sm font-medium">{t("view_details")}</span>
                <ViewIcon size={20} aria-hidden="true" />
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col justify-between gap-4 p-4">
              <div className="space-y-2">
                {credential_id && (
                  <p className="break-words text-[10px] uppercase tracking-widest text-neutral-500">
                    {credential_id}
                  </p>
                )}
                <h2 className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                  {name}
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {issuing_organization}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      key: `type-${type}`,
                      label: t.has(`types.${type}`) ? t(`types.${type}`) : type,
                    },
                    ...categories.map((category) => ({
                      key: `category-${category}`,
                      label: t.has(`categories.${category}`)
                        ? t(`categories.${category}`)
                        : category,
                    })),
                  ].map(({ key, label }) => (
                    <span
                      key={key}
                      className="rounded-full border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <p className="border-t border-neutral-200 pt-2 text-[10px] uppercase text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                  {t("issued_on")}{" "}
                  <time dateTime={issue_date}>{issueDate}</time>
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 sm:hidden">
                  {t("view_details")}
                  <ViewIcon size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </article>
      <Portal>
        <AnimatePresence>
          {isOpen && (
            <CertificateDialog
              key={item.slug}
              item={item}
              issueDate={issueDate}
              onClose={() => setIsOpen(false)}
              returnFocus={returnFocus}
            />
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

export default AchievementCard;
