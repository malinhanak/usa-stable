import { Dispatch, ReactNode, SetStateAction } from "react";

import * as RadixDialog from "@radix-ui/react-dialog";

import DialogContent from "src/atoms/dialog/DialogContent";

interface DialogProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const Dialog = ({ children, open, onOpenChange }: DialogProps) => {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
};

Dialog.Trigger = RadixDialog.Trigger;
Dialog.Content = DialogContent;

export default Dialog;
