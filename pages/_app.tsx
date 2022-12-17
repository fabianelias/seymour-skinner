import '../styles/global.css'
import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function HomePage({ 
  Component, 
  pageProps: {session, ...pageProps},
 }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(HomePage)