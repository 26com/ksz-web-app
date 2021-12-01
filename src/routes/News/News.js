import React from "react";
import { useSearchParams } from "react-router-dom";

import { InstagramNews } from "../../components/carousels/NewsCarousel/components/InstagramNews";
import { CrmNews } from "../../components/carousels/NewsCarousel/components/CrmNews";
import './style.css'

export function News({content, size, setTabValue}) {
  let [searchParams] = useSearchParams();
  window.scrollTo({ top: 0, behavior: 'smooth' })
  const newsId = searchParams.get('id')
  React.useEffect(() => {
    setTabValue(false)
  }, [setTabValue])
  return (
    <>
    {(!newsId && newsId !== 0) &&
      <div className="news-route-container">
        {Object.keys(content.news).map(key => {
          if (content.news[key].type === 'crm') {
            return (
              <div className={"news-route-item " + size} key={key}>
                <CrmNews news={content.news[key]} size={size} id={key} key={key} />
              </div>
            )
          }
          else if (content.news[key].type === 'instagram') {
            return (
              <div className={"news-route-item " + size} key={key}>
                <InstagramNews news={content.news[key]} size={size} id={key} key={key} />
              </div>
            )
          }
          return null
        })}
      </div>
    }
    {(newsId && content.news[newsId].type === 'crm') && 
      <div className={"current-news-item " + size}>
        <div className="current-news-img">
          <img src={content.news[newsId].image} alt="news-media" />
        </div>
        <div className="current-news-content">
          <div className="current-news-title">{content.news[newsId].title}</div>
          <div className="current-news-text">{content.news[newsId].content}</div>
        </div>
      </div>
    }
    {(newsId && content.news[newsId].type === 'instagram') && 
      // <InstagramNews news={content.news[newsId]} size={size} />
      <div className={"current-news-item " + size}>
        <div className="current-news-img">
          <img src={content.news[newsId].instagramMediaUrl} alt="news-media" />
        </div>
        <div className="current-news-content">
          <div className="current-news-text">{content.news[newsId].title}</div>
        </div>
      </div>
    }
    </>
  )
}