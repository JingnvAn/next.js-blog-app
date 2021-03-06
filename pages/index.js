import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts.js'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there!</p>
        <p>I am a rising software engineer currently studying computer science at Brandeis University. </p>
        <p>I speak Mandarin Chinese and English.</p>
        <p>My favorite Singer is Ed Sheeren.</p>
        <p>Find me on {' '}
          <a href="https://www.linkedin.com/in/jingnuan/">Linkedin</a>
          {', '} or checkout what project I'm doing on {' '}
          <a href="https://github.com/JingnvAn">GitHub.</a>
        </p>
      </section>

      <section>
        <Link href="/posts/tryout-page" >
          <a> Go to tryout page ➡️</a>
        </Link>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}