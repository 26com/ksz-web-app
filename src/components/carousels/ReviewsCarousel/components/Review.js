import React from "react";
import { Rating } from '@mui/material';
import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

export function Review({review}){
  return (
    <div className="reviews-carousel-item" key={review.id}>
      <div className="reviews-estimate">
        <Rating name="read-only" value={review.estimation} readOnly color="primary" className="reviews-stars" />
      </div>
      <div className="rewies-text">
        <div className="reviews-title">{review.title}</div>
        <div className="reviews-content">{review.content}</div>
      </div>
      <div className="reviews-date">{moment(review.dateCreate).format('LL')}</div>
    </div>
  )
}