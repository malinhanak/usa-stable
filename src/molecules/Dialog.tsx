import * as RadixDialog from "@radix-ui/react-dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./molecules.module.css";

interface DialogProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const Dialog = ({ children, open, onOpenChange }: DialogProps) => {
  const { isLoggedIn } = useAuth();
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {!isLoggedIn && (
        <RadixDialog.Trigger asChild>
          <button>Logga in</button>
        </RadixDialog.Trigger>
      )}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.dialogOverlay} />
        {children}
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
