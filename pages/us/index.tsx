import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Row, Col } from 'antd';


interface IUsPage {
  locale: string;
}

const UsPage = (props: IUsPage) => {

  const { locale } = props;
  const { t } = useTranslation('landing');

  return (
    <Row id={'us-section'}>
      <Col md={24} className={'items-center content-center text-center'}>
        <Image
          alt="Online illustrations by Storyset"
          height={576}
          width={576}
          src="/resources/team-rafiki.svg"
          className="img-landing items-center self-center"
        />
        <h1 className="mb-4 text-6xl font-bold  text-gray-900  dark:text-white">
          {t("us_section.title")}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 md:mt-[30px]">
          {t("us_section.description")}
        </p>
        <Link href={`${locale}/contact`} >
          <button type="button" className="text-white bg-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {t("action-btn-contact")}
            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </Link>
        <Image
          alt="Online illustrations by Storyset"
          height={576}
          width={576}
          src="/resources/team-pana.svg"
          className="img-landing items-center self-center"
        />
      </Col>
    </Row>
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