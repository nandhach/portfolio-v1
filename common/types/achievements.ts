import { Localized } from "./content";

export interface AchievementItem {
  id: number;
  credential_id?: string;
  slug: string;
  name: string;
  description?: string;
  issuing_organization: string;
  type: string;
  categories: string[];
  url_credential?: string;
  issue_date: string;
  expiration_date?: string;
  image?: string;
  is_show: boolean;
}

export type LocalAchievement = Omit<
  AchievementItem,
  "name" | "issuing_organization" | "description"
> & {
  translations: Localized<
    Pick<AchievementItem, "name" | "issuing_organization" | "description">
  >;
};
