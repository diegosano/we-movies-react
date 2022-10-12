import { Server } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/products', () => {
        return {
          products: [
            {
              id: 1,
              title: 'Viúva Negra',
              price: 9.99,
              image:
                'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
            },
            {
              id: 2,
              title: 'Shang-chi',
              price: 30.99,
              image:
                'https://www.imagemhost.com.br/images/2022/07/10/shang-chi.png',
            },
            {
              id: 3,
              title: 'Homem Aranha',
              price: 29.9,
              image:
                'https://www.imagemhost.com.br/images/2022/07/10/spider-man.png',
            },
            {
              id: 5,
              title: 'Morbius',
              price: 1.5,
              image:
                'https://www.imagemhost.com.br/images/2022/07/10/morbius-1.png',
            },
            {
              id: 6,
              title: 'Batman',
              price: 21.9,
              image:
                'https://www.imagemhost.com.br/images/2022/07/10/the-batman.png',
            },
            {
              id: 4,
              title: 'Eternos',
              price: 17.9,
              image:
                'https://www.imagemhost.com.br/images/2022/07/10/eternals.png',
            },
          ],
        }
      })
    },
  })

  return server
}
