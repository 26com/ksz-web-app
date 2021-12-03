import React, { useContext } from "react";

import { ContentContext } from "../../App";
import './style.css'

export function About({content, setTabValue}) {
  const {size} = useContext(ContentContext)
  React.useEffect(() => {
    setTabValue(1)
  }, [setTabValue])
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className={"about-container " + size}>
      <div dangerouslySetInnerHTML={{__html: content.siteMainContent}}></div>
      <div dangerouslySetInnerHTML={{__html: content.siteAbout}}></div>
      <div className="contacts-map">
        <iframe src={content.appMapIframe} title="map" style={{marginTop: '40px'}}></iframe>
      </div>
    </div>
  )
}