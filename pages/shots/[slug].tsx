import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../../components/Container";
import { useTranslation } from "next-i18next";
import { parseISO, format } from 'date-fns';
import { Row, Col } from 'antd';
import Link from "next/link";
import { getSinglePost, getAllPublished } from "../../services/notion-services"
import { marked } from 'marked';
import { Suspense } from "react";
import Duolingo from '../../components/Duolingo';


const ArticlePage = (props: any) => {
  const { shot } = props;

  const { t } = useTranslation('landing')
  const dateShot = new Date(shot.metadata.date).toISOString();
  return (
    <Container
      title={`${shot.metadata.title} `}
      description={shot.metadata.description}
      date={new Date(shot.metadata.date).toISOString()}
      type="article"
    >

      <Row >
        <article className="container">
          <div className="p-4 mb-4 text-sm text-yellow-800 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 text-center" role="alert">
            {`${t("call_actions.cta_yellow")} `}
            <Link href={`${props.locale}/contact`} ><span className="font-medium">{t("action-btn-contact")}</span></Link>
          </div>
          <Col className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-[50px] md:mt-[70px]">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              {shot.metadata.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full mt-2 pb-3 md:flex-row md:items-center  border-b-2">
              <div className="flex items-center">
                <h2 className="mb-2 text-gray-900 md:text-6xl dark:text-gray-100">
                  {shot.metadata.icon}
                </h2>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 ml-5">
                  {'Talk Fluency | '}
                  {format(parseISO(dateShot), 'MMMM dd, yyyy')}
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                <small><i>{shot.metadata.readingTime}</i></small>
              </p>
            </div>
            <Suspense fallback={false}>
              <div className="w-full mt-4 prose dark:prose-dark text-lg">
                <div dangerouslySetInnerHTML={{ __html: marked(shot.markdown) }} />
              </div>
              <Duolingo type={'banner'}></Duolingo>
            </Suspense>
          </Col>
        </article>
      </Row>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const posts = await getAllPublished({ type: 'shots', locale: '' });
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};


export const getStaticProps = async ({ locale, params }) => {
  const shot = await getSinglePost(params.slug)

  return {
    props: {
      shot,
      ...(await serverSideTranslations(locale, ["common", "landing"]))
    },
    revalidate: 60
  };
};


export default ArticlePage