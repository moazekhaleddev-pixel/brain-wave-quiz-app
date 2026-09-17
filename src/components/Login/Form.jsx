import { Outlet } from "react-router-dom";
import styles from "./Form.module.css";
import FormHead from "./FormHead";
export default function Form() {
  return (
    <div className={styles.formContainer}>
      <FormHead />
      <Outlet />
    </div>
  );
}
