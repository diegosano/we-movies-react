import { Link, useNavigate } from 'react-router-dom'

import { ShoppingCartIcon } from '../ShoppingCartIcon'

import styles from './styles.module.css'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <h1 className={styles.title} onClick={() => navigate('/')}>
        WeMovies
      </h1>

      <Link to="/shopping-cart" className={styles.shoppingCart}>
        <div className={styles.info}>
          <p className={styles.myCart}>Meu Carrinho</p>
          <p className={styles.quantity}>0 itens</p>
        </div>

        <ShoppingCartIcon />
      </Link>
    </header>
  )
}
