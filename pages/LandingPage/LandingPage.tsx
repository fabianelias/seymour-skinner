import React, { useEffect } from "react";
import Container from "../../components/Container";
import HowSection from './howSection';
import HeaderSection from './HeaderSection';
import UsPage from '../us/index';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import TagManager from 'react-gtm-module';

const LandingPage = (props) => {

  const { t } = useTranslation('landing')

  return (
    <Container locale={props.locale}>
      <div className="container">
        <div className="container p-4 mb-4 text-sm text-yellow-800 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 text-center" role="alert">
          {`${t("call_actions.cta_yellow")} `}
          <Link href={`${props.locale}/contact`} ><span className="font-medium">{t("action-btn-contact")}</span></Link>
        </div>
        <HeaderSection locale={props.locale} />

        <div className="p-4 my-11 text-sm text-gray-700 bg-slate-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
          {`${t("how_section.description_section")}`}
        </div>

        <HowSection locale={props.locale} />

        <UsPage locale={props.locale} />

      </div>
    </Container>
  )
}

export default LandingPage