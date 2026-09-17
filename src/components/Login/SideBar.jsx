import styles from './SideBar.module.css'
import MouckCard from '../home/MoukCard' 
export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <MouckCard />
    </div>
  )
}
