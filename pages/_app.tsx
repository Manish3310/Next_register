import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/App.module.css';
import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Container } from 'react-bootstrap'
import Login from './Login'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <SessionProvider session={pageProps.session}>
      <main>
      <NavBar/>
      
    <Container className={styles.pageContainer}>
      <Component {...pageProps} />
    </Container>

    </main>
    </SessionProvider>
  )
}
