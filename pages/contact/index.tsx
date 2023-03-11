import Container from "../../components/Container"
import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from 'next-i18next';

const Contact = () => {

  const { t } = useTranslation("common")
  const title = t("head.title_join")

  return (
    <Container { ...{title: title}}>
      <div className='w-full'>
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