import { useTranslations } from "next-intl";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { PROFILE } from "@/common/constants/profile";

const SocialLinks = () => {
  const t = useTranslations("Profile");
  const links = [
    {
      label: t("email"),
      href: `mailto:${PROFILE.email}`,
      icon: <HiOutlineMail size={20} />,
    },
    { label: "GitHub", href: PROFILE.github, icon: <BsGithub size={20} /> },
    {
      label: "LinkedIn",
      href: PROFILE.linkedin,
      icon: <BsLinkedin size={20} />,
    },
  ];

  return (
    <nav
      aria-label={t("contact_links")}
      className="flex justify-center gap-4 py-3"
    >
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          className="rounded p-1 text-neutral-600 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
