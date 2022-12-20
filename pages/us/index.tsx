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