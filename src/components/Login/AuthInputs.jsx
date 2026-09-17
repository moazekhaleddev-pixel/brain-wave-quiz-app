// AuthInputs.jsx
import { TextInput, PasswordInput } from "@mantine/core";
import { Eye, EyeOff } from "lucide-react";
import ErrMsg from "./ErrMsg";
import styles from "./AuthInputs.module.css";

export default function AuthInputs({ email, setEmail, emailErr, setEmailErr, password, setPassword, passwordErr, setPasswordErr }) {
  return (
    <div className={styles.inputFields}>
      <TextInput
        classNames={{ input: styles.customInput, label: styles.myLabel }}
        placeholder="alex@example.com"
        label="Email Address"
        value={email}
        onChange={(e) => {
          setEmailErr(null);
          setEmail(e.currentTarget.value);
        }}
      />
      {emailErr && <ErrMsg>{emailErr}</ErrMsg>}
      
      <PasswordInput
        classNames={{ label: styles.customLabel, visibilityToggle: styles.eyeButton }}
        styles={{
          section: { "& button": { backgroundColor: "transparent !important" }, "& button:hover": { backgroundColor: "transparent !important" } },
        }}
        placeholder="Password"
        label="Password"
        value={password}
        visibilityToggleIcon={({ reveal }) => reveal ? <EyeOff size={18} color="var(--primary)" /> : <Eye size={18} color="var(--primary)" />}
        onChange={(e) => {
          setPasswordErr(null);
          setPassword(e.currentTarget.value);
        }}
      />
      {passwordErr && <ErrMsg>{passwordErr}</ErrMsg>}
    </div>
  );
}