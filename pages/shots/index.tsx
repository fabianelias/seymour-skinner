import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Container from "../../components/Container"
import { Row, Col } from "antd"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import Image from "next/image"
import BlogPost from "../../components/BlogPosts"
import { Suspense } from 'react';
import { getAllPublished } from "../../services/notion-services"
import SuspenseSkeleton from "../../components/SuspenseSkeleton"
import React from "react"
import Duolingo from '../../components/Duolingo';
interface IShort {
  slug: string;
  frontMatter: { [key: string]: string };
}
interface IShorts {
  locale: string;
  shorts: Array<IShort>;
}

const Shorts = (props: any) => {

  const { t } = useTranslation('landing')
  const { locale, shots } = props;
  const metaData = {
    title: t("blog.head.title"),
    descripton: t("blog.head.description")
  }

  return (

    <Suspense fallback={< SuspenseSkeleton />}>
      <Container {...metaData} >
          <Row className='md:mt-[30px] px-8  bg-slate-100 dark:bg-transparent rounded-lg'>
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
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </Link>
              {' '}
            </Col>
            <Col xs={24} md={14} lg={14} className={'hidden md:block lg:block'}>
              <Image
                alt="Online illustrations by Storyset"
                height={700}
                width={700}
                src="/resources/team-pana.svg"
                className="img-landing"
              />
            </Col>
          </Row>
          <Row className="lg:mt-[100px] lg:mb-[300px]">
            <Col xs={24} md={14} lg={14} className={'dark:bg-gray-900 p-6 rounded-xl'}>
              {!shots.length ? (
                <h1>No hay shots</h1>
              ) :
                shots.map((shot) => (
                  <BlogPost
                    key={shot.id}
                    slug={shot.slug}
                    title={shot.title}
                    excerpt={shot.description}
                  />
                ))
              }
            </Col>
            <Col xs={24} md={10} lg={10}>
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
      ...(await serverSideTranslations(locale, ["landing", "common"]))
    },
    revalidate: 60
  };
};


export default Shorts