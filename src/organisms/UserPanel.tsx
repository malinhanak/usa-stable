import { useAuth } from "src/context/AuthContext";
import LoggedInPanel from "src/molecules/LoggedInPanel";
import LoginDialog from "src/molecules/LoginDialog";
import styles from "src/organisms/organisms.module.css";

const UserPanel = () => {
  const { isLoggedIn } = useAuth();

  return (
    <section className={styles.userPanelContainer}>
      {isLoggedIn && <LoggedInPanel />}
      <LoginDialog />
    </section>
  );
};
export default UserPanel;
