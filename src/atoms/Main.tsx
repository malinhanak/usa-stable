import { ReactNode } from "react";

import styles from "src/atoms/atoms.module.css";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};
export default Main;
