import { useNavigate } from 'react-router-dom'

import { MainLayout } from '../../layouts/MainLayout'

import man from '../../assets/man.png'
import styles from './styles.module.css'

export function Checkout() {
  const navigate = useNavigate()

  return (
    <>
      <MainLayout>
        <div className={styles.container}>
          <h2 className={styles.text}>Compra realizada com sucesso!</h2>

          <img src={man} />

          <button onClick={() => navigate('/')} className={styles.button}>
            VOLTAR
          </button>
        </div>
      </MainLayout>
    </>
  )
}
