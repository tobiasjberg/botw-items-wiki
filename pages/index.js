import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Script from 'next/script'

export async function getStaticProps() {
  const categoriesarray = ["creatures",  "equipment",  "materials",  "monsters",  "treasure"]
  return {
    props: {
      categoriesarray
    }
  }
}

export default function Home({ categoriesarray }) {
  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-K8X8JPQ84L" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-K8X8JPQ84L');
        `}
      </Script>
      <Head>
          <title>BOTW Items Wiki</title>
      </Head>
      <section className="heroSection">
        <div className="heroText">
          <h1 className="title">Breath of the Wild Wiki</h1>
          <p className="description">
            An unofficial resource for finding information about all of the items you will find in The Legend of Zelda: Breath of the Wild.
          </p>
        </div>
      </section>
      <section>
        <h2 className="sectionTitle">Browse by Category</h2>
        <div className="grid">
          {categoriesarray.map((title) => (
            (<Link href={`/${title.toLowerCase()}`} className="button">
              <span>{title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</span>
            </Link>)
          ))}
        </div>
      </section>
    </Layout>
  );
}
