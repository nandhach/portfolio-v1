import { motion } from "framer-motion";

import { MENU_ITEMS } from "@/common/constants/menu";

import Breakline from "../../elements/Breakline";

import Menu from "./Menu";
import SocialLinks from "./SocialLinks";
import Copyright from "../../elements/Copyright";

const MobileMenu = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <motion.div
      id="mobile-navigation"
      className="my-3 flex max-h-[calc(100dvh-230px)] flex-col overflow-y-auto pb-6"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline />
        <Menu list={filteredMenu} />
        <Breakline />
        <SocialLinks />
        <Copyright />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
