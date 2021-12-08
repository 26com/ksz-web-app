import React, { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { Review } from './components/Review';
import { ContentContext } from '../../../App';
import './style.css'

export function ReviewsCarousel(){
  // присвоение переменных объекта контекста
  const {content, size} = useContext(ContentContext)
  // установка размера изображения в каруселе
  let perPage = 100
  if (size === 'lg') perPage = 50
  return (
    <div className={"reviews-container " + size}>
      <h1 className="reviews-carousel-label">Отзывы наших пациентов</h1>
      {/* инициализация карусели */}
      <Carousel
        showArrows={false} 
        showStatus={false} 
        showThumbs={false}
        emulateTouch
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