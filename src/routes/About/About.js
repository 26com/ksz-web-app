import React, { useContext } from "react";

import { ContentContext } from "../../App";
import './style.css'

export function About({content, setTabValue}) {
  // получение текущего размера экрана из объекта контекста
  const {size} = useContext(ContentContext)
  // изменение положения ползунка в меню
  React.useEffect(() => {
    setTabValue(1)
  }, [setTabValue])
  // скрол при переходе
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className={"about-container " + size}>
      <div dangerouslySetInnerHTML={{__html: content.siteMainContent}}></div>
      <div dangerouslySetInnerHTML={{__html: content.siteAbout}}></div>
    </div>
  )
}