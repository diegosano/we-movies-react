import { http } from './http'

export async function getAllMovies() {
  return await http.get('/products')
}
