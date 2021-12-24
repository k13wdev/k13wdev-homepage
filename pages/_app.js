import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
