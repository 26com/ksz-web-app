import React from 'react'

import './style.css'

export function NotFound({logo}){
  return (
    <div className="not-found-container">
      <div className="not-found-logo">
        <img src={logo} />
      </div>
      <div className="not-found-content">
        <span>Страница не найдена | 404</span>
      </div>
    </div>
  )
}