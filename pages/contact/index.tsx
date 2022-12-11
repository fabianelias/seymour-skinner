import Container from "../../components/Container"
import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Contact = () => {
  return (
    <Container>
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScI6NET4hPfp2PwcfQm3TdE7R-YN1M9ynMP4J6BDZfzZLuZTg/viewform?embedded=true" width="100%" height="1500px">Cargando…</iframe>
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