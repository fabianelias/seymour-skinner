import { Suspense } from "react"
import fs from "fs"
import path from 'path';
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../../components/Container";
import { useTranslation } from "next-i18next";
import { marked } from 'marked';
import { parseISO, format } from 'date-fns';
import { Row, Col} from 'antd';
import Image from "next/image";
import Link from "next/link";

interface IPost {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tweets?: any[];
};


const ArticlePage = (props: any) => {
  const { frontMatter, content, slug } = props;

  const { t } = useTranslation('landing')

  return (
    <Container
      title={`${frontMatter.title} `}
      description={frontMatter.excerpt}
      date={new Date(frontMatter.date).toISOString()}
      type="article"
    >
      <div className="container p-4 mb-4 text-sm text-yellow-800 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 text-center" role="alert">
        {`${t("call_actions.cta_yellow")} `}
        <Link href={`${props.locale}/contact`} ><span className="font-medium">{t("action-btn-contact")}</span></Link>
      </div>
      <Row >
        <Col  className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-[200px] md:mt-[70px]">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex items-center">
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {'Shot - TalkFluency | '}
                {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              <small><i>Lectura de{frontMatter.readingTime}.</i></small>
            </p>
          </div>
          <Suspense fallback={null}>
            <div className="w-full mt-4 prose dark:prose-dark max-w-none">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
            </div>
          </Suspense>
        </Col>
      </Row>
    </Container>
  )
}

export async function getStaticPaths({ locales }) {

  let shots = []
  locales.map((locale) => {
    const files = fs.readdirSync(path.join(`_shots/${locale}`))
    files.filter(file => file.includes(":prod.md")).map((file) => {
      shots.push({
        params: {
          slug: file.replace(':prod.md', ''),
          locale: locale
        }
      })
    })
  });

  return {
    paths: shots,
    fallback: true
  }

}

export async function getStaticProps({ locale, params: { slug } }) {

  const markdownWithMeta = fs.readFileSync(
    path.join(`_shots/${locale}/${slug}:prod.md`),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontMatter,
      slug,
      content,
      locale: locale,
      ...(await serverSideTranslations(locale, ["common", "landing"]))
    }
  }
}

export default ArticlePage