import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { ContentContext } from '../../App'
import './style.css'

export function Footer(){
  const {content, size} = React.useContext(ContentContext)
  let phone = null
  if (content.phoneWork) phone = content.phoneWork.split(', ')[0]
  const year = ' ' + moment().format('YYYY') + ' '
  return (
    <footer>
      <div className={"footer-container " + size}>
        <div className="footer-info">
          <div className="logo">
            <img src={content.appLogoUrl} alt="logo" />
          </div>
          <div className="name-client">
            {content.nameClient}
          </div>
          <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            {content.addressActual}
          </div>
          <div className="schedule">
            <i className="fas fa-clock"></i>
            {content.siteWorkSchedule}
          </div>
        </div>
        <div className="footer-about">
          <h4>О нас</h4>
          <ul>
            <li>
              <Link to="/about">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/services">
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/users">
                Специалисты
              </Link>
            </li>
            <li>
              <Link to="/documents">
                Документы
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-for-clients">
          <h4>Пациентам</h4>
          <ul>
            <li>
              <a href={content.appSiteUrl}>
                Личный кабинет
              </a>
            </li>
            <li>
              <Link to="/appointment">
                Записаться на прием
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-for-contacts">
          <h4>Контакты</h4>
          <ul>
            <li className="phone">
              <i className="fas fa-phone"></i>
              <Link to={'tel:' + phone}>
                {content.phoneWork}
              </Link>
            </li>
            <li className="email">
              <i className="fas fa-envelope"></i>
              <Link to={'mailto:' + content.companyEmail}>
                {content.companyEmail}
              </Link> 
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <div className="copyright">
          <i className="far fa-copyright"></i>
          {year}
          Официальный сайт {content.nameClientShort}
        </div>
        <div className="developer">
          Разработано: ООО "Кибер-Софт"
        </div>
      </div>
    </footer>
  )
}