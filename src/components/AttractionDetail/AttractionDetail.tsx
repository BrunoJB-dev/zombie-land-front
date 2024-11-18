import type { Attraction } from '../../@types/attraction';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./AttractionDetail.scss"

type AttractionListProps = {
  detail: Attraction;
}

function AttractionDetail({ detail }: AttractionListProps) {
  return (
    <div>
      <div className='banner-detail'>
         <h1>{detail.name}</h1>
      </div>

      <div className='div-article'>
        <div className='article-img'>         
          <p>{detail.description_long}</p>
          <Carousel className='img'        
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            stopOnHover
            emulateTouch>
            <div>
              <img src={`http://localhost:3000/${detail.image}`} alt={detail.name} />
            </div>
            <div>
              <img src={`http://localhost:3000/${detail.caroussel1}`} alt={detail.name} />
            </div>
            <div>
              <img src={`http://localhost:3000/${detail.caroussel2}`} alt={detail.name} />
            </div>
            <div>
              <img src={`http://localhost:3000/${detail.caroussel3}`} alt={detail.name} />
            </div>
          </Carousel>
          
        </div>

        <p>{detail.description_short}</p>
      </div>

    <div className='div-test'>
        <div className='detail-icon'>
          <div>
            <i className="fa-solid fa-clock fa-2xl"/>
            <p className='detail-time'>{detail.opening_time}</p>
            <p>{detail.closing_time}</p>
          </div>
          <div>
            <i className="fa-solid fa-restroom fa-2xl"/>
            <p>{detail.height_restriction} m</p>
          </div>
          <div>
            <i className="fa-brands fa-accessible-icon fa-2xl"/>
            <p>{detail.disable_access}</p>
          </div>
          <div>
            <i className="fa-solid fa-cloud-sun fa-2xl"/>
            <p>{detail.weather_hazard}</p>
          </div>
          <div>
            <i className="fa-solid fa-notes-medical fa-2xl"/>
            <p>{detail.health_hazard}</p>
          </div>
        </div>
    </div>

      
    </div>
  )
}

export default AttractionDetail;