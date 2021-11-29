import React, { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { ContentContext } from '../../../App';

export function MainCarousel(){
  const {content, size} = useContext(ContentContext)
  return (
    <div className="main-carousel-container">
      <Carousel 
        // autoPlay 
        // interval={1115000} 
        infiniteLoop 
        showArrows={false} 
        showStatus={false} 
        showThumbs={false}
        emulateTouch
      >
        {content.slides && content.slides.map((item) => {
          return (
            <div className={"main-carousel-item " + size} style={{backgroundImage: `url("${item.image}")`}} key={item.id}>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
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
          )
        })
        }
      </Carousel>
    </div>
  );
}