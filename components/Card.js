import Link from 'next/link'
import { titleCase } from '../utils/utils'

const Card = ({ name, id, image }) => {
  return (
    <div key={id} className="card">
      <Link href={`/item/${id.toString().toLowerCase()}`}>

        <p>{titleCase(name)}</p>
        <img src={image} className="icon" />

      </Link>
    </div>
  );
};

export default Card