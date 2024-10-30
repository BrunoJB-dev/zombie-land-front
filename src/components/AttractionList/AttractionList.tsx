import type { Attraction } from '../../@types/attraction';

type AttractionListProps = {
  items: Attraction[];
}

function AttractionList({items}: AttractionListProps){
  return(
    <section>
    {items.map((attraction) => (
      <div key={attraction.id}>
        <h3>attraction.name</h3>

      </div>
    )
    )}
    </section>
  )
}

export default AttractionList;