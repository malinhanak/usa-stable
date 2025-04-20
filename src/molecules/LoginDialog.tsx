import { useState } from "react";

import * as RadixDialog from "@radix-ui/react-dialog";
import { EnterIcon } from "@radix-ui/react-icons";

import Dialog from "src/atoms/dialog/Dialog";
import formStyles from "src/atoms/form/form.module.css";
import { useAuth } from "src/context/AuthContext";
import styles from "src/organisms/organisms.module.css";

const LoginDialog = () => {
  const { isLoggedIn, login } = useAuth();
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
  );
};
export default LoginDialog;
