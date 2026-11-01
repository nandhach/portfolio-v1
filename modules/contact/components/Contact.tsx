import { useTranslations } from "next-intl";

import ContactList from "./ContactList";

const Contact = () => {
  const t = useTranslations("ContactPage");
  return (
    <section className="space-y-6">
      <p className="leading-7 text-neutral-600 dark:text-neutral-300">
        {t("intro")}
      </p>
      <ContactList />
    </section>
  );
};

export default Contact;
