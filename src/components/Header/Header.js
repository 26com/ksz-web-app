import { React } from 'react'
import { useState, useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import CustomTab from '../Tabs/CustomTab';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Menus/Drawer/Drawer';

import CustomButton from '../buttons/CustomButton/CustomButton';
import { ContentContext } from '../../App';
import './style.css'

export default function Header({value, setValue}){
  // состояние отображения бокового меню и функция его обновления
  const [openMenu, setOpenMenu] = useState(false)
  // функция открытия/закрытия бокового меню
  function toggleMenu (open) {
    setOpenMenu(open)
  }
  // определения контента и текущего размера экрана из объекта контекста
  const {content, size} = useContext(ContentContext)
  // функция изменения положения бегунка в меню
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-container">
      <TemporaryDrawer 
        toggleMenu={toggleMenu} 
        open={openMenu}
        address={content.addressActual}
        email={content.companyEmail}
        logoUrl={content.appLogoUrl}
        appSiteUrl={content.appSiteUrl}
      />
      {size === 'lg' && 
        <div className="header-info">
          <div className="header-address">{content.addressActual}</div>
          <div className="header-email">
          <a href={'mailto:' + content.companyEmail}>
              {content.companyEmail}
            </a>
          </div>
        </div>
      }
      <div className="header-menu">
        <Link to="/">
          <div className="header-logo">
            <img src={content.appLogoUrl} alt="logo"></img>
          </div>
        </Link>
        {size === 'lg' && 
        <>
        <div className="header-nav">
          <nav>
            <Tabs value={value} onChange={handleChange} aria-label="navigation">
              <CustomTab label="Главная" link="" />
              <CustomTab label="О нас" link="about" />
              <CustomTab label="Документация" link="documents" />
              <CustomTab label="Врачи" link="doctors" />
              <CustomTab label="Услуги" link="services" />
              <CustomTab label="Контакты" link="contacts" />
              <CustomTab label="Личный кабинет" href={content.appSiteUrl}/>
            </Tabs>
          </nav>
        </div>
        <div className="header-button">
          <CustomButton variant="contained" localHref="/appointment">
            Записаться на прием
          </CustomButton>
        </div>
        </>
        }
        {size !== 'lg' && 
          <div className="left-menu-btn" onClick={() => {toggleMenu(true)}}>
            <i className="fas fa-bars"></i>
          </div>
        }
      </div>
    </div>
  )
}