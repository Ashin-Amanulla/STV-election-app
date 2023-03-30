import Header from '@/Components/Header'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>STV-election-app</title>
        <link rel="shortcut icon" href="/images/roe-logo20.png" type="image/x-icon" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
        </style>
      </Head>
    <Header />
    <Component {...pageProps} />
    </>
  )
  
}
