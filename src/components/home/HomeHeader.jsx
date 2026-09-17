import { Logs } from "lucide-react";
import Logo from "../Logo";
import ThemeBtn from "../ThemeBtn";
import styles from "./HomeHeader.module.css";
import HomeNav from "./HomeNav";
import { useState } from "react";
export default function HomeHeader() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headContainer}`}>
        <Logo />
        <HomeNav isMenuOpen={isMenuOpen} />
        <ThemeBtn />
        <button onClick={()=>setIsMenuOpen(m=>!m)} className={styles.menuBtn}>
          <Logs />
        </button>
      </div>
    </header>
  );
}
