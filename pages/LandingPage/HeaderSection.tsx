import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface IHeaderSection {
  locale: string;
}

const HeaderSection = (props: IHeaderSection) => {

  const { locale } = props;
  const { t } = useTranslation('landing')

  return (
    <section className="mt-5 md:mt-[50px]" id="header-section">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {t("title_1")}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {t("subtitle")}
      </p>
      <Link href={`${locale}/contact`} className="md:mt-[20px] text-white bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-lg px-5 py-2.5 mr-5 mb-5 dark:bg-blue-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        <button type="button" >
          {t("action-btn-contact")}
        </button>
      </Link>

      <Image
        alt="Online illustrations by Storyset"
        height={450}
        width={450}
        src="/resources/team-rafiki.svg"
        className="img-landing items-center self-center"
      />
    </section>
  )
}

export default HeaderSection