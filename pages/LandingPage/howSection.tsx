import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Row, Col } from 'antd';

interface IHowSection {
  locale: string;
}
const HowSection = (props: IHowSection) => {

  const { locale } = props;
  const { t } = useTranslation('landing');

  return (
    <Row id='how-section'>
      <Col xs={24} md={14} lg={14} className={'md:mt-[55px] text-left content-center'}>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("how_section.section_1.title")}</h3>
              <p className="my-4 font-light">
                {t("how_section.section_1.description")}
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("how_section.section_2.title")}</h3>
              <p className="my-4 font-light">
                {t("how_section.section_2.description")}
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("how_section.section_3.title")}</h3>
              <p className="my-4 font-light">
                {t("how_section.section_3.description")}
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("how_section.section_4.title")}</h3>
              <p className="my-4 font-light">
                {t("how_section.section_4.description")}
              </p>
            </blockquote>
          </figure>
        </div>
      </Col>
      <Col xs={24} md={10} lg={10} className={'md:mt-[100px] text-right content-center items-center pl-10'}>
        <h3 className="mb-4 text-5xl font-bold  text-gray-800 dark:text-white">
          {t("how_section.title")}
        </h3>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {t("how_section.description_section")}
        </p>
        <br />
        <Link href={`${locale}/contact`} >
          <button type="button" className="text-white bg-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {t("action-btn-contact")}
            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </Link>

      </Col>
    </Row>
  )
}

export default HowSection