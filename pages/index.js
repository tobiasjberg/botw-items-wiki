import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

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
            <Link href={`/${title.toLowerCase()}`}><a className="button">
              <span>{title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</span>
            </a></Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}
