import { ReactNode } from "react";

import * as RadixDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import clsx from "clsx";

import styles from "./dialog.module.css";

interface DialogContentProps {
  children: ReactNode;
  title: string;
  desc?: string;
  size: "small" | "medium" | "large";
}

const DialogContent = ({ children, title, desc, size }: DialogContentProps) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.dialogOverlay} />
      <RadixDialog.Content className={clsx(styles.dialogContent, styles[size])}>
        <section className={styles.dialogHeader}>
          <RadixDialog.Title className={styles.dialogTitle}>
            {title}
          </RadixDialog.Title>
          <RadixDialog.Close asChild>
            <button className={styles.iconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </section>
        {desc && (
          <RadixDialog.Description className={styles.dialogDescription}>
            {desc}
          </RadixDialog.Description>
        )}
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};

export default DialogContent;
