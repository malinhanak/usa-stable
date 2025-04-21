import { Link } from "react-router";

import { useTranslatedTexts } from "src/hooks/useTranslatedTexts";
import styles from "src/organisms/organisms.module.css";

const Navigation = () => {
  const text = useTranslatedTexts();

  return (
    <nav className={styles.navigationContainer}>
      <Link to="/">{text["nav_root"]}</Link>
      <Link to="/about">{text["nav_about"]}</Link>
      <Link to="/dressage">{text["nav_dressage"]}</Link>
      <Link to="/show-jumping">{text["nav_jumping"]}</Link>
      <Link to="/retirees">{text["nav_retirees"]}</Link>
      <Link to="/ponies">{text["nav_ponies"]}</Link>
    </nav>
  );
};
export default Navigation;
