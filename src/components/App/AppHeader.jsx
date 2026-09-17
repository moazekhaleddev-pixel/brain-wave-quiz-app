import styles from "./AppHeader.module.css";
import Logo from "../Logo";
import ThemeBtn from "../ThemeBtn";
import UserAcount from "./UserAcount";

export default function AppHeader({children}) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headContainer}`}>
        <Logo />
        <div className={styles.appInfo}>
          <ThemeBtn />
          {children}
        </div>
      </div>
    </header>
  );
}
