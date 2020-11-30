import { AppProps } from 'next/app'
import * as React from 'react'
import '../styles/bulma.scss'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js TypeScript Quickstart</title>
      </Head> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
