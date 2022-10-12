import { createContext, ReactNode, useMemo, useState } from 'react'

import { Movie } from '../types/movies'

interface ShoppingCartContextType {
  cart: Movie[]
  addToCart: (item: Movie) => void
  removeFromCart: (id: number) => void
  removeAllFromId: (id: number) => void
  clearCart: () => void
  total: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartProviderProps {
  children: ReactNode
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cart, setCart] = useState<Movie[]>([])

  function addToCart(item: Movie) {
    const alreadyExists = cart.find((cartItem) => cartItem.id === item.id)

    if (alreadyExists) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
      return
    }

    setCart([...cart, { ...item, quantity: 1 }])
  }

  function removeFromCart(id: number) {
    const alreadyExists = cart.find((cartItem) => cartItem.id === id)

    if (alreadyExists && alreadyExists.quantity > 1) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
      return
    }

    setCart((cart) => cart.filter((cartItem) => cartItem.id !== id))
  }

  function removeAllFromId(id: number) {
    setCart((cart) => cart.filter((cartItem) => cartItem.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  const total = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }, [cart])

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeFromCart,
        removeAllFromId,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
