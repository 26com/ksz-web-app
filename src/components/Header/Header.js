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

  const [openMenu, setOpenMenu] = useState(false)

  function toggleMenu (open) {
    setOpenMenu(open)
  }

  const {content, size} = useContext(ContentContext)

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
          <div className="header-email">{content.companyEmail}</div>
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
              <CustomTab label="Врачи" link="users" />
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
        <div className="header-contacts">
          <div className="phone">8(8652)33-38-33</div>
          <div className="schedule">c 8:00 до 20:00</div>
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