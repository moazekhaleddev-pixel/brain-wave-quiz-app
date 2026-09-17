import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./HomeNav.module.css";
export default function HomeNav({ isMenuOpen }) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.navContent} ${isMenuOpen ? styles.display : ""}`}>
      <nav className={styles.nav}>
        <ul>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={styles.authBtns}>
        <button className={styles.loginBtn} onClick={() => navigate("/login")}>
          Log in
        </button>
        <Button
          bgColor="var(--accent)"
          bgHover="var(--ring)"
          onClick={() => navigate("/login/sign-up")}
          color="var(--accent-foreground)"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
