import { Link } from "react-router";

import styles from "./organisms.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <Link to="/">Home</Link>
      <Link to="/about">Om</Link>
      <Link to="/dressage">Dressyr</Link>
      <Link to="/show-jumping">Hoppning</Link>
      <Link to="/retirees">Pensionärer</Link>
      <Link to="/ponies">Lilla Stallet</Link>
    </nav>
  );
};
export default Navigation;
