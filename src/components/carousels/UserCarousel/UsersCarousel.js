import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import CustomButton from '../../buttons/CustomButton/CustomButton';
import { getUsers } from '../../../api/api';
import { ContentContext } from '../../../App';
import './style.css'

export function UsersCarousel({setUser, setUsersStore}){
  // получение функции для внутреннего роутинга
  const navigate = useNavigate()
  // получение текущего размера экрана из контекста
  const {size} = useContext(ContentContext)
  // установка количества элементов в карусели
  let perPage = 7
  if (size === 'md') perPage = 5
  if (size === 'sm') perPage = 1
  // установка массива врачей и функции его изменения 
  const [users, setUsers] = useState([])
  // установка случайных врачей для карусели
  const sortUsers = (users) => {
    const sortUsers = []
    const keys = Object.keys(users).sort(() => (Math.random() - 0.5))
    for (let i = 0; i < 15; i++) {
      sortUsers.push(users[keys[i]])
    }
    return sortUsers
  }
  // роутинг по клику на кнопку Все врачи
  const clickHandler = (id) => {
    setUser(id)
    navigate('/users')
  }
  // получение врачей с сервера
  useEffect(() => {
    getUsers().then(res => {
      // установка локального состояния с врачами
      setUsers(sortUsers(res.data.users))
      // установка глобального состояния с врачами, для использования на странице со всеми врачами
      setUsersStore(res.data.users)
    })
  }, [setUsersStore])

  return(
    <div className="users-container">
      <h1 className="users-carousel-label">Наши специалисты</h1>
      <Splide options={ {
        rewind: true,
        width: '100%',
        gap: '1rem',
        lazyLoad: 'nearby',
        perPage: perPage,
        arrows: false,
      } }>
        {users.map(user => (
          <SplideSlide key={user.id}>
            <div className={"users-carousel-item " + size} key={user.id} onClick={() => {clickHandler(user.id)}}>
              <img 
                src={window.apiConfig.url + '/file/get-user-photo?idUser=' + user.id}
                alt="user"
              />
              <br />
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
          localHref={'/doctors'}
        >
          Все специалисты
        </CustomButton> 
      </div>
    </div>
  )
}