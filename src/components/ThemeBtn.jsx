import { Moon, Sun } from "lucide-react"; 
import styles from './ThemeBtn.module.css';
import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) return "dark";
    return savedTheme; 
  });

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className={styles.themeBtn} onClick={handleToggleTheme}>
      {theme === "dark" ? <Sun color="#94a3b8" /> : <Moon color="#6b7280" />}
    </button>
  );
}