import { Link } from "@/i18n/navigation";
import { PROFILE } from "@/common/constants/profile";

import ThemeToggle from "./ThemeToggle";
import IntlToggle from "./IntlToggle";
import Image from "../../elements/Image";

import cn from "@/common/libs/clsxm";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-grow items-center gap-4 lg:flex-col  lg:gap-0.5",
        expandMenu && "flex-col !items-start",
      )}
    >
      <Image
        src={PROFILE.avatar}
        width={expandMenu ? 80 : imageSize * 1}
        height={expandMenu ? 80 : imageSize * 1}
        alt={PROFILE.name}
        className="border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105"
        rounded="rounded-full"
      />

      <div className="mt-1 min-w-0 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="text-sm font-medium sm:text-lg lg:text-center lg:text-xl">
            {PROFILE.name}
          </h2>
        </Link>
      </div>

      <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
        {PROFILE.headline}
      </div>

      <div className="hidden justify-between gap-6 lg:mt-4 lg:flex">
        <IntlToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ProfileHeader;
