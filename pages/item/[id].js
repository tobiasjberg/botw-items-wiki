import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { titleCase } from '../../utils/utils'
import DescriptiveListRow from '../../components/DescriptiveListRow'

export async function getStaticPaths() {
  const res = await fetch('https://botw-compendium.herokuapp.com/api/v2')
  const resjson = await res.json()
  const data = resjson.data
  const creaturesfoodarray = data.creatures.food
  const creaturesnonfoodarray = data.creatures.non_food
  const equipmentarray = data.equipment
  const materialsarray = data.materials
  const monstersarray = data.monsters
  const treasurearray = data.treasure
  const creaturesfoodarrayids = creaturesfoodarray.map((creaturesfood) => creaturesfood.id);
  const creaturesnonfoodarrayids = creaturesnonfoodarray.map((creaturesnonfood) => creaturesnonfood.id);
  const equipmentarrayids = equipmentarray.map((equipment) => equipment.id);
  const materialsarrayids = materialsarray.map((materials) => materials.id);
  const monstersarrayids = monstersarray.map((monsters) => monsters.id);
  const treasurearrayids = treasurearray.map((treasure) => treasure.id);
  const ids = creaturesfoodarrayids.concat(creaturesnonfoodarrayids, equipmentarrayids, materialsarrayids, monstersarrayids, treasurearrayids)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const items = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`)
  const itemjson = await items.json()
  const itemData = itemjson.data
  return {
    props: {
      itemData: itemData
    },
  };
};

export default function ItemPage({itemData}) {
  const altText = "Image of "+ itemData.name;
  return (
    <Layout>
      <Head>
        <title>{titleCase(itemData.name)} - BOTW Items Wiki</title>
      </Head>
      <div className="pageTwoColumn">
        <div className="imageColumn">
          {itemData.image &&
            <img src={itemData.image} alt={altText} />
          }
        </div>
        <div>
          <h1>{titleCase(itemData.name)}</h1>
          {itemData.description &&
            <p>{itemData.description}</p>
          }
          <dl>
            {itemData.common_locations != null &&
              <div className="dlRow">
                <dt>Common Locations</dt>
                <dd>
                  <ul className="noBulletList">
                    {itemData.common_locations.map((location, index) => (
                      <li key={index}>{titleCase(location)}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            }
            {itemData.drops != null &&
              <div className="dlRow">
                <dt>Drops</dt>
                <dd>
                  <ul className="noBulletList">
                    {itemData.drops.map((drop, index) => (
                      <li key={index}>{titleCase(drop)}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            }
            {itemData.cooking_effect != null &&
              <div className="dlRow">
                <dt>Cooking Effect</dt>
                <dd>{itemData.cooking_effect}</dd>
              </div>
            }
            {itemData.hearts_recovered != null &&
              <div className="dlRow">
                <dt>Hearts Recovered</dt>
                <dd>{itemData.hearts_recovered}</dd>
              </div>
            }
            {itemData.attack != null &&
              <div className="dlRow">
                <dt>Attack</dt>
                <dd>{itemData.attack}</dd>
              </div>
            }
            {itemData.defense != null &&
              <div className="dlRow">
                <dt>Defense</dt>
                <dd>{itemData.defense}</dd>
              </div>
            }
          </dl>
          <dl>
            <h4>Test DL</h4>
              {Object.entries(itemData).map(([label, value], index) => (
                <DescriptiveListRow key={index} label={label} value={value} />
              ))}
          </dl>
        </div>
      </div>
      <p>Back to <Link href={`/${itemData.category.toLowerCase()}`}><a>Category - <span>{titleCase(itemData.category)}</span></a></Link></p>
    </Layout>
  );
};