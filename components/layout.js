import Head from "next/head"
import Header from "./header"

const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>K13WDEV - {title}</title>
      </Head>
      <Header/>

      <mian>
        {children}
      </mian>
    </>
  )
}

export default Layout