import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LoginIcon from '@mui/icons-material/Login';
import FeedIcon from '@mui/icons-material/Feed';
import { Link } from 'react-router-dom';

import './style.css'

export default function TemporaryDrawer({toggleMenu, open, address, email, logoUrl, appSiteUrl}) {
  const list = () => (
    <div className="drawer-container">
      <List onClick={() => {toggleMenu(false)}}>
          <ListItem>
            <Link to="/" className="list-item logo">
              <img src={logoUrl} alt="logo"></img>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RoomOutlinedIcon />
            </ListItemIcon>
            <div className="list-item">
              {address}
            </div>
          </ListItem>
          <ListItem key={'email'}>
            <ListItemIcon>
              <MarkEmailUnreadOutlinedIcon />
            </ListItemIcon>
            <div className="list-item">
              {email}
            </div>
          </ListItem>
      </List>
      <Divider />
      <List onClick={() => {toggleMenu(false)}} >
        <Link to="/" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
              Главная
          </ListItem>
        </Link>
        <Link to="/about" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
              О нас
          </ListItem>
        </Link>
        <Link to="/news" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
              Новости
          </ListItem>
        </Link>
        <Link to="/documents" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
              Документация
          </ListItem>
        </Link>
        <Link to="/doctors" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <PeopleAltOutlinedIcon />
            </ListItemIcon>
              Врачи
          </ListItem>
        </Link>
        <Link to="/services" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <MedicalServicesOutlinedIcon />
            </ListItemIcon>
              Услуги
          </ListItem>
        </Link>
        <Link to="/contacts" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <ContactPageOutlinedIcon />
            </ListItemIcon>
              Контакты
          </ListItem>
        </Link>
        <a href={appSiteUrl} className="list-item">
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
              Личный кабинет
          </ListItem>
        </a>
        <Link to="/appointment" className="list-item">
          <ListItem button>
            <ListItemIcon>
              <EventAvailableIcon />
            </ListItemIcon>
              Записаться на прием
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className="menu">
      <Drawer
        anchor='left'
        open={open}
        onClose={() => {toggleMenu(false)}}
      >
        {list()}
      </Drawer>
    </div>
  );
}
