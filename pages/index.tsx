import LandingPage from "./LandingPage/LandingPage"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common", "landing"]))
    }
  }
}

export default LandingPage