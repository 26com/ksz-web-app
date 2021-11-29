import React from "react";

import CustomButton from '../../../buttons/CustomButton/CustomButton';

export function CrmNews({news, size, id}){
  return (
    <div className={"news-carousel-item " + size}>
      {/* <div className={"news-media " + size} style={{backgroundImage: `url("${news.image}")`}}></div> */}
      <img src={news.image} style={{width: '100%', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}} alt="news-media"></img>
      <div className="news-text-content">
        <div className="news-text">
          <span className="news-title">{news.title}</span><br />
          <span className="news-content">{news.content}</span>
        </div>
        <CustomButton 
          variant="outlined" 
          className="main-carousel-btn" 
          localHref={'/news?id=' + id}
        >
          Подробнее
        </CustomButton>
      </div>
    </div>
  )
}