import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


interface IUsPage {
  locale: string;
}

const UsPage = (props: IUsPage) => {

  const { locale } = props;
  const { t } = useTranslation('landing');

  return (
    <section className="mt-5 md:mt-[100px]" id="us-section">
      <h1 className="mb-4 text-6xl font-bold  text-gray-900  dark:text-white">
        {t("us_section.title")}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 md:mt-[30px]">
        {t("us_section.description")}
      </p>
      <Link href={`${locale}/contact`} className="">
        <button type="button" className="md:mt-[20px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-5 mb-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          {t("action-btn-contact")}
        </button>
      </Link>
      <Image
        alt="Online illustrations by Storyset"
        height={576}
        width={576}
        src="/resources/team-pana.svg"
        className="img-landing items-center self-center"
      />
    </section>
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



export default UsPage