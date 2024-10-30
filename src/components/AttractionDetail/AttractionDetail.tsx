import type { Attraction } from '../../@types/attraction';

type AttractionListProps = {
  detail: Attraction;
}

function AttractionDetail({ detail }: AttractionListProps) {
  return (
    <article>
        <h1>{detail.name}</h1>
        <div>Attraction detail 1</div>
    </article>
  )
}

export default AttractionDetail;