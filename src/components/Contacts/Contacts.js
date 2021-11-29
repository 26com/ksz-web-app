import React from "react";
import { ContentContext } from '../../App';
import './style.css'

export function Contacts(){
  const {content, size} = React.useContext(ContentContext)
  return(
    <div className={"contacts-container " + size}>
      <h1>Контакты</h1>
      <div className="contacts-content">
        <div className="contacts-text">
          <div className="contacts-data" dangerouslySetInnerHTML={{ __html: content.appContacts }}></div>
          <div className="contacts-socials">
            {content.siteVkUrl && 
              <a href={content.siteVkUrl}>
                <i className="fab fa-vk"></i>
              </a>
            }
            {content.siteInstagramUrl && 
              <a href={content.siteInstagramUrl}>
                <i className="fab fa-instagram"></i>
              </a>
            }
          </div>
        </div>
        <div className="contacts-map">
          <iframe src={content.appMapIframe} title="map"></iframe>
        </div>
      </div>
    </div>
  )
}