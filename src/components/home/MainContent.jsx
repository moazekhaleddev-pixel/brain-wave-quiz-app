import styles from "./MainContent.module.css";
export default function MainContent({children}) {
  return <main className={`container ${styles.main}`}>
    {children}
  </main>;
}

