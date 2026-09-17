import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./LoginForm.module.css";

import LoginBtns from "./LoginBtns";
import AuthInputs from "./AuthInputs";
import ErrMsg from "./ErrMsg";

export default function LoginForm() {
  const [email, setEmail] = useState("moaz@cimascope.com");
  const [emailErr, setEmailErr] = useState(null);
  const [password, setPassword] = useState("moaz@cimascope.com");
  const [passwordErr, setPasswordErr] = useState(null);

  const { login, err } = useAuth();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(e) {
    e.preventDefault();
    setEmailErr(null);
    setPasswordErr(null);

    if (!emailRegex.test(email)) setEmailErr("Invalid Email");
    if (!email) setEmailErr("Required");
    if (!password) setPasswordErr("Required");

    if (passwordErr || emailErr || !email || !password) return;

    try {
      await login(email, password);
    } catch (error) {
      setEmailErr(error.message);
      setPasswordErr(error.message);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.head}>
        <h1>Welcome Back</h1>
        <p>Sign in to continue your learning streak.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <LoginBtns />

        <div className={styles.separator}>
          <span></span>
          <span>or continue with email</span>
        </div>

        <AuthInputs
          email={email}
          setEmail={setEmail}
          emailErr={emailErr}
          setEmailErr={setEmailErr}
          password={password}
          setPassword={setPassword}
          passwordErr={passwordErr}
          setPasswordErr={setPasswordErr}
        />
        {err && <ErrMsg>{err}</ErrMsg>}
        <button className={styles.loginBtn}>Log in</button>

        <p>
          Don't have an account?
          <span>
            <Link to="/login/sign-up">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
