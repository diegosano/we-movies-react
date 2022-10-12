import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../../hooks/useShoppingCart'

import { TrashIcon } from '../TrashIcon'
import { Movie } from '../../pages/Home'

import styles from './styles.module.css'
import { formatCurrencyToBRL } from '../../utils/formatters'

interface ShoppingCartListProps {
  items: Movie[]
}

export function ShoppingCartList({ items }: ShoppingCartListProps) {
  const navigate = useNavigate()

  const { clearCart, addToCart, removeFromCart, removeAllFromId, total } =
    useShoppingCart()

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
          <li key={item.id}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} />
            </div>

            <div className={styles.infoContainer}>
              <p>{item.title}</p>
              <span>R$ {item.price}</span>
            </div>

            <div className={styles.quantityContainer}>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>
              <p className={styles.quantity}>{item.quantity}</p>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>

            <div className={styles.subtotalContainer}>
              <p className={styles.subtotal}>
                {formatCurrencyToBRL(item.price * item.quantity)}
              </p>
            </div>

            <div className={styles.buttonContainer}>
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => removeAllFromId(item.id)}
              >
                <TrashIcon />
              </button>
            </div>
          </li>
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
