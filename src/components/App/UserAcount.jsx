import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./UserAcount.module.css";
import { useState } from "react";

export default function UserAcount() {
  const [isOpen, setIsopen] = useState(false);
  const { user, logout } = useAuth();
  const { name, username } = user;
  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className={styles.userAcount}>
      <div className={styles.img} onClick={() => setIsopen((o) => !o)}>
        {name?.slice(0, 2).toUpperCase()}
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <p>{username}</p>
          <p>{name}</p>
          <Button
            onClick={handleLogout}
            bgColor="var(--accent)"
            bgHover="var(--ring)"
            color="var(--accent-foreground)"
          >
            Log out
          </Button>
        </div>
      )}
    </div>
  );
}
