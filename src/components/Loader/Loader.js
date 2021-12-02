import React from 'react'

import './style.css'

export function Loader(){
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-animation">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    </div>
  )
}