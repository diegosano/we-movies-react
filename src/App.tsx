import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])

  return <div></div>
}
