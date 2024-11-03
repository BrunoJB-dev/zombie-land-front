import type { Attraction } from '../../@types/attraction';

import "./AttractionDetail.scss"

type AttractionListProps = {
  detail: Attraction;
}

function AttractionDetail({ detail }: AttractionListProps) {
  return (
    <div>
      <div className='banner-datail'>
          <h1>{detail.name}</h1>
      </div>

      <div className='div-article'>
        <div>
          <p>{detail.description_short}</p>
          <p>{detail.description_long}</p>
        </div>

          <img className='img' src={`http://localhost:3000/${detail.image}`} alt={detail.name} />
      </div>

        <div className='article-img'>
          <p>{detail.closing_time}</p>
          <p>{detail.height_restriction} cm</p>
          <p>{detail.disable_access}</p>
          <p>{detail.weather_hazard}</p>
          <p>{detail.health_hazard}</p>
        </div>

      
    </div>
  )
}

export default AttractionDetail;