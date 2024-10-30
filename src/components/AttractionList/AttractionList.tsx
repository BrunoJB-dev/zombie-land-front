import type { Attraction } from '../../@types/attraction';
import { Link } from 'react-router-dom';

type AttractionListProps = {
  items: Attraction[];
};

function AttractionList({ items }: AttractionListProps) {
  return (
    <section>
      {items.map((attraction) => (
        <div key={attraction.id}>
          <img src={`http://localhost:3000/${attraction.image}`} alt="" />
         
          <h3> {attraction.name}</h3>
          <Link to="/">Je découvre</Link>
        </div>
      ))}
    </section>
  );
}

export default AttractionList;
