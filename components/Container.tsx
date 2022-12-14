import { useRouter } from "next/router";
import Nav from "./Nav";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Script from 'next/script'

export default function Container(props: any) {

  const { children, ...customMeta } = props;

  const router = useRouter();

  const { t } = useTranslation('common')

  const metaData = {
    title: '',
    description: t(""),
    image: '',
    type: 'website',
    ...customMeta
  }

  return (
    <div>
      <Head>
        <title>{`${metaData.title} ${t("head.title")}`}</title>
        <meta name='robots' content='follow, index' />
        <meta content={metaData.description} name='description' />
        <meta property='og:url' content={`https://www.talkfluency.com`} />
        <link rel='canonical' href={`https://www.talkfluency.com`} />
        <meta property='og.type' content={metaData.type} />
        <meta property='og:site_name' content='Fabian Bravo Gajardo' />
        <meta property='og:description' content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:image" content={metaData.image} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-5BG8WT6B5V`}
      />
      <Script
        id="ga-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5BG8WT6B5V', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />

      <Nav locale={'es'} />
      <main id="skip" className="flex-wrap p-5">
        {children}
        <br />
        <footer className="container p-4  bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Learn</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          </ul>
        </footer>
        <br />
      </main>
    </div>
  )
}
