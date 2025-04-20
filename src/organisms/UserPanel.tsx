import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./organisms.module.css";
import moleculesStyles from "../molecules/molecules.module.css";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";
import Dialog from "../molecules/dialog/Dialog";
import * as RadixDialog from "@radix-ui/react-dialog";
import formStyles from "../atoms/form/form.module.css";

const UserPanel = () => {
  const { isLoggedIn, logout, login, user } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setIsDialogOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <section className={styles.userPanelContainer}>
      {isLoggedIn && (
        <article className={moleculesStyles.userInfoContainer}>
          <p>
            Välkommen,
            <span style={{ fontStyle: "italic", marginLeft: "3px" }}>
              {user?.displayName}
            </span>
          </p>
          <button onClick={logout} className={styles.logoutBtn}>
            <ExitIcon />
          </button>
        </article>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <>
          {!isLoggedIn && (
            <RadixDialog.Trigger asChild>
              <button>
                <EnterIcon />
              </button>
            </RadixDialog.Trigger>
          )}
          <Dialog.Content title="Logga in" size="small">
            <form onSubmit={handleLoginSubmit}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={formStyles.input}
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className={formStyles.input}
              />

              <button className={styles.loginBtn} type="submit">
                Logga in
              </button>
            </form>
          </Dialog.Content>
        </>
      </Dialog>
    </section>
  );
};
export default UserPanel;
