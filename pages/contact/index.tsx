import Container from "../../components/Container"
import React, { useEffect } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from 'next-i18next';
import TagManager from 'react-gtm-module';

const Contact = () => {

  const { t } = useTranslation("common")
  const title = t("head.title_join")

  const tagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    page: {
      path: '/Register',
      title: title
    }
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])


  return (
    <Container { ...{title: title}}>
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQBdBTdWQgEYeNWWo2lNFqMW0ttbkTIA_WPbjZntSbFg1i3g/viewform?embedded=true" width="100%" height="1100">Cargando…</iframe>
      </div>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common", "landing"]))
    }
  }
}


export default Contact