import React, { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
// import { Carousel } from 'react-responsive-carousel';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { CrmNews } from './components/CrmNews';
import { InstagramNews } from './components/InstagramNews';
import { ContentContext } from '../../../App';
import './style.css'

export function NewsCarousel(){
  const {content, size} = useContext(ContentContext)
  const sortNews = (news) => {
    const sortNews = {}
    const keys = Object.keys(news)
    for (let i = 0; i < 9; i++) {
      sortNews[keys[i]] = news[keys[i]]
    }
    return sortNews
  } 
  let perPage = 1
  if (size === 'md') perPage = 2
  if (size === 'lg') perPage = 3
  return (
    <div className="news-container">
      <h1 className="news-carousel-label">Новости</h1>
      <Splide options={ { 
        rewind: true,
        width: '100%',
        gap: '1rem',
        lazyLoad: true,
        perPage: perPage,
        arrows: false,
      } }>
        {Object.keys(sortNews(content.news)).map(key => {
          if (content.news[key].type === 'crm') {
            return (
              <SplideSlide key={content.news[key].id}>
                <CrmNews news={content.news[key]} size={size} id={key} />
              </SplideSlide>
            )
          }
          else if (content.news[key].type === 'instagram') {
            return (
              <SplideSlide key={content.news[key].id}>
                <InstagramNews news={content.news[key]} size={size} id={key} />
              </SplideSlide>
            )
          }
          return null
        })}
      </Splide>
      <div className="news-btn-container">
        <CustomButton 
          variant="outlined" 
          className="main-carousel-btn" 
          localHref={'/news'}
        >
          Все новости
        </CustomButton> 
      </div>
    </div>
  );
}