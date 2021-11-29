import React from "react";
import './style.css'

import { Review } from "../../components/carousels/ReviewsCarousel/components/Review";

export function Reviews({content, size, setTabValue}) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  React.useEffect(() => {
    setTabValue(false)
  })
  return (
    <div className="reviews-route-container">
      {content.reviews.map(review => (
        <div className="reviews-route-item">
          <Review review={review} key={review.id}/>
        </div>
        ))}
    </div>
  )
}