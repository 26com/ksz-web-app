import React from "react";

// import { ContentContext } from '../../App';
import './style.css'

export function MainContainer(){
  // const content = React.useContext(ContentContext).content
  // return(
  //   <div className="main-container" dangerouslySetInnerHTML={{ __html: content.siteMainContent }}></div>
  // )
  return(
    <div className="main-container" dangerouslySetInnerHTML={{ __html:  
    `<div style="width: 100%;">
      <div style="">
        <h1>Немного о нас</h1>
        <img style="
          width: 100%;" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aksNTJrx-CkC9fzC4MHaSSRf7U91VwG4MA&usqp=CAU"
        >
        <span style="font-size: 1.4rem;">
          Это многопрофильный медицинский центр, 
          в котором предоставляются платные медицинские услуги, 
          включающие диагностику широкого спектра заболеваний, 
          а также их амбулаторное и стационарное лечение.
          Это многопрофильный медицинский центр, 
          в котором предоставляются платные медицинские услуги, 
          включающие диагностику широкого спектра заболеваний, 
          а также их амбулаторное и стационарное лечение.
        </span><br />
        <a href="https://ru.lipsum.com/">
          Подробнее...
        </a> 
      </div>
      <div style="margin-left: 30px">
      </div>
    </div>`
    }}></div>
  )
}