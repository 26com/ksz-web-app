import React from "react";

import './style.css'

export function About({content, setTabValue, tabValue}) {
  React.useEffect(() => {
    setTabValue(1)
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className="about-container">
      <div dangerouslySetInnerHTML={{__html: content.siteAbout}}></div>
      <div dangerouslySetInnerHTML={{__html: content.siteMainContent}}></div>
    </div>
  )
}