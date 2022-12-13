import React from "react"
import PricePlan from "../../components/PricePlan"
import { useTranslation } from 'next-i18next';
import { pricesPlanes } from "../../config-prices";

interface IPricesSection {
  locale: string;
}
const PriceSection = (props: IPricesSection) => {

  const { locale } = props;
  const { t } = useTranslation('common')
  const planes: any = priceList(locale)

  return (
    <div className="md:mt-[50px] md:mb-[50px]" id="price-section">
      <h1 className="mb-10 text-5xl font-bold  text-gray-900 dark:text-white">
        {t("prices_section.title")}
      </h1>
      <br />
      <div className="mt-11 flex flex-col space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {planes.map((plan) => {
          return (<PricePlan key={plan.namePlan} priceDetail={plan} />)
        })}
      </div>
      <br />
    </div>
  )
}

const priceList = (locale) => {
  return pricesPlanes(locale);
}

export default PriceSection
