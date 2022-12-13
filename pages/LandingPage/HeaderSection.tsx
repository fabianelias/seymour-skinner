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
    <section className="mt-5 md:mt-[100px]" id="header-section">
      <h1 className="mb-4 text-7xl font-bold  text-gray-900  dark:text-white">
        {t("title_1")}
      </h1>
      <p className="mb-6 text-2xl font-normal text-gray-500 sm:px-16 xl:px-48 dark:text-gray-400 md:mt-[30px]">
        {t("subtitle")}
      </p>
      <Link href={`${locale}/contact`} className="">
        <button type="button" className="md:mt-[20px] text-white bg-yellow-500  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-2xl px-5 py-2.5 mr-5 mb-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          {t("action-btn-contact")}
        </button>
      </Link>
      <Image
        alt="Online illustrations by Storyset"
        height={576}
        width={576}
        src="/resources/team-rafiki.svg"
        className="img-landing items-center self-center"
      />
    </section>
  )
}

export default HeaderSection