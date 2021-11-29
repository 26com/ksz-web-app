import React, { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { Review } from './components/Review';
import { ContentContext } from '../../../App';
import './style.css'

export function ReviewsCarousel(){
  const {content, size} = useContext(ContentContext)
  let perPage = 100
  if (size === 'lg') perPage = 50
  return (
    <div className={"reviews-container " + size}>
      <h1 className="reviews-carousel-label">Отзывы наших пациентов</h1>
      <Carousel 
        // autoPlay 
        // interval={1115000} 
        // infiniteLoop 
        showArrows={false} 
        showStatus={false} 
        showThumbs={false}
        emulateTouch
        // renderArrowPrev={(clickHandler) => {
        //     return <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={clickHandler} className="reviews-carousel-prev"/>
        //   }
        // }
        // renderArrowNext={(clickHandler) =>
        //     <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={clickHandler} className="reviews-carousel-next"/>
        // }
        centerMode
        centerSlidePercentage={perPage}
      >
        {content.reviews.map(review => (
          <Review review={review} key={review.id}/>
        ))}
      </Carousel>
      <div className="reviews-btn-container">
        <CustomButton 
          variant="outlined" 
          className="reviews-carousel-btn" 
          localHref={'/reviews'}
        >
          Все отзывы
        </CustomButton> 
      </div>
    </div>
  );
}