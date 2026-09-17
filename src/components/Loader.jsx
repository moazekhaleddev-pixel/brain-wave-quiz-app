import { GridLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderOverlay}>
      <GridLoader color="var(--primary)" size={10} />
    </div>
  );
}
