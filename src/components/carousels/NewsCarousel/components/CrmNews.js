import React from "react";
import { Link } from "react-router-dom";

import CustomButton from '../../../buttons/CustomButton/CustomButton';

export function CrmNews({news, size, id}){
  return (
    <div className={"news-carousel-item " + size}>
      <Link to={'/news?id=' + id} className="list-item">
        <img src={news.image} style={{width: '100%', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}} alt="news-media"></img>
      </Link>
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