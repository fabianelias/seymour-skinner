import '../styles/global.css'
import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { GTMPageView } from '../utils/gtm';
import { useEffect } from 'react';
import Router from 'next/router';

const HomePage = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {

  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(HomePage)