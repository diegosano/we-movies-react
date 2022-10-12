import { ReactNode } from 'react'

import { Header } from '../../components/Header'

import styles from './styles.module.css'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}
