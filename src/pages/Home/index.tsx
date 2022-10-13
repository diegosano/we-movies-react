import { toast } from 'react-toastify'

import { Loader } from '../../components/Loader'
import { AddToShoppingCartIcon } from '../../components/Icons/AddToShoppingCartIcon'
import { MainLayout } from '../../layouts/MainLayout'

import { useShoppingCart } from '../../hooks/useShoppingCart'
import { useMovies } from '../../hooks/useMovies'
import { formatCurrencyToBRL } from '../../utils/formatters'
import { Movie } from '../../types/movies'

import styles from './styles.module.css'

export function Home() {
  const { cart, addToCart } = useShoppingCart()
  const { movies, isLoading, error } = useMovies()

  function handleOnClick(movie: Movie) {
    addToCart(movie)
  }

  if (error) {
    toast('Ocorreu um erro ao buscar os filmes')
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        {!isLoading ? (
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
