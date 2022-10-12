import { useEffect, useState } from 'react'
import { AddToShoppingCartIcon } from '../../components/AddToShoppingCartIcon'

import { MainLayout } from '../../layouts/MainLayout'

import { http } from '../../services/http'

import styles from './styles.module.css'

interface Movie {
  id: number
  title: string
  image: string
  price: number
}

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await http.get('/products')
        console.log(data.products)
        setMovies(data.products)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <MainLayout>
      <div className={styles.container}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.price}>R$ {movie.price}</p>
            <button className={styles.button}>
              <span className={styles.buttonInfo}>
                <AddToShoppingCartIcon />0
              </span>
              ADICIONAR AO CARRINHO
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
