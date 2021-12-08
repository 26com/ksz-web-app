import React from "react";

import { ContentContext } from '../../App';
import './style.css'

export function MainContainer(){
  // получение контента и текущего размера экрана из объекта контекста
  const {content, size} = React.useContext(ContentContext)
  return(
    // отображение html из полученных данных
    <div className={"main-container " + size} dangerouslySetInnerHTML={{ __html: content.siteMainContent }}></div>
  )
}