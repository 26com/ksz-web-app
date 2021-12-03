import React from "react";

import './style.css'

export function Contacts({content, setTabValue}) {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  React.useEffect(() => {
    setTabValue(5)
  })
  return (
    <div className="contacts-container">
      <div dangerouslySetInnerHTML={{__html: content.appContacts}}></div>
      <div className="contacts-map">
        <iframe src={content.appMapIframe} title="map" style={{marginTop: '40px'}}></iframe>
      </div>
    </div>
    
  )
}