import { Movie } from '../types/movies'

export function formatCurrencyToBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function addQuantityToMovie(movie: Movie): Movie {
  return {
    ...movie,
    quantity: 0,
  }
}
