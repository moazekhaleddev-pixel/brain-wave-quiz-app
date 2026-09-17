import styles from './Logo.module.css'
import { Brain } from 'lucide-react'
export default function Logo() {
  return (
    <div className={`${styles.logoContainer}`}>
        <Brain color="#4f46e5" size={20}   />
       <div className={styles.logo}>
         Brain
        <span style={{color:"#4f46e5"}}>Wave</span>
       </div>
    </div>
  )
}
