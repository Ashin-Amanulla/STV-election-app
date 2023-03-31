import Header from '@/Components/Header'
import Head from 'next/head'
import '@/styles/globals.css'
import Footer from '@/Components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>STV-election-app</title>
        <link rel="shortcut icon" href="/images/roe-logo20.png" type="image/x-icon" />
        <style>
          @import url(https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap);
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
        </style>
      </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
  
}
