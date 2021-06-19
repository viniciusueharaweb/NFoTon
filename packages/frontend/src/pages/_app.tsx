import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '../styles/globalStyles'

import { Theme } from '../hooks/useTheme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  )
}
