import { useState } from 'react'

import { EmptyShoppingCart } from '../../components/EmptyShoppingCart'
import { ShoppingCartList } from '../../components/ShoppingCartList'
import { MainLayout } from '../../layouts/MainLayout'

import styles from './styles.module.css'

const MOCKED_SHOPPING_CART = [
  {
    id: 1,
    title: 'Viúva Negra',
    price: 9.99,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Shang-chi',
    price: 30.99,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/shang-chi.png',
    quantity: 1,
  },
  {
    id: 3,
    title: 'Homem Aranha',
    price: 29.9,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/spider-man.png',
    quantity: 1,
  },
  {
    id: 5,
    title: 'Morbius',
    price: 1.5,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/morbius-1.png',
    quantity: 1,
  },
  {
    id: 6,
    title: 'Batman',
    price: 21.9,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/the-batman.png',
    quantity: 1,
  },
  {
    id: 4,
    title: 'Eternos',
    price: 17.9,
    image: 'https://www.imagemhost.com.br/images/2022/07/10/eternals.png',
    quantity: 1,
  },
]

export function ShoppingCart() {
  const [isEmpty] = useState(false)

  return (
    <>
      <MainLayout>
        <div className={styles.container}>
          {isEmpty ? (
            <EmptyShoppingCart />
          ) : (
            <ShoppingCartList items={MOCKED_SHOPPING_CART} />
          )}
        </div>
      </MainLayout>
    </>
  )
}
