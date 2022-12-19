import '../styles/global.css'
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next'
import TagManager from 'react-gtm-module'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function HomePage({ 
  Component, 
  pageProps: {session, ...pageProps},
 }: AppProps) {

  useEffect(() => {
      TagManager.initialize({ gtmId: process.env.GTM_ID });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(HomePage)