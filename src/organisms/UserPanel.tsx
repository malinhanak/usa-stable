import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./organisms.module.css";
import moleculesStyles from "../molecules/molecules.module.css";
import { Cross2Icon, ExitIcon } from "@radix-ui/react-icons";
import Dialog from "../molecules/Dialog";
import * as RadixDialog from "@radix-ui/react-dialog";

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
        <RadixDialog.Content className={moleculesStyles.dialogContent}>
          <RadixDialog.Title className={moleculesStyles.dialogTitle}>
            Logga in
          </RadixDialog.Title>
          <RadixDialog.Description
            className={moleculesStyles.dialogDescription}
          >
            Logga in
          </RadixDialog.Description>
          <form onSubmit={handleLoginSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button type="submit">Logga in</button>
            </div>
          </form>
          <RadixDialog.Close asChild>
            <button className={moleculesStyles.iconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </Dialog>
    </section>
  );
};
export default UserPanel;
