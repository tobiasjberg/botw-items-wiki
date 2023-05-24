import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Card from '../components/Card'
import { titleCase } from '../utils/utils'

export async function getStaticPaths() {
  const categoriesarray = ["creatures",  "equipment",  "materials",  "monsters",  "treasure"]
  const paths = categoriesarray.map((category) => ({ params: { category } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const items = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`)
  const itemjson = await items.json()
  const itemData = itemjson.data

  return {
    props: {
      itemData: itemData,
      category: category
    },
  };
};

export default function ItemPage({itemData, category}) {
  if (category == "creatures") {
    itemData = itemData.food.concat(itemData.non_food)
  }
  const itemDataSorted = itemData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  return (
    <Layout>
      <Head>
        <title>{titleCase(category)} - BOTW Items Wiki</title>
      </Head>
      <h1 className="sectionTitle">{titleCase(category)}</h1>
      <div className="grid">
        {itemDataSorted.map(({ name, id, image }) => (
          <Card name={name} id={id} image={image}  />
        ))}
      </div>
      <Link href="/"><a>Home</a></Link>
    </Layout>
  );
};