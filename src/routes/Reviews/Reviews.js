import React from "react";
import './style.css'

import { Review } from "../../components/carousels/ReviewsCarousel/components/Review";

export function Reviews({content, size, setTabValue}) {
  // прокрутка при переходе
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // изменение положения ползунка в меню
  React.useEffect(() => {
    setTabValue(false)
  })
  return (
    <div className="reviews-route-container">
      {content.reviews.map(review => (
        <div className="reviews-route-item" key={review.id}>
          <Review review={review} />
        </div>
        ))}
    </div>
  )
}