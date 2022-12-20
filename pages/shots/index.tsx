import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Container from "../../components/Container"
import { Row, Col } from "antd"
import Link from "next/link"
import Image from "next/image"
import BlogPost from "../../components/BlogPosts"
import { Suspense } from 'react';
import { getAllPublished } from "../../services/notion-services"
import React from "react"
import Duolingo from '../../components/Duolingo';
import Newsletter from '../../components/Newsletter';

const Shorts = (props: any) => {

  const { t } = useTranslation('landing')
  const { locale, shots } = props;
  const metaData = {
    title: t("blog.head.title"),
    descripton: t("blog.head.description")
  }

  return (

    <Suspense fallback={false}>
      <Container {...metaData} >
          <Row className='px-8  bg-slate-100 dark:bg-transparent rounded-lg'>
            <Col xs={24} md={10} lg={10} className={'md:mt-[50px] text-left content-center py-4'}>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {t("blog.title")}
              </h1>
              <br />
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                {t("blog.description")}
              </p>
              <Link href={`${locale}/contact`} >
                <button type="button" className="text-white bg-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {t("action-btn-contact")}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                    </button>
              </Link>
              {' '}
            </Col>
            <Col xs={24} md={14} lg={14} className={'hidden md:block lg:block'}>
              <Image
                alt="Online illustrations by Storyset"
                height={600}
                width={600}
                src="/resources/team-pana.svg"
                className="img-landing"
              />
            </Col>
          </Row>
          <Row className="lg:mt-[30px] lg:mb-[300px]">
            <Col span={24} className={'xs:block sm:block hidden'}>
            <div className="p-4 mb-4 text-sm text-yellow-800 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 text-center" role="alert">
              {`${t("call_actions.cta_yellow")} `}
              <Link href={`${props.locale}/contact`} ><span className="font-medium">{t("action-btn-contact")}</span></Link>
            </div>
            </Col>
            <Col xs={24} sm={15} md={16} lg={16} className={'dark:bg-gray-900 mt-5 rounded-xl'}>
              {!shots.length ? (
                <h1>No hay shots</h1>
              ) :
                shots.map((shot) => (
                  <BlogPost
                    key={shot.id}
                    slug={shot.slug}
                    title={shot.title}
                    excerpt={shot.description}
                    icon={shot.icon}
                  />
                ))
              }

              <Newsletter></Newsletter>
            </Col>
            <Col xs={24} md={8} lg={8} className={'md:border-l-2 mt-10 px-2'}>
              <Duolingo></Duolingo>
            </Col>
          </Row>
      </Container>
    </Suspense>
  )
}

export const getStaticProps = async ({ locale }) => {
  const data = await getAllPublished({ type: 'shots', locale: locale })
  return {
    props: {
      shots: data,
      locale: locale,
      ...(await serverSideTranslations(locale, ["common", "landing"]))
    },
    revalidate: 60
  };
};


export default Shorts