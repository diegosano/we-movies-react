import { RouterProvider } from 'react-router-dom'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import { router } from './Router'

export function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  )
}
