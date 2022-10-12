import { TrashIcon } from '../Icons/TrashIcon'

import { useShoppingCart } from '../../hooks/useShoppingCart'
import { Movie } from '../../types/movies'
import { formatCurrencyToBRL } from '../../utils/formatters'

import styles from './styles.module.css'

interface ShoppingCartItemProps {
  item: Movie
}

export function ShoppingCartItem({ item }: ShoppingCartItemProps) {
  const { addToCart, removeFromCart, removeAllFromId } = useShoppingCart()

  return (
    <li className={styles.item}>
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
  )
}
