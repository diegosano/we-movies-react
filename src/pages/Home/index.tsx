import { useEffect, useState } from 'react'

import { AddToShoppingCartIcon } from '../../components/AddToShoppingCartIcon'
import { Loader } from '../../components/Loader'
import { MainLayout } from '../../layouts/MainLayout'

import { useShoppingCart } from '../../hooks/useShoppingCart'
import { http } from '../../services/http'
import { formatCurrencyToBRL } from '../../utils/formatters'

import styles from './styles.module.css'

export interface Movie {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

export function Home() {
  const { cart, addToCart } = useShoppingCart()
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await http.get('/products')

        const formattedMovies = data.products.map((movie: Movie) => ({
          ...movie,
          quantity: 0,
        }))

        setMovies(formattedMovies)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  function handleOnClick(movie: Movie) {
    addToCart(movie)
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        {movies.length ? (
          movies.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <img
                src={movie.image}
                alt={movie.title}
                className={styles.image}
              />

              <h2 className={styles.title}>{movie.title}</h2>

              <p className={styles.price}>{formatCurrencyToBRL(movie.price)}</p>

              <button
                className={styles.button}
                onClick={() => handleOnClick(movie)}
              >
                <span className={styles.buttonInfo}>
                  <AddToShoppingCartIcon />
                  {cart.find((item) => item.id === movie.id)?.quantity || 0}
                </span>
                ADICIONAR AO CARRINHO
              </button>
            </div>
          ))
        ) : (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        )}
      </div>
    </MainLayout>
  )
}
