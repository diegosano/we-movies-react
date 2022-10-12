import { createBrowserRouter } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'shopping-cart',
    element: <ShoppingCart />,
  },
  {
    path: 'checkout',
    element: <Checkout />,
  },
])
