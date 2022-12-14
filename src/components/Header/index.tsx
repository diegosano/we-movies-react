import { Link, useNavigate } from 'react-router-dom'

import { ShoppingCartIcon } from '../Icons/ShoppingCartIcon'

import { useShoppingCart } from '../../hooks/useShoppingCart'

import styles from './styles.module.css'

export function Header() {
  const { cart } = useShoppingCart()
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <h1 className={styles.title} onClick={() => navigate('/')}>
        WeMovies
      </h1>

      <Link to="/shopping-cart" className={styles.shoppingCart}>
        <div className={styles.info}>
          <p className={styles.myCart}>Meu Carrinho</p>
          <p className={styles.quantity}>{cart.length} itens</p>
        </div>

        <ShoppingCartIcon />
      </Link>
    </header>
  )
}
