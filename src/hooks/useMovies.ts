import { useEffect, useState } from 'react'

import { getAllMovies } from '../services/movie'
import { Movie } from '../types/movies'
import { addQuantityToMovie } from '../utils/formatters'

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)

        const { data } = await getAllMovies()

        const formattedMovies = data.products.map((movie: Movie) =>
          addQuantityToMovie(movie)
        )

        setMovies(formattedMovies)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return { movies, isLoading, error }
}
