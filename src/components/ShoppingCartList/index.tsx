import { TrashIcon } from '../TrashIcon'

import styles from './styles.module.css'

interface ShoppingCartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface ShoppingCartListProps {
  items: ShoppingCartItem[]
}

export function ShoppingCartList({ items }: ShoppingCartListProps) {
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
              <button type="button" className={styles.quantityButton}>
                -
              </button>
              <p className={styles.quantity}>{item.quantity}</p>
              <button type="button" className={styles.quantityButton}>
                +
              </button>
            </div>

            <div className={styles.subtotalContainer}>
              <p className={styles.subtotal}>R$ {item.price * item.quantity}</p>
            </div>

            <div className={styles.buttonContainer}>
              <button type="button" className={styles.removeButton}>
                <TrashIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <button>FINALIZAR PEDIDO</button>
        <p>
          TOTAL <span>R$ 0,00</span>
        </p>
      </footer>
    </div>
  )
}
