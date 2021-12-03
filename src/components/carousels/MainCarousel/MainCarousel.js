import React, { useContext } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import './style.css'

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { ContentContext } from '../../../App';

export function MainCarousel(){
  const {content, size} = useContext(ContentContext)
  return (
    <div className="main-carousel-container">
      <Splide options={ {
        type: 'loop',
        rewind: true,
        width: '100%',
        gap: '1rem',
        perPage: 1,
        arrows: false,
        autoplay: true,
        interval: 3000,
        pauseOnHover: true
      } }>
        {content.slides && content.slides.map((item) => {
          return (
            <SplideSlide key={item.id}>
            <div className={"main-carousel-item " + size} style={{backgroundImage: `url("${item.image}")`}} key={item.id}>
              <div dangerouslySetInnerHTML={{ __html: item.content }} style={{maxWidth: '50%'}}/>
              {item.mainButtonTitle &&
                <CustomButton 
                  variant="contained" 
                  className={"main-carousel-btn " + size} 
                  href={item.mainButtonUrl}
                >
                  {item.mainButtonTitle}
                </CustomButton>
              }
              {item.additionalButtonTitle &&
                <CustomButton 
                  variant="outlined" 
                  className={"main-carousel-btn " + size}  
                  href={item.additionalButtonUrl}
                >
                  {item.additionalButtonTitle}
                </CustomButton>
              }
            </div>
            </SplideSlide>
          )
        })
        }
      </Splide>
    </div>
  );
}