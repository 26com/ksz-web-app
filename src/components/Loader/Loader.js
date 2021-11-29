import React from 'react'

import './style.css'

export function Loader(){
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="https://www.doctorznaet.ru/manager/templates/doctorznaet/img/logo-medical.png" alt="logo"></img>
        </div>
        <div className="loader-animation">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    </div>
  )
}