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
    <>
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
        <ListItem button>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <Link to="/" className="list-item">
            Главная
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <Link to="/about" className="list-item">
            О нас
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FeedIcon />
          </ListItemIcon>
          <Link to="/news" className="list-item">
            Новости
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionOutlinedIcon />
          </ListItemIcon>
          <Link to="/documents" className="list-item">
            Документация
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleAltOutlinedIcon />
          </ListItemIcon>
          <Link to="/users" className="list-item">
            Врачи
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MedicalServicesOutlinedIcon />
          </ListItemIcon>
          <Link to="/services" className="list-item">
            Услуги
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactPageOutlinedIcon />
          </ListItemIcon>
          <Link to="/contacts" className="list-item">
            Контакты
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <a href={appSiteUrl} className="list-item">
            Личный кабинет
          </a>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <Link to="/appointment" className="list-item">
            Записаться на прием
          </Link>
        </ListItem>
      </List>
    </>
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
