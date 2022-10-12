import { ShoppingCartIcon } from '../ShoppingCartIcon'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>WeMovies</h1>

      <div className={styles.shoppingCart}>
        <div className={styles.info}>
          <p className={styles.myCart}>Meu Carrinho</p>
          <p className={styles.quantity}>0 itens</p>
        </div>

        <ShoppingCartIcon />
      </div>
    </header>
  )
}
