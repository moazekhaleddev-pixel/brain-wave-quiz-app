import styles from './ErrMsg.module.css'
export default function ErrMsg({children}) {
  return (
    <span className={styles.err}>{children}</span>
  )
}
