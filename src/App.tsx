import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import { router } from './Router'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ShoppingCartProvider>
      <ToastContainer pauseOnFocusLoss={false} />
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  )
}
