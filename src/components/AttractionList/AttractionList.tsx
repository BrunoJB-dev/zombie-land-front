import type { Attraction } from '../../@types/attraction';
import { Link } from 'react-router-dom';

import "./AttractionList.scss"

type AttractionListProps = {
  items: Attraction[];
};

function AttractionList({ items }: AttractionListProps) {
  return (
    <section>
      {items.map((attraction) => (
        <div className='attraction-card' key={attraction.id}>
          <img src={`http://localhost:3000/${attraction.image}`} alt="" />
          <div>
            <p>{attraction.categories[0].name}</p>
            <h3> {attraction.name}</h3>
            <Link className='attraction-link' to={`/attractions/${attraction.id}`}>Je découvre</Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AttractionList;
