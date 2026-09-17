import styles from './Login.module.css'
import SideBar from "../components/Login/SideBar";
import Form from '../components/Login/Form';
export default function Login() {
  return (
    <div className={styles.login}>
        <SideBar/>
        <Form/>
    </div>
  )
}
