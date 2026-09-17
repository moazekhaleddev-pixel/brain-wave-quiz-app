import Logo from "./Logo";
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
        <Logo/>
        <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
        </ul>
        <p>© 2026 BrainWave. All rights reserved.</p>
    </footer>
  )
}
