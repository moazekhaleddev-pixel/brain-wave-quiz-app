import styles from './Progress.module.css'
export default function Progress({value,max}) {
  return (
    <progress value={value} max={max} />
)
}
