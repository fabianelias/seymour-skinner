import '../styles/global.css'
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next'
import TagManager from 'react-gtm-module'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'



const HomePage =({ 
  Component, 
  pageProps: {session, ...pageProps},
 }: AppProps) => {

  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    page: {
      path: '/home'
    }
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])


  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(HomePage)