import { ExitIcon, GearIcon } from "@radix-ui/react-icons";

import { useAuth } from "src/context/AuthContext";
import moleculesStyles from "src/molecules/molecules.module.css";
import styles from "src/organisms/organisms.module.css";

const LoggedInPanel = () => {
  const { logout, user } = useAuth();

  return (
    <article className={moleculesStyles.userInfoContainer}>
      <p>Välkommen, {user?.displayName}</p>
      <button
        onClick={() => console.log("admin panel")}
        className={styles.logoutBtn}
      >
        <GearIcon />
      </button>
      <button onClick={logout} className={styles.logoutBtn}>
        <ExitIcon />
      </button>
    </article>
  );
};
export default LoggedInPanel;
