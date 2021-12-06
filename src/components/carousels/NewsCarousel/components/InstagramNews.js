import React, {useState, useRef, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import CustomButton from '../../../buttons/CustomButton/CustomButton';

export function InstagramNews({news, size, id}){ 
  const [preview, setPreview] = useState(true)
  const myRef = useRef(null)
  const instImg = useRef(null)
  const clickHandler = () => {
    setPreview(false)
  }
  useEffect(() => {
    if (myRef.current) myRef.current.play()
  }, [preview])
  useEffect(() => {
    if (instImg.current) {
      const width = instImg.current.clientWidth
      instImg.current.style.height = width + 'px'
    }
  }, [])
  return (
    <div className="news-carousel-item">
      {(news.instagramMediaType === 'IMAGE' || news.instagramMediaType === 'CAROUSEL_ALBUM') && 
        <Link to={'/news?id=' + id} className="list-item">
          <img 
            src={news.instagramMediaUrl} 
            style={{width: '100%', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}} 
            alt="news-media"
            className="instagramm-img"
            ref={instImg}
          >
          </img>
        </Link>
      }
      {news.instagramMediaType === 'VIDEO' &&
        <>
        {!preview &&
          <div className={"news-media " + size} style={{backgroundColor: '#000'}}>
            <video controls ref={myRef} title={news.title} className={"news-video " + size} src={news.instagramMediaUrl}></video>
          </div>
        }
        {preview &&
          <>
            <FontAwesomeIcon icon={faPlayCircle} onClick={clickHandler} className={"news-play-icon " + size} /> 
            <div className={"news-media preview " + size} style={{backgroundImage: `url("${news.instagramThumbnailUrl}")`}}></div>
          </>
        }
        </>
      }
      <div className="news-text-content">
        <div className="news-text">
          <span className="news-content" style={{whiteSpace: 'pre-line'}}>
            {news.title.substring(0, 150) + ' ...'}
          </span><br /><br />
        </div>
        {!(news.instagramMediaType === 'VIDEO') && 
          <CustomButton 
            variant="outlined" 
            className="main-carousel-btn" 
            localHref={'/news?id=' + id}
          >
            Подробнее
          </CustomButton>
        }
      </div>
    </div>
  )
}