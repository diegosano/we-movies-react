import { useNavigate } from 'react-router-dom'

import { ShoppingCartItem } from '../ShoppingCartItem'

import { formatCurrencyToBRL } from '../../utils/formatters'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { Movie } from '../../types/movies'

import styles from './styles.module.css'

interface ShoppingCartListProps {
  items: Movie[]
}

export function ShoppingCartList({ items }: ShoppingCartListProps) {
  const navigate = useNavigate()

  const { clearCart, total } = useShoppingCart()

  function handleCheckout() {
    clearCart()
    navigate('/checkout')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>PRODUTO</p>
        <p className={styles.quantityHeader}>QTD</p>
        <p>SUBTOTAL</p>
      </header>

      <ul className={styles.list}>
        {items.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </ul>

      <footer className={styles.footer}>
        <button onClick={handleCheckout}>FINALIZAR PEDIDO</button>
        <p>
          TOTAL <span>{formatCurrencyToBRL(total)}</span>
        </p>
      </footer>
    </div>
  )
}
