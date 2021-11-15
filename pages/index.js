import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>&nbsp;</p>
        <p>LIVE AND LET LIVE!{' '}</p>
        <p>LIKELION{' '}</p>
        <p>CONTENTS MANAGER{' '}</p>
        <p>&nbsp;</p>
        <p>
          {' '}
          <a href="https://ggingmin.notion.site/c6a97234524a46f786414b97caea6f98?v=f3e2c0b6c3e34c6794ad1abfbd5da31b">&#9889; Notion</a>
        </p>
        <p>
          {' '}
          <a href="https://github.com/ggingmin">&#128640; Github</a>
        </p>
        <p>  
          {' '}
          <a href="https://www.linkedin.com/in/ggingmin/">&#128293; Linkedin</a>
        </p>
      </section>
    </Layout>
  )
}