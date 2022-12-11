import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

interface IHowSection {
  locale: string;
}
const HowSection = (props: IHowSection) => {

  const { locale } = props;
  const { t } = useTranslation('landing');

  return (
    <section className="mt-11" id="how-section">

      <h3 className="mb-4 text-5xl font-bold  text-gray-800 dark:text-white">
        {t("how_section.title")}
      </h3>
      <br />
      <p className="mb-6 w-full text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {t("how_section.description_section")}
      </p>
      <br />
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
      <br />
      <Link href={`${locale}/contact`}>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 mr-5 mb-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          {t("action-btn-contact")}
        </button>
      </Link>
      <br />
      <Image
        alt="Online illustrations by Storyset"
        height={576}
        width={576}
        src="/resources/team-cuate.svg"
        className="img-landing items-center self-center"
      />
    </section>
  )
}

export default HowSection