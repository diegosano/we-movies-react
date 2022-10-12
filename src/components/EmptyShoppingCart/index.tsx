import { useNavigate } from 'react-router-dom'

import woman from '../../assets/woman.png'
import styles from './styles.module.css'

export function EmptyShoppingCart() {
  const navigate = useNavigate()

  return (
    <>
      <h2 className={styles.emptyText}>Parece que não há nada por aqui :(</h2>

      <img src={woman} alt="Woman holding blue circle with white icon" />

      <div className={styles.divider}></div>

      <button onClick={() => navigate('/')} className={styles.button}>
        VOLTAR
      </button>
    </>
  )
}
