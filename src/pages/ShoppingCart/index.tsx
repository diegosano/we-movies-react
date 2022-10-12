import { EmptyShoppingCart } from '../../components/EmptyShoppingCart'
import { ShoppingCartList } from '../../components/ShoppingCartList'

import { useShoppingCart } from '../../hooks/useShoppingCart'
import { MainLayout } from '../../layouts/MainLayout'

import styles from './styles.module.css'

export function ShoppingCart() {
  const { cart } = useShoppingCart()

  return (
    <>
      <MainLayout>
        {!cart.length ? (
          <div className={styles.emptyContainer}>
            <EmptyShoppingCart />
          </div>
        ) : (
          <div className={styles.container}>
            <ShoppingCartList items={cart} />
          </div>
        )}
      </MainLayout>
    </>
  )
}
