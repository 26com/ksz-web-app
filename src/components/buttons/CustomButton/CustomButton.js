import React from "react";
import { useNavigate } from "react-router";

import './style.css'

export default function CustomButton({variant, href, localHref, children}) {
  const navigate = useNavigate()
  // обработчик нажатия кнопки
  const clickHandler = () => {
    // разделение абсолютных и относительных ссылок
    if (href) window.location = href
    if (localHref) navigate(localHref)
  }
  return (
    <div className="button-container"> 
      <button onClick={clickHandler} className={"custom-button " + variant}>
        {children}
      </button>
    </div>
  )
}