import '../styles/global.css'
import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function HomePage({ 
  Component, 
  pageProps: {session, ...pageProps},
 }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(HomePage)