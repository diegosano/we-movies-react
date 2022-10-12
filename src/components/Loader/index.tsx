import spinner from '../../assets/load-spinner.png'
import styles from './styles.module.css'

export function Loader() {
  return <img src={spinner} className={styles.loader} alt="" />
}
