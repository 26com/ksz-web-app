import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { getUsers } from '../../../api/api';
import { ContentContext } from '../../../App';
import './style.css'

export function UsersCarousel({setUser}){
  const navigate = useNavigate()
  const {size} = useContext(ContentContext)
  let perPage = 5
  if (size === 'md') perPage = 3
  if (size === 'sm') perPage = 1

  const [users, setUsers] = useState([])
  const sortUsers = (users) => {
    const sortUsers = []
    const keys = Object.keys(users).sort(() => (Math.random() - 0.5))
    for (let i = 0; i < 15; i++) {
      sortUsers.push(users[keys[i]])
    }
    return sortUsers
  }
  const clickHandler = (id) => {
    setUser(id)
    navigate('/users')
  }
  useEffect(() => {
    getUsers().then(res => {
      setUsers(sortUsers(res.data.users))
    })
  }, [])

  return(
    <div className="users-container">
      <h1 className="users-carousel-label">Наши специалисты</h1>
      <Splide options={ {
        rewind: true,
        width: '100%',
        gap: '1rem',
        lazyLoad: true,
        perPage: perPage,
        arrows: false,
      } }>
        {users.map(user => (
          <SplideSlide key={user.id}>
            <div className={"users-carousel-item " + size} key={user.id} onClick={() => {clickHandler(user.id)}}>
              <img src={window.apiConfig.url + '/file/get-user-photo?idUser=' + user.id} alt="user"/><br />
              <span className="user-name">{user.surname} {user.name} {user.middleName}</span>
              {user.specials && user.specials.map((special, index) => (
                <div key={index}>
                  <span className="user-special">{special}</span>
                </div>
              ))}
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="users-btn-container">
        <CustomButton 
          variant="outlined" 
          className="main-carousel-btn" 
          localHref={'/users'}
        >
          Все специалисты
        </CustomButton> 
      </div>
    </div>
  )
}